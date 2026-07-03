// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisposeAndPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * 列表当前页号， 大于等于 1。
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The entity type. Valid values:
   * 
   * - `ip`: IP address
   * 
   * - `process`: process
   * 
   * - `file`: file
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * 实体 uuid。
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  entityUuid?: string;
  /**
   * @remarks
   * The incident UUID.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * 列表每页条数， 最大不超过 100。
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
   * 
   * - cn-hangzhou：资产属于中国内地与中国香港
   * 
   * - ap-southeast-1：资产属于海外地域
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 管理员切换成其他成员视角的用户 ID。
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * 视图类型。
   * 
   * - 0：当前阿里云账号视图。
   * 
   * - 1：企业下所有账号的视图。
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      entityType: 'EntityType',
      entityUuid: 'EntityUuid',
      incidentUuid: 'IncidentUuid',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      entityType: 'string',
      entityUuid: 'string',
      incidentUuid: 'string',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

