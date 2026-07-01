// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSmsSignRequestSignFileList extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded string of the qualification certificate file for the signature. The image size cannot exceed 2 MB. In some scenarios, you need to upload a certificate file when you apply for a signature.
   * 
   * For detailed specifications, see [File upload specifications](https://help.aliyun.com/document_detail/463316.html).
   * 
   * This parameter is required.
   * 
   * @example
   * R0lGODlhHAAmAKIHAKqqqsvLy0hISObm5vf394uL****
   */
  fileContents?: string;
  /**
   * @remarks
   * The format of the signature certificate file. Multiple images can be uploaded. Currently, JPG, PNG, GIF, and JPEG formats are supported. In some scenarios, you need to upload a certificate file when you apply for a signature.
   * 
   * > If the signature is for third-party use or if you are an individual-certified user whose self-use signature source is an enterprise or public institution name, you also need to upload a certificate file and a power of attorney. For more information, see [Certificate file](https://help.aliyun.com/document_detail/108076.html) and [Power of attorney](https://help.aliyun.com/document_detail/56741.html).
   * 
   * This parameter is required.
   * 
   * @example
   * jpg
   */
  fileSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      fileContents: 'FileContents',
      fileSuffix: 'FileSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContents: 'string',
      fileSuffix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmsSignRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The description of the SMS signature scenario. The description cannot exceed 200 characters in length.
   * 
   * This is reference information for signature review. Providing a complete application description helps reviewers understand your business scenario and improves review efficiency. Guidelines for filling in:
   * 
   * - You can provide the use cases of a business that has been launched.
   * 
   * - You can provide real-world SMS message examples to reflect your business scenarios.
   * 
   * - You can provide the parameter values passed to variables and describe the business use cases and the reasons for choosing these variable attributes in detail.
   * 
   * - You can provide the website links, registered domain names, or app store download links of your actual business.
   * 
   * - For login scenarios, you can provide a test account and password.
   * 
   * This parameter is required.
   * 
   * @example
   * 当前的短信签名应用于双11大促推广营销
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of signature files.
   * 
   * This parameter is required.
   */
  signFileList?: AddSmsSignRequestSignFileList[];
  /**
   * @remarks
   * The signature name. The signature name must comply with the [Signature specifications](~~108076#section-0p8-qn8-mmy~~).
   * 
   * > - Signature names are case-insensitive. For example, [Aliyun Communication] and [aliyun communication] are considered the same name.
   * > - When your verification code signature and general-purpose signature have the same name, the system uses the general-purpose signature to send SMS messages by default.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云
   */
  signName?: string;
  /**
   * @remarks
   * The source of the signature. Valid values:
   * 
   * -  **0**: Full name or abbreviation of an enterprise or public institution.
   * -  **1**: Full name or abbreviation of a website registered with the Ministry of Industry and Information Technology (MIIT).
   * -  **2**: Full name or abbreviation of an app.
   * -  **3**: Full name or abbreviation of an official account or mini program.
   * -  **4**: Full name or abbreviation of an e-commerce platform store name.
   * -  **5**: Full name or abbreviation of a trademark name.
   * 
   * For detailed descriptions of signature sources, see [Signature source](https://help.aliyun.com/en/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.0.4f9710fder2gR7#section-xup-k46-yi4).
   * 
   * >This API does not support applying for signatures whose signature source is **Test or learning** or **Online trial**. If you need to apply for signatures with these two sources, go to the [Short Message Service (SMS) console](https://dysms.console.aliyun.com/domestic/text/sign/add/qualification) to submit your application.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  signSource?: number;
  /**
   * @remarks
   * The type of the signature.
   * 
   * - **0**: Verification code
   * - **1**: General-purpose
   * 
   * @example
   * 1
   */
  signType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signFileList: 'SignFileList',
      signName: 'SignName',
      signSource: 'SignSource',
      signType: 'SignType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signFileList: { 'type': 'array', 'itemType': AddSmsSignRequestSignFileList },
      signName: 'string',
      signSource: 'number',
      signType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.signFileList)) {
      $dara.Model.validateArray(this.signFileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

