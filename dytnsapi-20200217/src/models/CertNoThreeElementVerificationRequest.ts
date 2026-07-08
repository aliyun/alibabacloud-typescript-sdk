// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CertNoThreeElementVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code. Sources:
   * - In the Cell Phone Number Service console, go to the [Tag Square](https://dytns.console.aliyun.com/analysis/square) page, select the **ID Card Three Elements** tag, and submit a usage application. After the application is approved, you will obtain the authorization code.
   * - On the [My Applications](https://dytns.console.aliyun.com/analysis/apply) page of the Cell Phone Number Service console, view the approved **ID Card Three Elements** authorization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * QASDW@#**
   */
  authCode?: string;
  /**
   * @remarks
   * The name to be verified.
   * 
   * This parameter is required.
   * 
   * @example
   * 张三
   */
  certName?: string;
  /**
   * @remarks
   * The ID card number to be verified.
   * 
   * This parameter is required.
   * 
   * @example
   * 3***************0
   */
  certNo?: string;
  /**
   * @remarks
   * The BASE64 encoding of the portrait photo to be verified. **Remove the encoded URI information (such as `data:image/png;base64,`) before submission**. The photo size and the BASE64-encoded size must not exceed 50 KB.
   * 
   * This parameter is required.
   * 
   * @example
   * iVBOFMKODOFNDFP123DFSMOO...
   */
  certPicture?: string;
  /**
   * @remarks
   * Specifies whether to encrypt. Currently only unencrypted is supported.
   * 
   * @example
   * 不加密
   */
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      certName: 'CertName',
      certNo: 'CertNo',
      certPicture: 'CertPicture',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      certName: 'string',
      certNo: 'string',
      certPicture: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

