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
   * The ID of the instance.
   * 
   * @example
   * ins_1321_asedb_****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ECS_test
   */
  assetsInstanceName?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds. If you do not specify this parameter, the query ends at the current time.
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
   * *   **true**: The breach awareness event is ignored.
   * *   **false**: The breach awareness event is not ignored.
   * 
   * @example
   * true
   */
  isIgnore?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 135809047715****
   */
  memberUid?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 6. Maximum value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: string;
  /**
   * @remarks
   * The handling status of breach awareness events.
   */
  processStatusList?: number[];
  /**
   * @remarks
   * The risk levels.
   */
  riskLevel?: number[];
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds. If you do not specify this parameter, the query starts from 30 days before the current time.
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

