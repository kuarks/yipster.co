---
title: "Vulnerabilidad en Ethereum, de nuevo!"
layout: post
fecha: 7 de noviembre del 2017
description: Parity Tech acaba de hacer de conocimiento público una "vulnerabilidad" encontrada en su wallet multisig y la causa de este error son los "contratos inteligentes" (smart contracts, CI a partir de ahora) de Ethereum. 
cover: "http://res.cloudinary.com/yipster/image/upload/v1510076012/ethereum-vulnerability_cq9e8g.jpg"
twitter_cover: "http://res.cloudinary.com/yipster/image/upload/v1510076012/ethereum-vulnerability_cq9e8g.jpg"
categories: noticias 
tags: ethereum vulnerabilidad solidity
comments: true
---

Parity Tech acaba de hacer de conocimiento público una "vulnerabilidad" encontrada en su wallet multisig y la causa de este error son los "contratos inteligentes" (smart contracts, CI a partir de ahora) de Ethereum. 

La compañía ha congelado los bienes de sus clientes mientras logran reparar la "vulnerabilidad".

A primera vista podemos pensar que el problema se encuentra en el código de la compañía y es cierto pero la realidad es que el mayor problema se encuentra en Ethereum o más específicamente, en sus CI y el lenguaje usado para crearlos.

Esta no es la primera vez que sucede (¿recuerdas el DAO?) y seguro no será la última y la razón para esto son los propios CI de Ethereum, no están listos para usarse en producción, quizá nunca lo estén de seguir por el mismo camino.

El gran problema está en el lenguaje usado para crear los CI y es que este pretende facilitar la creación de los CI  dejando de lado la seguridad (es muy difícil tener ambos a la vez).

Solidity, el lenguaje usado para la creación de CI (con sintaxis a la JavaScript), es Turing completo (lo quiere decir que trae todas las funcionalidades de un lenguage de programación -> simplificando) y esto es un gran problema puesto que introduce complejidad en el sistema y a más complejidad mayor la posibilidad de vulnerabilidades y a más vulnerabilidades mayor posibilidad de encontrar alguna y explotarla y bya bye dinero.

Bitcoin tiene CI desde el comienzo sin embargo su desarrollo va despacio pero con paso seguro. 

Recientemente Blockstream anunció un nuevo lenguaje para manejar estos CI en Bitcoin, **Simplicity**. Una de sus características es que es Turing incompleto, lo cual reduce la complejidad en el sistema, pero también dificulta el proceso de programación de contratos, lo cual no debe importar ya que si estamos hablando de dinero queremos a los mejores.

Hay que pensar bien antes de invertir nuestro dinero, Ethereum no se ve bien y muy a pesar de que esta situación ya ha sucedido antes su líderes no han hecho nada para solucionar el verdadero problema. 

En 9 años Bitcoin no ha tenido ni un solo problema de hackeo al contrario de Ethereum que en 2 años de vida ya lleva un hackeo directo al protocolo (DAO) y no menos de 5 debidos a los CI.

**Referencias**

[https://paritytech.io/blog/security-alert.html](https://paritytech.io/blog/security-alert.html)

[https://blockstream.com/2017/10/30/simplicity.html](https://blockstream.com/2017/10/30/simplicity.html)

[https://hackernoon.com/smart-contracts-turing-completeness-reality-3eb897996621](https://hackernoon.com/smart-contracts-turing-completeness-reality-3eb897996621)

[https://steemit.com/thedao/@dana-edwards/turing-complete-smart-contracts-can-never-be-trustworthy](https://steemit.com/thedao/@dana-edwards/turing-complete-smart-contracts-can-never-be-trustworthy)
