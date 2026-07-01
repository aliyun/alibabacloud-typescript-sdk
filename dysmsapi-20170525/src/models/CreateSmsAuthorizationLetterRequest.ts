// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsAuthorizationLetterRequest extends $dara.Model {
  /**
   * @remarks
   * The authorizing party, that is, the owner of the signature. Only the middle dot `·`, Chinese `【】（）`, English `()`, and spaces are supported. Other symbols or purely numeric input are not allowed. The length cannot exceed 150 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 菜鸟网络科技有限公司
   */
  authorization?: string;
  /**
   * @remarks
   * The validity period of the authorization letter. Format: `YYYY-MM-DD~YYYY-MM-DD`.
   * 
   * > The recommended validity period is 1 to 3 years. Set a reasonable time period and avoid making the validity period too long or too short.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01~2026-01-01
   */
  authorizationLetterExpDate?: string;
  /**
   * @remarks
   * The name of the authorization letter. The name cannot be the same as any of your other authorization letters. Only Chinese characters, English characters, or a combination with numbers are supported. Symbols or purely numeric input are not allowed. The length cannot exceed 100 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 菜鸟公司授权书
   */
  authorizationLetterName?: string;
  /**
   * @remarks
   * The fileKey of the authorization letter.
   * 
   * 1. The authorization letter file uploaded to OSS. Download the [Authorization Letter Template](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20250414/bvpcmo/%E6%8E%88%E6%9D%83%E5%A7%94%E6%89%98%E4%B9%A6%E6%A8%A1%E7%89%88.doc), then fill it out and stamp it according to the [specifications](https://help.aliyun.com/document_detail/56741.html) before uploading. File upload requirements:
   * - The name of the file to be uploaded cannot contain Chinese characters or special characters.
   * - Only images in JPG, PNG, GIF, or JPEG format are supported, and the image must not exceed 5 MB.
   * 
   * 2. To obtain the fileKey, see [Upload files through OSS](https://help.aliyun.com/document_detail/2833114.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 123456/test1719383196031.jpg
   */
  authorizationLetterPic?: string;
  /**
   * @remarks
   * The unified social credit code of the authorizing party. The length cannot exceed 150 characters. The credit code must be consistent with the unified social credit code field in the qualification information bound to the signature. Otherwise, the signature creation will fail.
   * 
   * This parameter is required.
   * 
   * @example
   * 9****************A
   */
  organizationCode?: string;
  ownerId?: number;
  /**
   * @remarks
   * The authorized party, that is, the signature applicant. Only the middle dot `·`, Chinese `【】（）`, English `()`, and spaces are supported. Other symbols or purely numeric input are not allowed. The length cannot exceed 150 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 支付宝（中国）网络技术有限公司
   */
  proxyAuthorization?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of authorized signatures. The number of signatures cannot exceed 100.
   * 
   * > We recommend that you authorize all signatures that may be used at once in the authorization letter. This prevents subsequent signature applications from falling outside the scope of the authorization letter, which would cause review failure and require you to supplement the authorization letter.
   * 
   * This parameter is required.
   */
  signList?: string[];
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      authorizationLetterExpDate: 'AuthorizationLetterExpDate',
      authorizationLetterName: 'AuthorizationLetterName',
      authorizationLetterPic: 'AuthorizationLetterPic',
      organizationCode: 'OrganizationCode',
      ownerId: 'OwnerId',
      proxyAuthorization: 'ProxyAuthorization',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signList: 'SignList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: 'string',
      authorizationLetterExpDate: 'string',
      authorizationLetterName: 'string',
      authorizationLetterPic: 'string',
      organizationCode: 'string',
      ownerId: 'number',
      proxyAuthorization: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.signList)) {
      $dara.Model.validateArray(this.signList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

