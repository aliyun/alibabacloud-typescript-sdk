// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduledTaskShrinkRequest extends $dara.Model {
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
   * 执行模型档位；不传则不更新
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * 文件名
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  segmentsShrink?: string;
  taskDetailShrink?: string;
  /**
   * @remarks
   * 任务 ID
   * 
   * This parameter is required.
   * 
   * @example
   * exampleTaskId
   */
  taskId?: string;
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
      descriptionShrink: 'description',
      digitalEmployeeNameShrink: 'digitalEmployeeName',
      isOpen: 'isOpen',
      model: 'model',
      name: 'name',
      segmentsShrink: 'segments',
      taskDetailShrink: 'taskDetail',
      taskId: 'taskId',
      tenantId: 'tenantId',
      triggerConfigShrink: 'triggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      descriptionShrink: 'string',
      digitalEmployeeNameShrink: 'string',
      isOpen: 'boolean',
      model: 'string',
      name: 'string',
      segmentsShrink: 'string',
      taskDetailShrink: 'string',
      taskId: 'string',
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

