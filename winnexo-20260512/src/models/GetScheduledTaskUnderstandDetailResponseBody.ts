// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskUnderstandDetailResponseBodyRelatedObjects extends $dara.Model {
  /**
   * @remarks
   * The mention type, such as objects.
   * 
   * @example
   * string_value
   */
  mentionType?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The object ID. Pass the project task ID.
   * 
   * - For internal enterprise applications, this is the taskId obtained by calling the [Create a project task](https://open.dingtalk.com/document/orgapp-server/create-a-project-task) operation.
   * 
   * - For third-party enterprise applications, this is the taskId obtained by calling the [Create a project task](https://open.dingtalk.com/document/isvapp-server/create-a-project-task) operation.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The object type, such as customer. This parameter has a value when type is set to mention.
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
   * The information type.
   * 
   * @example
   * {"level": "VIP"}
   */
  attributes?: string;
  /**
   * @remarks
   * The semantic entity name, such as customer or opportunity.
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
   * The display name of the MCP service.
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The skill code.
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
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The related objects.
   */
  relatedObjects?: GetScheduledTaskUnderstandDetailResponseBodyRelatedObjects[];
  /**
   * @remarks
   * The related semantics.
   */
  relatedSemantics?: GetScheduledTaskUnderstandDetailResponseBodyRelatedSemantics[];
  /**
   * @remarks
   * The related skills.
   */
  relatedSkills?: GetScheduledTaskUnderstandDetailResponseBodyRelatedSkills[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The task understanding description polished by the LLM.
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

