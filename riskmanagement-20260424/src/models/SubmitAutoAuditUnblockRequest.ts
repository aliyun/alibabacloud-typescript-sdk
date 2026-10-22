// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAutoAuditUnblockRequest extends $dara.Model {
  /**
   * @example
   * [{"domain":"","ip":"120.26.29.16","assetType":"EIP"}]
   */
  assetList?: string;
  /**
   * @example
   * none
   */
  auditor?: string;
  /**
   * @example
   * 1317334647812936
   */
  customerUid?: string;
  /**
   * @example
   * xxx
   */
  emailType?: string;
  /**
   * @example
   * true
   */
  hasUnsubscribe?: boolean;
  /**
   * @example
   * 10
   */
  sendCount?: string;
  /**
   * @example
   * 使用说明。
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

