// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResourcePermissionRequestCheckCommandResourceList extends $dara.Model {
  /**
   * @remarks
   * Resource ID
   * 
   * This parameter is required.
   * 
   * @example
   * hadoop.300000806.data_distill.behavior_gameinfor_01
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourcePermissionRequestCheckCommand extends $dara.Model {
  /**
   * @remarks
   * Operation type
   * 
   * This parameter is required.
   * 
   * @example
   * UPDATE
   */
  operate?: string;
  /**
   * @remarks
   * Permission resource list
   * 
   * This parameter is required.
   */
  resourceList?: CheckResourcePermissionRequestCheckCommandResourceList[];
  /**
   * @remarks
   * Resource type
   * - PHYSICAL_TABLE: Physical table
   * - PHYSICAL_FIELD: Physical table field
   * - LOGICAL_TABLE: Fact logical table
   * - LOGICAL_FIELD: Fact logical table field
   * - LABEL_TABLE: Label logical table
   * - LABEL_FIELD: Label logical table field
   * - DATASOURCE: Data source
   * - GLOBAL_PARAM: Global parameter
   * - REALTIME_LOGICAL_TABLE: Real-time meta table
   * - REALTIME_LOGICAL_FIELD: Real-time meta table field
   * - REALTIME_MIRROR_TABLE: Mirror table
   * - REALTIME_MIRROR_FIELD: Real-time mirror table field
   * - FUNCTION: Function
   * - FEATURE: Feature permission
   * - PHYSICAL_VIEW: Physical view
   * - LOGICAL_VIEW: Logical view
   * - QD_SERVICE_FEATURE: Service tag
   * - QD_ADVANCED_FEATURE: Advanced tag
   * - QD_CLUSTER: Group
   * - QD_EVENT: Event
   * - QD_OFFLINE_SERVICE: Tag offline service task
   * - PHYSICAL_MATERIALIZED_VIEW: Materialized view
   * 
   * This parameter is required.
   * 
   * @example
   * PHYSICAL_TABLE
   */
  resourceType?: string;
  /**
   * @remarks
   * User ID
   * 
   * This parameter is required.
   * 
   * @example
   * 323231
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      operate: 'Operate',
      resourceList: 'ResourceList',
      resourceType: 'ResourceType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operate: 'string',
      resourceList: { 'type': 'array', 'itemType': CheckResourcePermissionRequestCheckCommandResourceList },
      resourceType: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourcePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * Check user resource permission
   * 
   * This parameter is required.
   */
  checkCommand?: CheckResourcePermissionRequestCheckCommand;
  /**
   * @remarks
   * Tenant ID
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      checkCommand: 'CheckCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkCommand: CheckResourcePermissionRequestCheckCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.checkCommand && typeof (this.checkCommand as any).validate === 'function') {
      (this.checkCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

