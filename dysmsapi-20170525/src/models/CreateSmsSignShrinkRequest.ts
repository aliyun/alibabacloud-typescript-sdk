// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsSignShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Application scenarios, instructions as follows:
   * - For registered websites, enter the domain name with HTTP or HTTPS that has been registered with the MIIT.
   * 
   * - For launched apps, provide a display link from the app store with HTTP or HTTPS, ensuring the app is online.
   * 
   * - For public accounts or mini-programs, input the full name, ensuring they are online.
   * 
   * - For e-commerce platform store names, applicable only to enterprise users, provide a display link with HTTP or HTTPS for the store.
   * 
   * @example
   * http://www.aliyun.com/
   */
  applySceneContent?: string;
  authorizationLetterId?: number;
  /**
   * @remarks
   * Additional information to supplement uploaded business proof documents or screenshots, which helps reviewers understand your business details.
   * 
   * This parameter is optional; please fill it out based on your actual needs.
   */
  moreDataShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * Approved or under-review qualification ID.
   * 
   * > - Before applying for an SMS signature, please first [Apply for Qualification](https://help.aliyun.com/zh/sms/user-guide/new-qualification?spm=a2c4g.11186623.0.0.718d187bbkpMRK).
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
   * > The scenario explanation is one of the reference materials for signature review. Please provide a detailed description of the usage scenarios for your live services, along with links to verify these services such as website URLs with MIIT备案, app store display links, full names of public accounts or mini-programs, etc. For login scenarios, test account credentials are also required. A comprehensive application explanation enhances the efficiency of signature and template reviews. Refer to the **Application Scenario** column in the [Signature Source](https://help.aliyun.com/zh/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.i2#section-xup-k46-yi4) table for filling in SMS scenarios.
   * 
   * @example
   * SMS signature for the login scenario using verification code.
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Signature name. Please adhere to the [Signature Specifications](https://help.aliyun.com/zh/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.0.4f9710fder2gR7#section-0p8-qn8-mmy).
   * 
   * > - Signature names are case-insensitive; e.g., 【Aliyun Communication】 and 【aliyun communication】 are considered identical.
   * > - If your verification code signature and general signature names are the same, the system defaults to using the general signature for sending SMS messages.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  /**
   * @remarks
   * Signature source. Values:
   * 
   * - **0**: Full name or abbreviation of an enterprise or institution.
   * - **1**: Full name or abbreviation of a MIIT-registered website.
   * - **2**: Full name or abbreviation of an App.
   * - **3**: Full name or abbreviation of an official account or mini-program.
   * - **4**: Full name or abbreviation of an e-commerce platform store.
   * - **5**: Full name or abbreviation of a trademark.
   * 
   * For detailed information on signature sources, refer to [Signature Source](https://help.aliyun.com/zh/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.0.4f9710fder2gR7#section-xup-k46-yi4).
   * 
   * > This interface does not support applying for signatures with sources as **Test or Learning** and **Trial Use**. If you need to apply for signatures with these sources, please go to the [SMS Service Console](https://dysms.console.aliyun.com/domestic/text/sign/add/qualification).
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  signSource?: number;
  /**
   * @remarks
   * Signature type. Values:
   * 
   * - **0**: Verification Code
   * 
   * - **1**: General (Default)
   * 
   * > It is recommended to use the default value: **General**.
   * 
   * @example
   * 1
   */
  signType?: number;
  /**
   * @remarks
   * Choose whether the applied signature is for self-use or third-party use.
   * 
   * - false: Self-use (default)
   * 
   * - true: Third-party use
   * >Notice: Please select self-use qualification ID when the signature is for self-use; choose third-party use qualification ID when it\\"s for third-party use.
   * 
   * @example
   * false
   */
  thirdParty?: boolean;
  static names(): { [key: string]: string } {
    return {
      applySceneContent: 'ApplySceneContent',
      authorizationLetterId: 'AuthorizationLetterId',
      moreDataShrink: 'MoreData',
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
      moreDataShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

