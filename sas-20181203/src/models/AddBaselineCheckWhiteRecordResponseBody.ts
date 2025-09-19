// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBaselineCheckWhiteRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * >  You can call the [ListCheckItemWarningSummary](~~ListCheckItemWarningSummary~~) operation to query the IDs of check items.
   * 
   * @example
   * 76
   */
  checkId?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The reason why the check item is added to the whitelist.
   * 
   * @example
   * AutoTest
   */
  reason?: string;
  /**
   * @remarks
   * The ID of the whitelist rule.
   * 
   * @example
   * 864153
   */
  recordId?: number;
  /**
   * @remarks
   * The data source. Valid values:
   * 
   * *   **default**: server
   * *   **agentless**: agentless detection
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The object that is added to the whitelist.
   * 
   * @example
   * HOST_BASELINE_WHITE_LIST_21
   */
  target?: string;
  /**
   * @remarks
   * The type of the assets on which the whitelist rule takes effect. Valid values:
   * 
   * *   **all_instance**: all servers
   * *   **instance**: specific servers
   * 
   * @example
   * instance
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      lang: 'Lang',
      reason: 'Reason',
      recordId: 'RecordId',
      source: 'Source',
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      lang: 'string',
      reason: 'string',
      recordId: 'number',
      source: 'string',
      target: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBaselineCheckWhiteRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: AddBaselineCheckWhiteRecordResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-B12447DD****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddBaselineCheckWhiteRecordResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

