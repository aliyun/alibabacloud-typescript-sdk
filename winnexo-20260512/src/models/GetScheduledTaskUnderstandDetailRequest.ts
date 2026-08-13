// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskUnderstandDetailRequestSegments extends $dara.Model {
  /**
   * @remarks
   * 文本内容，type=text 时必填
   * 
   * @example
   * 示例内容
   */
  content?: string;
  /**
   * @remarks
   * 功能开关，type=web_search 时可选
   * 
   * @example
   * true
   */
  enabled?: string;
  /**
   * @remarks
   * 文件名
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 对象 ID，type=mention 时有值
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * 对象类型如 customer，type=mention 时有值
   * 
   * @example
   * string_value
   */
  objectType?: string;
  /**
   * @remarks
   * 技能编码，type=skill 时有值
   * 
   * @example
   * string_value
   */
  skillCode?: string;
  /**
   * @remarks
   * 元素类型：text|web_search|mention|skill
   * 
   * This parameter is required.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      enabled: 'enabled',
      name: 'name',
      objectId: 'objectId',
      objectType: 'objectType',
      skillCode: 'skillCode',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      enabled: 'string',
      name: 'string',
      objectId: 'string',
      objectType: 'string',
      skillCode: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledTaskUnderstandDetailRequest extends $dara.Model {
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
  digitalEmployeeName?: string[];
  segments?: GetScheduledTaskUnderstandDetailRequestSegments[];
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
      digitalEmployeeName: 'digitalEmployeeName',
      segments: 'segments',
      tenantId: 'tenantId',
      userInput: 'userInput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      digitalEmployeeName: { 'type': 'array', 'itemType': 'string' },
      segments: { 'type': 'array', 'itemType': GetScheduledTaskUnderstandDetailRequestSegments },
      tenantId: 'string',
      userInput: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.digitalEmployeeName)) {
      $dara.Model.validateArray(this.digitalEmployeeName);
    }
    if(Array.isArray(this.segments)) {
      $dara.Model.validateArray(this.segments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

