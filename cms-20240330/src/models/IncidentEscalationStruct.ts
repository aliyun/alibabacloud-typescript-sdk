// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentEscalationStageStruct } from "./IncidentEscalationStageStruct";


export class IncidentEscalationStruct extends $dara.Model {
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: number;
  /**
   * @remarks
   * 描述。
   * 
   * @example
   * 当告警未响应时，依次通知运维团队、值班经理、CTO
   */
  description?: string;
  /**
   * @remarks
   * 事件升级ID
   * 
   * @example
   * 52631388567
   */
  incidentEscalationId?: string;
  /**
   * @remarks
   * 修改时间
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  modifyTime?: number;
  /**
   * @remarks
   * 名称。
   * 
   * @example
   * 生产环境告警升级策略
   */
  name?: string;
  /**
   * @remarks
   * 地域 ID
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 阶段。
   */
  stage?: IncidentEscalationStageStruct[];
  /**
   * @remarks
   * 工作空间
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      incidentEscalationId: 'incidentEscalationId',
      modifyTime: 'modifyTime',
      name: 'name',
      regionId: 'regionId',
      stage: 'stage',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      incidentEscalationId: 'string',
      modifyTime: 'number',
      name: 'string',
      regionId: 'string',
      stage: { 'type': 'array', 'itemType': IncidentEscalationStageStruct },
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.stage)) {
      $dara.Model.validateArray(this.stage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

