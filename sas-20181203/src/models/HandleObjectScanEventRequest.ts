// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleObjectScanEventRequestRuleConditionList extends $dara.Model {
  /**
   * @remarks
   * The whitelisting field. Valid values:
   * 
   * - **ossKey**: file path.
   * - **bucketName**: bucket name.
   * - **md5**: file MD5.
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
   * - **contains**: contains.
   * - **not_contains**: does not contain.
   * - **str_equal**: equals.
   * - **str_not_equal**: does not equal.
   * - **regex**: regular expression.
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
   * The type for batch handling of similar alerts. Valid values:
   * 
   * - **sha256**: by file content.
   * - **eventName**: by alert name.
   * 
   * @example
   * sha256
   */
  batchType?: string;
  /**
   * @remarks
   * The event ID. You must specify at least one of EventId and EventIdList to identify the target scan events to handle.
   * 
   * @example
   * 81****
   */
  eventId?: string;
  /**
   * @remarks
   * The list of event IDs. You must specify at least one of EventId and EventIdList to identify the target scan events to handle.
   */
  eventIdList?: number[];
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
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
   * The list of whitelisting rules. This parameter takes effect only when the alert is whitelisted.
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

