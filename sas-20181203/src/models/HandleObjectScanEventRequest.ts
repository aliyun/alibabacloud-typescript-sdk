// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleObjectScanEventRequestRuleConditionList extends $dara.Model {
  /**
   * @remarks
   * The whitelist field. Valid values:
   * 
   * - **ossKey**: file path
   * - **bucketName**: bucket name
   * - **md5**: file MD5
   * - **sha256**: file SHA-256.
   * 
   * @example
   * ossKey
   */
  key?: string;
  /**
   * @remarks
   * The operator. Valid values:
   * 
   * - **contains**: Contains.
   * - **not_contains**: Does not contain.
   * - **str_equal**: Equals.
   * - **str_not_equal**: Does not equal.
   * - **regex**: Regular expression.
   * 
   * @example
   * contains
   */
  operate?: string;
  /**
   * @remarks
   * The value to match.
   * 
   * @example
   * sshe
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operate: 'Operate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operate: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleObjectScanEventRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the type for batch processing of similar alerts. Valid values:
   * 
   * - **sha256**: by file content
   * - **eventName**: by alert name.
   * 
   * @example
   * sha256
   */
  batchType?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 81****
   */
  eventId?: string;
  /**
   * @remarks
   * The list of event IDs.
   */
  eventIdList?: number[];
  /**
   * @remarks
   * The language of the content in the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The list of whitelist rules. This parameter takes effect only when the alert is whitelisted.
   */
  ruleConditionList?: HandleObjectScanEventRequestRuleConditionList[];
  /**
   * @remarks
   * The target status. Valid values:
   * 
   * - **0**: Unhandled.
   * - **1**: Manually handled.
   * - **2**: Whitelisted.
   * - **3**: Ignored.
   * - **4**: Access denied.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      batchType: 'BatchType',
      eventId: 'EventId',
      eventIdList: 'EventIdList',
      lang: 'Lang',
      remark: 'Remark',
      ruleConditionList: 'RuleConditionList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchType: 'string',
      eventId: 'string',
      eventIdList: { 'type': 'array', 'itemType': 'number' },
      lang: 'string',
      remark: 'string',
      ruleConditionList: { 'type': 'array', 'itemType': HandleObjectScanEventRequestRuleConditionList },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventIdList)) {
      $dara.Model.validateArray(this.eventIdList);
    }
    if(Array.isArray(this.ruleConditionList)) {
      $dara.Model.validateArray(this.ruleConditionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

