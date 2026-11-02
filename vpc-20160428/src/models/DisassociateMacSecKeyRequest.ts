// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociateMacSecKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the key. Only hexadecimal characters are supported, and lowercase letters are automatically converted to uppercase letters. The length must be 32 hexadecimal characters when the encryption algorithm is GCM-AES-128 or GCM-AES-XPN-128, and 64 hexadecimal characters when the encryption algorithm is GCM-AES-256 or GCM-AES-XPN-256. The value must be the name of a key that has been associated with the target Express Connect circuit by calling the AssociateMacSecKey operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 0123456789ABCDEF0123456789ABCDEF
   */
  ckn?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit. The Express Connect circuit must be in the **Enabled** state and its **BusinessStatus** must be **Normal**. You can call the DescribePhysicalConnections operation to query the status.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1hp0wr072f6****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The region ID of the Express Connect circuit. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/448570.html) operation to query region IDs.
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

