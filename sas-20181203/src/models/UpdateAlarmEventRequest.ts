// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlarmEventRequest extends $dara.Model {
  /**
   * @remarks
   * The list of alert event IDs.
   * 
   * You can call ListHoneypotAlarmEvents to obtain valid alert event IDs. Before calling this operation, ensure that honeypots are deployed and honeypot alert event data exists.
   * 
   * This parameter is required. If this parameter is not specified, the API returns HTTP 400 with the error code IllegalParam.
   */
  alarmEventIdList?: number[];
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The processing method for the alert event. Valid values:
   * 
   * - **manual_handled**: Handled.
   * - **ignore**: Ignored.
   * - **cancel_ignore**: Removed from the whitelist.
   * 
   * This parameter is required. If this parameter is not specified, the API returns HTTP 400 with the error code IllegalParam.
   * 
   * @example
   * ignore
   */
  operationCode?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource folder.
   * >You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      alarmEventIdList: 'AlarmEventIdList',
      lang: 'Lang',
      operationCode: 'OperationCode',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventIdList: { 'type': 'array', 'itemType': 'number' },
      lang: 'string',
      operationCode: 'string',
      resourceDirectoryAccountId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alarmEventIdList)) {
      $dara.Model.validateArray(this.alarmEventIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

