// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateMacSecKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The passphrase of the key. Only hexadecimal characters are supported, and lowercase letters are automatically transformed to uppercase letters. If the encryption algorithm type is GCM-AES-128 or GCM-AES-XPN-128, the length must be 32 hexadecimal characters. If the encryption algorithm type is GCM-AES-256 or GCM-AES-XPN-256, the length must be 64 hexadecimal characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 0123456789ABCDEF0123456789ABCDEF
   */
  cak?: string;
  /**
   * @remarks
   * The encryption algorithm type. Valid values:
   * 
   * - GCM-AES-128
   * 
   * - GCM-AES-XPN-128
   * 
   * - GCM-AES-256
   * 
   * - GCM-AES-XPN-256
   * 
   * This parameter is required.
   * 
   * @example
   * GCM-AES-128
   */
  cipherSuite?: string;
  /**
   * @remarks
   * The name of the key. Only hexadecimal characters are supported, and lowercase letters are automatically transformed to uppercase letters. If the encryption algorithm type is GCM-AES-128 or GCM-AES-XPN-128, the length must be 32 hexadecimal characters. If the encryption algorithm type is GCM-AES-256 or GCM-AES-XPN-256, the length must be 64 hexadecimal characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 0123456789ABCDEF0123456789ABCDEF
   */
  ckn?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit. The Express Connect circuit must be a dedicated Express Connect circuit that has been paid for, is hosted on a device that supports MACsec, and is in the **Enabled** state. You can call the DescribePhysicalConnections operation to query the current state and device capabilities.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1hp0wr072f6****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The region ID of the Express Connect circuit. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/448570.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cak: 'Cak',
      cipherSuite: 'CipherSuite',
      ckn: 'Ckn',
      physicalConnectionId: 'PhysicalConnectionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cak: 'string',
      cipherSuite: 'string',
      ckn: 'string',
      physicalConnectionId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

