// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociateMacSecKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The key name. Only hexadecimal characters are supported. Lowercase characters are automatically converted to uppercase. When the encryption algorithm type is GCM-AES-128 or GCM-AES-XPN-128, the length must be 32 hexadecimal characters. When the encryption algorithm type is GCM-AES-256 or GCM-AES-XPN-256, the length must be 64 hexadecimal characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 0123456789ABCDEF0123456789ABCDEF
   */
  ckn?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1hp0wr072f6****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The region ID of the Express Connect circuit.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/448570.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ckn: 'Ckn',
      physicalConnectionId: 'PhysicalConnectionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

