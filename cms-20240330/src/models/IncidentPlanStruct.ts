// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentPlanCorporationStruct } from "./IncidentPlanCorporationStruct";
import { IncidentPlanFieldPath } from "./IncidentPlanFieldPath";


export class IncidentPlanStruct extends $dara.Model {
  /**
   * @remarks
   * 自动恢复等待时间。
   * 
   * @example
   * 3600
   */
  autoRecoverSeconds?: number;
  /**
   * @remarks
   * 事件关闭超时时间。
   * 
   * @example
   * 86400000
   */
  closeExpire?: number;
  /**
   * @remarks
   * 参与协作的团队或角色列表。
   */
  corporation?: IncidentPlanCorporationStruct[];
  /**
   * @remarks
   * 预案描述。
   * 
   * @example
   * 针对数据库连接数过高的应急处理方案
   */
  description?: string;
  /**
   * @remarks
   * 升级策略 ID的列表。
   */
  escalationId?: string[];
  /**
   * @remarks
   * 创建时间。
   * 
   * @example
   * 1741234567890
   */
  gmtCreate?: number;
  /**
   * @remarks
   * 最后修改时间
   * 
   * @example
   * 1741234567890
   */
  gmtModified?: number;
  /**
   * @remarks
   * 分组字段路径
   */
  groupBy?: IncidentPlanFieldPath[];
  /**
   * @remarks
   * 事件预案 ID。
   * 
   * @example
   * plan-001
   */
  incidentPlanId?: string;
  /**
   * @remarks
   * 预案名称。
   * 
   * @example
   * 数据库连接数告警预案
   */
  name?: string;
  /**
   * @remarks
   * 资源字段映射路径的列表。
   */
  resourceFiled?: IncidentPlanFieldPath[];
  /**
   * @remarks
   * 状态。
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * 用户 ID。
   * 
   * @example
   * uesr-12345
   */
  userId?: number;
  /**
   * @remarks
   * 工作空间名称
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      autoRecoverSeconds: 'autoRecoverSeconds',
      closeExpire: 'closeExpire',
      corporation: 'corporation',
      description: 'description',
      escalationId: 'escalationId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      groupBy: 'groupBy',
      incidentPlanId: 'incidentPlanId',
      name: 'name',
      resourceFiled: 'resourceFiled',
      status: 'status',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecoverSeconds: 'number',
      closeExpire: 'number',
      corporation: { 'type': 'array', 'itemType': IncidentPlanCorporationStruct },
      description: 'string',
      escalationId: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'number',
      gmtModified: 'number',
      groupBy: { 'type': 'array', 'itemType': IncidentPlanFieldPath },
      incidentPlanId: 'string',
      name: 'string',
      resourceFiled: { 'type': 'array', 'itemType': IncidentPlanFieldPath },
      status: 'string',
      userId: 'number',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.corporation)) {
      $dara.Model.validateArray(this.corporation);
    }
    if(Array.isArray(this.escalationId)) {
      $dara.Model.validateArray(this.escalationId);
    }
    if(Array.isArray(this.groupBy)) {
      $dara.Model.validateArray(this.groupBy);
    }
    if(Array.isArray(this.resourceFiled)) {
      $dara.Model.validateArray(this.resourceFiled);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

