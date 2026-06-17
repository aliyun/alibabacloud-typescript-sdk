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
   * The ID of the affected instance.
   * 
   * @example
   * ins_1321_asedb_****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The name of the affected instance.
   * 
   * @example
   * ECS_test
   */
  assetsInstanceName?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Default: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The end of the time range to query. This must be a UNIX timestamp in seconds. If you omit this parameter, the query defaults to the current time.
   * 
   * @example
   * 1656837360
   */
  endTime?: string;
  /**
   * @remarks
   * A unique identifier for the breach awareness event.
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
   * The universally unique identifier (UUID) of the breach awareness event.
   * 
   * @example
   * fadd-dfdd-****
   */
  eventUuid?: string;
  /**
   * @remarks
   * Specifies whether to query for ignored breach awareness events. Valid values:
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
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member account.
   * 
   * @example
   * 135809047715****
   */
  memberUid?: number;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * Default: 6. Maximum: 10.
   * 
   * @example
   * 1
   */
  pageSize?: string;
  /**
   * @remarks
   * An array of processing statuses to filter events by. Only events with a status specified in this array are returned.
   * 
   * @example
   * 1358090477156271
   */
  processStatusList?: number[];
  /**
   * @remarks
   * An array of risk levels to filter events by. Only events with a risk level specified in this array are returned.
   */
  riskLevel?: number[];
  /**
   * @remarks
   * The source IP address that initiated the event.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The start of the time range to query. This must be a UNIX timestamp in seconds. If you omit this parameter, the query defaults to the last 30 days.
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

