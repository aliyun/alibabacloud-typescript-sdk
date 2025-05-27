// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmsSignRequest extends $dara.Model {
  /**
   * @remarks
   * Application scenarios, instructions as follows:
   * - For registered websites, please enter the domain name registered with MIIT, including HTTP or HTTPS.
   * - For launched apps, provide the display link from the app store with HTTP or HTTPS, ensuring the app is online.
   * - For public accounts or mini-programs, fill in the full name, ensuring they are online.
   * - For e-commerce platform store names (for enterprise users only), provide the display link with HTTP or HTTPS.
   * 
   * @example
   * http://www.aliyun.com/
   */
  applySceneContent?: string;
  authorizationLetterId?: number;
  /**
   * @remarks
   * Additional materials, such as uploading business proof documents or screenshots of business operations, to help reviewers understand your business details.
   */
  moreData?: string[];
  ownerId?: number;
  /**
   * @remarks
   * Approved or under-review qualification ID.
   * 
   * > - Before applying for an SMS signature, please first [apply for qualifications](https://help.aliyun.com/zh/sms/user-guide/new-qualification?spm=a2c4g.11186623.0.0.718d187bbkpMRK).
   * > - You can view the qualification ID on the [Qualification Management](https://dysms.console.aliyun.com/domestic/text/qualification) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 8563**
   */
  qualificationId?: number;
  /**
   * @remarks
   * Explanation of the SMS signature scenario, with a maximum length of 200 characters.
   * 
   * > The scenario explanation is one of the reference information for signature review. Please provide a detailed description of the usage scenarios of the launched business, along with verifiable information such as website links, registered domain addresses, app store download links, full names of public accounts or mini-programs, etc. For login scenarios, test account credentials are also required. A well-informed application explanation will enhance the efficiency of signature and template reviews. Refer to the **Application Scenarios** column in the [Signature Source](https://help.aliyun.com/zh/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.i2#section-xup-k46-yi4) table for filling in SMS scenarios.
   * 
   * @example
   * 登录场景申请验证码
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Signature not yet approved.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云验证码
   */
  signName?: string;
  /**
   * @remarks
   * Source of the signature. Values:
   * 
   * - **0**: Full name or abbreviation of enterprises and institutions.
   * - **1**: Full name or abbreviation of MIIT-registered websites.
   * - **2**: Full name or abbreviation of app applications.
   * - **3**: Full name or abbreviation of public accounts or mini-programs.
   * - **4**: Full name or abbreviation of e-commerce platform store names.
   * - **5**: Full name or abbreviation of trademarks.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  signSource?: number;
  /**
   * @remarks
   * Signature type. It is recommended to use the default value.
   * 
   * - **0**: Verification code
   * - **1**: General (default)
   * 
   * @example
   * 1
   */
  signType?: number;
  /**
   * @remarks
   * Whether the signature is for self-use or others.
   * 
   * - false: Self-use
   * - true: Others
   * >Notice: When the signature is for self-use, select the self-use qualification ID; when it\\"s for others, choose the others\\" qualification ID.
   * 
   * @example
   * false
   */
  thirdParty?: boolean;
  static names(): { [key: string]: string } {
    return {
      applySceneContent: 'ApplySceneContent',
      authorizationLetterId: 'AuthorizationLetterId',
      moreData: 'MoreData',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      signSource: 'SignSource',
      signType: 'SignType',
      thirdParty: 'ThirdParty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applySceneContent: 'string',
      authorizationLetterId: 'number',
      moreData: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      qualificationId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      signSource: 'number',
      signType: 'number',
      thirdParty: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.moreData)) {
      $dara.Model.validateArray(this.moreData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

