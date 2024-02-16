'use client'

import { motion } from "framer-motion";

export default function Box() {
     return (
          <motion.div
               initial={{ x: 0 }}
               animate={{x: 100}}
               style={{ background: 'blue', width: '200', height: '200' }}>
               <h1>Hello how are you doing</h1>
          </motion.div>
     )
}