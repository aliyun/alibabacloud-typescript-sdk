// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvadeEventListRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the affected asset.
   * 
   * @example
   * 10.0.XX.XX
   */
  assetsIP?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ins_1321_asedb_****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * ECS_test
   */
  assetsInstanceName?: string;
  /**
   * @remarks
   * Settings for the paged query. Specifies the page number to return for paging.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Specifies the end time of the query. The value is a UNIX timestamp in seconds. If you do not specify this parameter, the query ends at the current time.
   * 
   * @example
   * 1656837360
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the breach awareness event.
   * 
   * @example
   * 69d189e2-ec17-4676-a2fe-02969234****
   */
  eventKey?: string;
  /**
   * @remarks
   * The name of the breach awareness event.
   * 
   * @example
   * event_test
   */
  eventName?: string;
  /**
   * @remarks
   * The UUID of the breach awareness event.
   * 
   * @example
   * fadd-dfdd-****
   */
  eventUuid?: string;
  /**
   * @remarks
   * Specifies whether the breach awareness event is ignored. Valid values:
   * 
   * - **true**: Ignored.
   * 
   * - **false**: Not ignored.
   * 
   * @example
   * true
   */
  isIgnore?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member accounts.
   * 
   * @example
   * 135809047715****
   */
  memberUid?: number;
  /**
   * @remarks
   * Settings for the paged query. Specifies the number of entries to return on each page for paging.
   * 
   * Default value: 6. Maximum value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: string;
  /**
   * @remarks
   * The list of processing statuses.
   * 
   * @example
   * [0]
   */
  processStatusList?: number[];
  /**
   * @remarks
   * The risk assessment level.
   */
  riskLevel?: number[];
  /**
   * @remarks
   * The source IP address of the requester.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * Specifies the start time of the query. The value is a UNIX timestamp in seconds. If you do not specify this parameter, the query starts from 30 days ago.
   * 
   * @example
   * 1656750960
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      assetsIP: 'AssetsIP',
      assetsInstanceId: 'AssetsInstanceId',
      assetsInstanceName: 'AssetsInstanceName',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      eventKey: 'EventKey',
      eventName: 'EventName',
      eventUuid: 'EventUuid',
      isIgnore: 'IsIgnore',
      lang: 'Lang',
      memberUid: 'MemberUid',
      pageSize: 'PageSize',
      processStatusList: 'ProcessStatusList',
      riskLevel: 'RiskLevel',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsIP: 'string',
      assetsInstanceId: 'string',
      assetsInstanceName: 'string',
      currentPage: 'string',
      endTime: 'string',
      eventKey: 'string',
      eventName: 'string',
      eventUuid: 'string',
      isIgnore: 'string',
      lang: 'string',
      memberUid: 'number',
      pageSize: 'string',
      processStatusList: { 'type': 'array', 'itemType': 'number' },
      riskLevel: { 'type': 'array', 'itemType': 'number' },
      sourceIp: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processStatusList)) {
      $dara.Model.validateArray(this.processStatusList);
    }
    if(Array.isArray(this.riskLevel)) {
      $dara.Model.validateArray(this.riskLevel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

