// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSmsSignRequestSignFileList extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded string of the qualification document. An image cannot exceed 2 MB in size. In some scenarios, you must upload supporting documents to apply for signatures. For more information, see [SMS signature specifications](https://help.aliyun.com/document_detail/108076.html).
   * 
   * This parameter is required.
   * 
   * @example
   * R0lGODlhHAAmAKIHAKqqqsvLy0hISObm5vf394uL****
   */
  fileContents?: string;
  /**
   * @remarks
   * The format of the qualification document. You can upload multiple images. Images in JPG, PNG, GIF, or JPEG format are supported.
   * 
   * In some scenarios, you must upload supporting documents to apply for signatures. For more information, see [SMS signature specifications](https://help.aliyun.com/document_detail/108076.html).
   * 
   * > If you apply for a signature for other users or if the signature source is the name of an enterprise or public institution, you must upload a certificate and a letter of authorization. For more information, see [Certificate](https://help.aliyun.com/document_detail/108076.html) and [Letter of authorization](https://help.aliyun.com/document_detail/56741.html).
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
   * The description of the signature application. The description cannot exceed 200 characters in length. The description is one of the reference information for signature review. We recommend that you describe the use scenarios of your services in detail, and provide information that can verify the services, such as a website URL, a domain name with an ICP filing, an app download URL, an official account name, or a mini program name. For sign-in scenarios, you must also provide an account and password for tests. A detailed description can improve the review efficiency of signatures and templates.
   * 
   * This parameter is required.
   * 
   * @example
   * This is the abbreviation of our company.
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The signature files.
   * 
   * This parameter is required.
   */
  signFileList?: AddSmsSignRequestSignFileList[];
  /**
   * @remarks
   * The name of the signature.
   * 
   * > 
   * 
   * *   The signature name is not case-sensitive. For example, [Alibaba Cloud Communication] and [alibaba cloud communication] are considered as the same name.
   * 
   * *   If your verification code signature and general-purpose signature have the same name, the system uses the general-purpose signature to send messages by default.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  /**
   * @remarks
   * The source of the signature. Valid values:
   * 
   * *   **0**: the full name or abbreviation of an enterprise or institution
   * *   **1**: the full name or abbreviation of a website that has obtained an ICP filing from the Ministry of Industry and Information Technology (MIIT) of China
   * *   **2**: the full name or abbreviation of an app
   * *   **3**: the full name or abbreviation of an official account or mini-program
   * *   **4**: the full name or abbreviation of an e-commerce store
   * *   **5**: the full name or abbreviation of a trademark
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  signSource?: number;
  /**
   * @remarks
   * The type of the signature. Valid values:
   * 
   * *   **0**: verification code
   * *   **1**: general-purpose
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

