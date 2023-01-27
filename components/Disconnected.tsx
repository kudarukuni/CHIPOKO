import { FC, MouseEventHandler, useCallback } from "react"
import { Button, Container, Heading, HStack, Text, VStack, } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"
const Disconnected: FC = () => { 
    const modalState = useWalletModal()
    const { wallet, connect } = useWallet()
    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
      (event) => {
        if (event.defaultPrevented) {
          return
        }
        if (!wallet) {
          modalState.setVisible(true)
        } else {
          connect().catch(() => {})
        }
      },
      [wallet, connect, modalState]
    )
    return (
      <Container zIndex={10}>
        <VStack spacing={20}>
        <Heading color="white" as="h1" size="2xl" noOfLines={2} textAlign="center">
           The Goritoto NFT Collection 
          </Heading>
          <Text fontSize={"22px"} color={"white"} textAlign="center">
          Join the ranks of the Grim Reapers by minting your own Goritoto NFT collectible and earn Ghostcoins $GSC by staking your collectible. You can upgrade your collectible by purchasing gears and outfits from the various lootboxes in the community! Time to level up mint your Reaper.
          </Text>
          <Button bgColor="#0000BB"_hover={{ bgColor: "#0000FF", }} color="white" maxW="380px" onClick={handleClick}>
            <HStack>
              <Text>Mint a Grim Reaper</Text>
              <ArrowForwardIcon />
            </HStack>
          </Button>
        </VStack>
      </Container>
    )
  }
  export default Disconnected
