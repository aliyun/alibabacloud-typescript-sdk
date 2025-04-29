// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeKeyPairsResponseBodyKeyPairsKeyPairTags } from "./DescribeKeyPairsResponseBodyKeyPairsKeyPairTags";


export class DescribeKeyPairsResponseBodyKeyPairsKeyPair extends $dara.Model {
  /**
   * @remarks
   * The time when the key pair was created.
   * 
   * @example
   * 2023-09-04T08:33Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The fingerprint of the key pair.
   * 
   * @example
   * ABC1234567
   */
  keyPairFingerPrint?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The content of the public key.
   * 
   * @example
   * ssh-rsa****
   */
  publicKey?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-amnhr7u7c7hj****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the key pair.
   */
  tags?: DescribeKeyPairsResponseBodyKeyPairsKeyPairTags;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      keyPairFingerPrint: 'KeyPairFingerPrint',
      keyPairName: 'KeyPairName',
      publicKey: 'PublicKey',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      keyPairFingerPrint: 'string',
      keyPairName: 'string',
      publicKey: 'string',
      resourceGroupId: 'string',
      tags: DescribeKeyPairsResponseBodyKeyPairsKeyPairTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

