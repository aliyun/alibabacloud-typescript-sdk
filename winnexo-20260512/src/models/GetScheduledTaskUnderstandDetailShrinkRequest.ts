// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskUnderstandDetailShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 所属协作群组 ID（如 cg_101）；群任务理解时传入（调用者需为有效群成员），候选技能额外并入群绑定技能
   * 
   * @example
   * exampleCollaborationGroupId
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 数字员工名称列表，用于过滤可用技能；必传（传空列表表示仅用租户 global 技能）
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  digitalEmployeeNameShrink?: string;
  segmentsShrink?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * 自然语言任务描述
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  userInput?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      digitalEmployeeNameShrink: 'digitalEmployeeName',
      segmentsShrink: 'segments',
      tenantId: 'tenantId',
      userInput: 'userInput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      digitalEmployeeNameShrink: 'string',
      segmentsShrink: 'string',
      tenantId: 'string',
      userInput: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

