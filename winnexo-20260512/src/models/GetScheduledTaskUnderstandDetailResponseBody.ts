// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskUnderstandDetailResponseBodyRelatedObjects extends $dara.Model {
  /**
   * @remarks
   * 提及类型
   * 
   * @example
   * string_value
   */
  mentionType?: string;
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
   * 对象 ID
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * 对象类型
   * 
   * @example
   * string_value
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      mentionType: 'mentionType',
      name: 'name',
      objectId: 'objectId',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mentionType: 'string',
      name: 'string',
      objectId: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledTaskUnderstandDetailResponseBodyRelatedSemantics extends $dara.Model {
  /**
   * @remarks
   * 语义属性（JSON 字符串），用于语义检索时过滤
   * 
   * @example
   * {"level": "VIP"}
   */
  attributes?: string;
  /**
   * @remarks
   * 语义实体名，如客户/机会
   * 
   * @example
   * customer
   */
  entity?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      entity: 'entity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      entity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledTaskUnderstandDetailResponseBodyRelatedSkills extends $dara.Model {
  /**
   * @remarks
   * 技能展示名称
   * 
   * @example
   * string_value
   */
  displayName?: string;
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
   * 技能代码
   * 
   * @example
   * string_value
   */
  skillCode?: string;
  /**
   * @remarks
   * sourceIds
   * 
   * @example
   * string_value
   */
  sourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      name: 'name',
      skillCode: 'skillCode',
      sourceIds: 'sourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      name: 'string',
      skillCode: 'string',
      sourceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceIds)) {
      $dara.Model.validateArray(this.sourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledTaskUnderstandDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  relatedObjects?: GetScheduledTaskUnderstandDetailResponseBodyRelatedObjects[];
  relatedSemantics?: GetScheduledTaskUnderstandDetailResponseBodyRelatedSemantics[];
  relatedSkills?: GetScheduledTaskUnderstandDetailResponseBodyRelatedSkills[];
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 润色后的任务理解
   * 
   * @example
   * string_value
   */
  taskUnderstand?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      relatedObjects: 'relatedObjects',
      relatedSemantics: 'relatedSemantics',
      relatedSkills: 'relatedSkills',
      requestId: 'requestId',
      taskUnderstand: 'taskUnderstand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      relatedObjects: { 'type': 'array', 'itemType': GetScheduledTaskUnderstandDetailResponseBodyRelatedObjects },
      relatedSemantics: { 'type': 'array', 'itemType': GetScheduledTaskUnderstandDetailResponseBodyRelatedSemantics },
      relatedSkills: { 'type': 'array', 'itemType': GetScheduledTaskUnderstandDetailResponseBodyRelatedSkills },
      requestId: 'string',
      taskUnderstand: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedObjects)) {
      $dara.Model.validateArray(this.relatedObjects);
    }
    if(Array.isArray(this.relatedSemantics)) {
      $dara.Model.validateArray(this.relatedSemantics);
    }
    if(Array.isArray(this.relatedSkills)) {
      $dara.Model.validateArray(this.relatedSkills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

