// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 所属协作群组 ID（如 cg_101）；传入时创建群空间任务（调用者需为有效群成员），为空创建个人任务
   * 
   * @example
   * exampleCollaborationGroupId
   */
  collaborationGroupId?: string;
  descriptionShrink?: string;
  /**
   * @remarks
   * 数字员工名称列表
   * 
   * @example
   * string_value
   */
  digitalEmployeeNameShrink?: string;
  /**
   * @remarks
   * 是否公开访问
   * 
   * @example
   * true
   */
  isOpen?: boolean;
  /**
   * @remarks
   * 执行模型档位，不传默认 standard
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * 文件名
   * 
   * This parameter is required.
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  segmentsShrink?: string;
  taskDetailShrink?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  triggerConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      descriptionShrink: 'description',
      digitalEmployeeNameShrink: 'digitalEmployeeName',
      isOpen: 'isOpen',
      model: 'model',
      name: 'name',
      segmentsShrink: 'segments',
      taskDetailShrink: 'taskDetail',
      tenantId: 'tenantId',
      triggerConfigShrink: 'triggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      descriptionShrink: 'string',
      digitalEmployeeNameShrink: 'string',
      isOpen: 'boolean',
      model: 'string',
      name: 'string',
      segmentsShrink: 'string',
      taskDetailShrink: 'string',
      tenantId: 'string',
      triggerConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

