// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmsSignShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the app\\"s ICP filing entity.
   * 
   * > - This parameter is required if `SignSource` is set to 2.
   * >
   * > - You can obtain the filing entity ID by calling the [Create ICP Filing Entity](~~CreateSmsAppIcpRecord~~) operation.
   * 
   * @example
   * 100001***1234
   */
  appIcpRecordId?: number;
  /**
   * @remarks
   * The app store link. This parameter is required if the signature source (`SignSource`) is an app (the value is 2). The link must start with `http://` or `https://`, and the app must be published in the app store.
   * 
   * @example
   * http://www.aliyun.com/
   */
  applySceneContent?: string;
  /**
   * @remarks
   * The authorization letter ID. This parameter is required if the signature is for third-party use (`ThirdParty` is set to `true`). The Unified Social Credit Code on the authorization letter must match the code in the selected qualification\\"s information.
   * 
   * @example
   * 1000********1234
   */
  authorizationLetterId?: number;
  /**
   * @remarks
   * Additional supporting materials. You can upload supporting business documents or business screenshots to help with the review. For details on what to upload, see [Signature application materials](~~108076#section-xup-k46-yi4~~).
   */
  moreDataShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the approved qualification.
   * 
   * > - You must [apply for a qualification](https://help.aliyun.com/zh/sms/user-guide/new-qualification?spm=a2c4g.11186623.0.0.718d187bbkpMRK) before applying for an SMS signature.
   * >
   * > - You can find the qualification ID on the [qualification management](https://dysms.console.aliyun.com/domestic/text/qualification) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 8563**
   */
  qualificationId?: number;
  /**
   * @remarks
   * A description of the SMS signature\\"s use case. This information is used during the review and must be 200 characters or less.
   * 
   * > - Describe the use case for your live service. Include relevant links, such as a website link or an app store link.
   * >
   * > - Provide a complete example of an SMS message that reflects your use case.
   * >
   * > - Provide the values for any variables. Describe the use case in detail and explain why the variables are necessary.
   * >
   * > - If the signature involves a government agency or public institution, provide its official landline number.
   * 
   * Providing complete and accurate information accelerates the review process. If you do not provide the required information, your signature application may be rejected.
   * 
   * @example
   * 登录场景申请验证码
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the rejected SMS signature. You can find rejected SMS signatures on the [Domestic Messages > Signature Management](https://dysms.console.aliyun.com/domestic/text/sign) page in the console, or by calling the [QuerySmsSignList](~~QuerySmsSignList~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云验证码
   */
  signName?: string;
  /**
   * @remarks
   * The signature source. Valid values:
   * 
   * - **0**: The full or abbreviated name of an enterprise or public institution. **(Recommended)**
   * 
   * - **5**: The full or abbreviated trademark name.
   * 
   * - **2**: The full or abbreviated name of an app. **(Not recommended)**
   * 
   * For more information, see [signature source](~~108076#section-fow-bfu-wo9~~).
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  signSource?: number;
  /**
   * @remarks
   * The signature type. Valid values:
   * 
   * - **0**: verification code.
   * 
   * - **1**: general (default).
   * 
   * We recommend that you use the default value, **general**.
   * 
   * @example
   * 1
   */
  signType?: number;
  /**
   * @remarks
   * The signature purpose. Valid values:
   * 
   * - false: for own use (default). The signature is for a business, website, or product owned by your account\\"s verified entity.
   * 
   * - true: for third-party use. The signature is for a business, website, or product not owned by your account\\"s verified entity.
   *   >Notice: Ensure the selected qualification ID matches the signature purpose (for own use or for third-party use).
   * 
   * @example
   * false
   */
  thirdParty?: boolean;
  /**
   * @remarks
   * The trademark entity ID.
   * 
   * > - This parameter is required if `SignSource` is set to 5.
   * >
   * > - You can obtain the trademark entity ID by calling the [Create Trademark Entity](~~CreateSmsTrademark~~) operation.
   * 
   * @example
   * 1000009081***
   */
  trademarkId?: number;
  static names(): { [key: string]: string } {
    return {
      appIcpRecordId: 'AppIcpRecordId',
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
      trademarkId: 'TrademarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIcpRecordId: 'number',
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
      trademarkId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

