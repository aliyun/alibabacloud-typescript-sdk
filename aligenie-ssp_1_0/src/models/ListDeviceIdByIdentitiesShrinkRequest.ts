// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceIdByIdentitiesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. Enter the Project ID of the project to which this product belongs. You can view it in the Tmall Genie AI platform console.
   * 
   * This parameter is required.
   * 
   * @example
   * 125****0946
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
   * List of device authentication identifiers.
   */
  identityIdsShrink?: string;
  /**
   * @remarks
   * Device authentication type. Enter **MAC** or **SN**.
   * 
   * This parameter is required.
   * 
   * @example
   * MAC
   */
  identityType?: string;
  /**
   * @remarks
   * The unique product identifier ProductKey, which is a globally unique identity issued by the platform when creating a product in the Tmall Genie AI platform.
   * 
   * This parameter is required.
   * 
   * @example
   * Mm*****XnZ8
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      identityIdsShrink: 'IdentityIds',
      identityType: 'IdentityType',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      identityIdsShrink: 'string',
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

