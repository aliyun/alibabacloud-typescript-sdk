// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertsWithEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. The value must be greater than or equal to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the query. The unit is milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * 123456789
   */
  entityId?: number;
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * 123456789
   */
  entityUuid?: string;
  /**
   * @remarks
   * The globally unique ID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region of the data management center for threat analysis. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: your assets are in the Chinese mainland and China (Hong Kong).
   * 
   * - ap-southeast-1: your assets are outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member to which the administrator switches.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * 
   * - 1: the view of all accounts that are managed by your enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The ID of the Security Orchestration, Automation, and Response (SOAR) handling policy.
   * 
   * @example
   * 577bbf90-a770-44a7-8154-586aa2d318fa
   */
  sophonTaskId?: string;
  /**
   * @remarks
   * The start time of the query. The unit is milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      entityId: 'EntityId',
      entityUuid: 'EntityUuid',
      incidentUuid: 'IncidentUuid',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      sophonTaskId: 'SophonTaskId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      entityId: 'number',
      entityUuid: 'string',
      incidentUuid: 'string',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      sophonTaskId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

