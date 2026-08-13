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
   * Specifies the page number to return in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Specifies the end time of the query. The value is a UNIX timestamp in seconds. If this parameter is not specified, the current time is used.
   * 
   * @example
   * 1656837360
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the compromise awareness event.
   * 
   * @example
   * 69d189e2-ec17-4676-a2fe-02969234****
   */
  eventKey?: string;
  /**
   * @remarks
   * The name of the compromise awareness event.
   * 
   * @example
   * event_test
   */
  eventName?: string;
  /**
   * @remarks
   * The UUID of the compromise awareness event.
   * 
   * @example
   * fadd-dfdd-****
   */
  eventUuid?: string;
  /**
   * @remarks
   * Specifies whether the compromise awareness event is ignored. Valid values:
   * 
   * @example
   * true
   */
  isIgnore?: string;
  /**
   * @remarks
   * The language type of the received message. Valid values:
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
   * Specifies the number of entries per page in a paged query.
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
   * 1358090477156271
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
   * Specifies the start time of the query. The value is a UNIX timestamp in seconds. If this parameter is not specified, the query starts from the last 30 days.
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

