// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppServiceGroup } from "./AppServiceGroup";
import { TreeNode } from "./TreeNode";
import { AppOperationAddress } from "./AppOperationAddress";
import { AppServiceProfile } from "./AppServiceProfile";


export class AppServiceAggregate extends $dara.Model {
  /**
   * @remarks
   * The business ID of the application instance.
   * 
   * @example
   * WS20251211153330000001
   */
  bizId?: string;
  /**
   * @remarks
   * The deletion flag.
   * 
   * @example
   * 0
   */
  deleted?: number;
  /**
   * @remarks
   * The end time. It is in ISO 8601 format and uses the UTC time zone (Z).
   * 
   * @example
   * 2025-07-18T02:23:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * esp bizId
   * 
   * @example
   * p20202933455
   */
  espBizId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-07-30T02:08:40Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * Tue Sep 09 10:27:49 CST 2025
   */
  gmtModified?: string;
  /**
   * @remarks
   * The operation address of the application.
   */
  group?: AppServiceGroup;
  /**
   * @remarks
   * The associated business ID.
   * 
   * @example
   * WS20250915163734000001
   */
  instanceBizId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * Website design service
   */
  name?: string;
  /**
   * @remarks
   * The list of flow nodes.
   */
  nodeList?: TreeNode[];
  /**
   * @remarks
   * Uniquely identifies an operation.
   */
  operationAddress?: AppOperationAddress;
  /**
   * @remarks
   * The configuration information of the application service.
   */
  profile?: AppServiceProfile;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * WEBSITE_DESIGN
   */
  serviceType?: string;
  /**
   * @remarks
   * The description of the service type.
   */
  serviceTypeText?: string;
  /**
   * @remarks
   * The application identifier.
   * 
   * @example
   * inst-001
   */
  slug?: string;
  /**
   * @remarks
   * The start time. It is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1754447102000
   */
  startTime?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123241414
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      deleted: 'Deleted',
      endTime: 'EndTime',
      espBizId: 'EspBizId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      group: 'Group',
      instanceBizId: 'InstanceBizId',
      name: 'Name',
      nodeList: 'NodeList',
      operationAddress: 'OperationAddress',
      profile: 'Profile',
      serviceType: 'ServiceType',
      serviceTypeText: 'ServiceTypeText',
      slug: 'Slug',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      deleted: 'number',
      endTime: 'string',
      espBizId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      group: AppServiceGroup,
      instanceBizId: 'string',
      name: 'string',
      nodeList: { 'type': 'array', 'itemType': TreeNode },
      operationAddress: AppOperationAddress,
      profile: AppServiceProfile,
      serviceType: 'string',
      serviceTypeText: 'string',
      slug: 'string',
      startTime: 'string',
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    if(Array.isArray(this.nodeList)) {
      $dara.Model.validateArray(this.nodeList);
    }
    if(this.operationAddress && typeof (this.operationAddress as any).validate === 'function') {
      (this.operationAddress as any).validate();
    }
    if(this.profile && typeof (this.profile as any).validate === 'function') {
      (this.profile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

