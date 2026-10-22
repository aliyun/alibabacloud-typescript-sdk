// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAutoAuditUnblockRequest extends $dara.Model {
  /**
   * @remarks
   * The list of assets.
   * 
   * > The array supports up to 50 IP addresses.
   * 
   * @example
   * [{"domain":"","ip":"120.26.29.16","assetType":"EIP"}]
   */
  assetList?: string;
  /**
   * @remarks
   * The auditor.
   * 
   * > You do not need to specify this parameter. It does not take effect.
   * 
   * @example
   * none
   */
  auditor?: string;
  /**
   * @remarks
   * The customer UID.
   * 
   * @example
   * 1317334647812936
   */
  customerUid?: string;
  /**
   * @remarks
   * The type of the email to send.
   * 
   * @example
   * xxx
   */
  emailType?: string;
  /**
   * @remarks
   * Specifies whether the email includes an unsubscribe option.
   * 
   * - **true**: Included.
   * - **false**: Not included.
   * 
   * @example
   * true
   */
  hasUnsubscribe?: boolean;
  /**
   * @remarks
   * The description of the number of emails to send.
   * 
   * @example
   * 10
   */
  sendCount?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Usage instructions
   */
  useDesc?: string;
  static names(): { [key: string]: string } {
    return {
      assetList: 'AssetList',
      auditor: 'Auditor',
      customerUid: 'CustomerUid',
      emailType: 'EmailType',
      hasUnsubscribe: 'HasUnsubscribe',
      sendCount: 'SendCount',
      useDesc: 'UseDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetList: 'string',
      auditor: 'string',
      customerUid: 'string',
      emailType: 'string',
      hasUnsubscribe: 'boolean',
      sendCount: 'string',
      useDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

