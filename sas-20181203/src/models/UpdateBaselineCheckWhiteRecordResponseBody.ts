// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBaselineCheckWhiteRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 92
   */
  checkId?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The reason for adding the item to the whitelist.
   * 
   * @example
   * Ignore for now
   */
  reason?: string;
  /**
   * @remarks
   * The ID of the whitelist record.
   * 
   * @example
   * 1582
   */
  recordId?: number;
  /**
   * @remarks
   * The data source. Valid values:
   * - **default**: Server
   * - **agentless**: agentless
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The target added to the whitelist.
   * 
   * @example
   * HOST_BASELINE_WHITE_LIST_23
   */
  target?: string;
  /**
   * @remarks
   * The type of the target to which the whitelist applies. Valid values:
   * - **all_instance**: All servers
   * - **instance**: Specified servers
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

export class UpdateBaselineCheckWhiteRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateBaselineCheckWhiteRecordResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7BC55C8F-226E-5AF5-9A2C-2EC43864****
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
      data: UpdateBaselineCheckWhiteRecordResponseBodyData,
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

