// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceIdByIdentityRequest extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. Enter the Project ID of the project to which this product belongs. You can view it in the Tmall Genie AI platform console.
   * 
   * This parameter is required.
   * 
   * @example
   * 129****0946
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. Enter **PROJECT_ID** here.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Authentication identifier. Enter the MAC address or the SN value.
   * 
   * This parameter is required.
   * 
   * @example
   * b4:xx:xx:xx:65:2b
   */
  identityId?: string;
  /**
   * @remarks
   * Device authentication type. Enter **MAC**, **SN**, or **CTEI**.
   * 
   * This parameter is required.
   * 
   * @example
   * MAC
   */
  identityType?: string;
  /**
   * @remarks
   * The unique product identifier ProductKey, which is a globally unique identity issued by the platform when the product is created in the Tmall Genie AI platform. This parameter is optional when IdentityType is **CTEI**.
   * 
   * @example
   * Mm*****XnZ8
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      identityId: 'IdentityId',
      identityType: 'IdentityType',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      identityId: 'string',
      identityType: 'string',
      productKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

