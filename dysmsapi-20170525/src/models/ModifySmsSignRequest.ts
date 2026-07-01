// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySmsSignRequestSignFileList extends $dara.Model {
  /**
   * @remarks
   * 签名的纸质证明文件经base64编码后的字符串。图片不超过2 MB。
   * 
   * 个别场景下，申请签名需要上传证明文件。详细说明，请参见[短信签名规范](https://help.aliyun.com/document_detail/108076.html)。
   * 
   * This parameter is required.
   * 
   * @example
   * R0lGODlhHAAmAKIHAKqqqsvLy0hISObm5vf394uLiwAA
   */
  fileContents?: string;
  /**
   * @remarks
   * 签名的证明文件格式，支持上传多张图片。当前支持JPG、PNG、GIF或JPEG格式的图片。
   * 
   * 个别场景下，申请签名需要上传证明文件。详细说明，请参见[短信签名规范](https://help.aliyun.com/document_detail/108076.html)。
   * > 如果签名用途为他用或个人认证用户的自用签名来源为企事业单位名时，还需上传证明文件和委托授权书，详情请参见[证明文件](https://help.aliyun.com/document_detail/108076.html)和[授权委托书](https://help.aliyun.com/document_detail/56741.html)。
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

export class ModifySmsSignRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The description of the SMS signature application. The description cannot exceed 200 characters in length.
   * 
   * The description is used as a reference for signature review. A complete description helps reviewers understand your business scenario and improves review efficiency. Guidelines:
   * 
   * - Provide the use case of a service that is already online.
   * - Provide an SMS example from a real scenario to illustrate your business scenario.
   * - Provide the values passed for variables, and describe the business scenario in detail and the reason for choosing the variable attributes.
   * - Provide the website URL of the actual service, a filed domain name, or an app store download link.
   * - For logon scenarios, provide a test account and password.
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
  signFileList?: ModifySmsSignRequestSignFileList[];
  /**
   * @remarks
   * The signature name.
   * 
   * > You can modify a signature that has been approved, but you cannot change its name. The modified signature must be reviewed and approved before it can be used. The original signature cannot be used until the review is complete.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云
   */
  signName?: string;
  /**
   * @remarks
   * The signature source. Valid values:
   * 
   * - **0**: full name or abbreviation of an enterprise or public institution.
   * - **1**: full name or abbreviation of a website filed with the Ministry of Industry and Information Technology (MIIT).
   * - **2**: full name or abbreviation of an app.
   * - **3**: full name or abbreviation of an official account or mini program.
   * - **4**: full name or abbreviation of a store on an e-commerce platform.
   * - **5**: full name or abbreviation of a trademark.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  signSource?: number;
  /**
   * @remarks
   * The signature type. Valid values:
   * 
   * - **0**: verification code.
   * 
   * - **1**: general.
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
      signFileList: { 'type': 'array', 'itemType': ModifySmsSignRequestSignFileList },
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

