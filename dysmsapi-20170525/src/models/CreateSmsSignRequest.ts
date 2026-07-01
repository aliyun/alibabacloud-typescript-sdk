// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsSignRequest extends $dara.Model {
  /**
   * @remarks
   * The APP-ICP filing entity ID.
   * > - This parameter is required when SignSource is set to 2.
   * > - You can obtain the filing entity ID by calling the [CreateSmsAppIcpRecord](~~CreateSmsAppIcpRecord~~) operation.
   * 
   * @example
   * 10000****029
   */
  appIcpRecordId?: number;
  /**
   * @remarks
   * >Notice:  The signature source of launched apps is no longer supported.
   * The app store link. If the signature source is a launched app, that is, SignSource is set to 2, specify a link that starts with http:// or https:// and make sure the app is already launched.
   * 
   * @example
   * http://www.aliyun.com/
   */
  applySceneContent?: string;
  /**
   * @remarks
   * The ID of the power of attorney. When the signature is for third-party use, this parameter is required. Otherwise, the signature review will not pass. The unified social credit code in the power of attorney must match the unified social credit code in the qualification information bound to the signature. Otherwise, the signature creation fails.
   * 
   * @example
   * 1000********1234
   */
  authorizationLetterId?: number;
  /**
   * @remarks
   * The supplementary materials. Upload business proof files or business screenshots to help reviewers understand your business details. See [Signature application materials](~~108076#section-xup-k46-yi4~~) and upload the relevant materials.
   */
  moreData?: string[];
  ownerId?: number;
  /**
   * @remarks
   * The ID of the approved qualification.
   * 
   * > - Before applying for an SMS signature, [apply for a qualification](https://help.aliyun.com/document_detail/2539801.html).
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
   * The description of the SMS signature scenario. This is one of the reference materials for signature review. The description can be up to 200 characters in length.
   * >  - You can describe the scenarios of your online service and provide links to the actual business website or marketplace download page.
   * >  - You can provide a complete SMS example that reflects your business scenario.
   * >  - You can provide the pass parameter content of variables and describe in detail the business scenario and the reason for selecting the variable property.
   * >  - If the signature involves a government or public institution, specify the landline phone number of the institution.
   * 
   * A well-documented application description improves the review efficiency for signatures and templates. Failure to follow the specifications or leaving this field empty may affect the approval of your signature.
   * 
   * @example
   * 登录场景使用验证码
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The signature name. The signature name must comply with the [signature specifications](~~108076#section-0p8-qn8-mmy~~):
   * 
   * - The name must be 2 to 12 characters in length and cannot contain words such as "test".
   * 
   * - The name cannot contain symbols such as 【】, (), or []. Special characters such as commas, periods, and spaces are not supported.
   * 
   * > - Signature names are case-sensitive. For example, 【Aliyun通信】 and 【aliyun通信】 are treated as two different signatures.
   * > - If your verification code signature and general-purpose signature have the same name, the system uses the general-purpose signature to send SMS messages by default.
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
   * -  **0**: full name or abbreviation of an enterprise or public institution. **(Recommended)**
   * -  **5**: full name or abbreviation of a trademark.
   * -  **2**: full name or abbreviation of an app. **(Not recommended)**
   * 
   * For more information about signature sources, see [Signature sources](~~108076#section-fow-bfu-wo9~~).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  signSource?: number;
  /**
   * @remarks
   * The signature type. Valid values:
   * 
   * - **0**: verification code.
   * 
   * - **1**: general-purpose (default).
   * 
   * We recommend that you use the default value: **general-purpose**.
   * 
   * @example
   * 1
   */
  signType?: number;
  /**
   * @remarks
   * The signature purpose. Valid values:
   * 
   * - false: for personal use (default). The signature is the enterprise name, website, or product name verified under this account.
   * 
   * - true: for third-party use. The signature is the enterprise name, website, or product name not verified under this account.
   * >Notice: If the signature is for personal use, select a qualification ID for personal use. If the signature is for third-party use, select a qualification ID for third-party use..
   * 
   * @example
   * false
   */
  thirdParty?: boolean;
  /**
   * @remarks
   * The trademark entity ID.
   * > - 1. This parameter is required when SignSource is set to 5.
   * > - 2. You can obtain the trademark entity ID by calling the [CreateSmsTrademark](~~CreateSmsTrademark~~) operation.
   * > - 3. Based on carrier real-name registration requirements, provide the relevant field information. Otherwise, the probability of review rejection or carrier registration failure increases significantly.
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
      trademarkId: 'TrademarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIcpRecordId: 'number',
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
      trademarkId: 'number',
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

