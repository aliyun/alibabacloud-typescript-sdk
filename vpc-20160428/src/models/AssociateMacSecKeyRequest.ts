// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateMacSecKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The key secret. This parameter accepts only hexadecimal characters. Lowercase letters are automatically converted to uppercase. The cipher suite determines the required length of the key secret: 32 hexadecimal characters for GCM-AES-128 or GCM-AES-XPN-128, and 64 hexadecimal characters for GCM-AES-256 or GCM-AES-XPN-256.
   * 
   * This parameter is required.
   * 
   * @example
   * 0123456789ABCDEF0123456789ABCDEF
   */
  cak?: string;
  /**
   * @remarks
   * The cipher suite. Valid values:
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
   * The key name. This parameter accepts only hexadecimal characters. Lowercase letters are automatically converted to uppercase. The cipher suite determines the required length of the key name: 32 hexadecimal characters for GCM-AES-128 or GCM-AES-XPN-128, and 64 hexadecimal characters for GCM-AES-256 or GCM-AES-XPN-256.
   * 
   * This parameter is required.
   * 
   * @example
   * 0123456789ABCDEF0123456789ABCDEF
   */
  ckn?: string;
  /**
   * @remarks
   * The ID of the Express Connect physical connection.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1hp0wr072f6****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The region ID of the Express Connect physical connection.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/448570.html) operation to obtain the region ID.
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

