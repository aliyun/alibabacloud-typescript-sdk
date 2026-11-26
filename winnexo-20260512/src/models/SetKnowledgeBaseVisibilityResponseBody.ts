// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetKnowledgeBaseVisibilityResponseBody extends $dara.Model {
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
   * The status code description.
   * 
   * @example
   * successful
   */
  message?: string;
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
   * The target ID, which varies based on the target type.
   * - If the type is period, specify the period ID.
   * - If the type is objective, specify the objective ID.
   * - If the type is kr, specify the keyResult ID.
   * 
   * @example
   * kb_001
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the current permission. Valid values:
   * - period: period type
   * - objective: objective type
   * - kr: keyResult type
   * 
   * @example
   * KB
   */
  targetType?: string;
  /**
   * @remarks
   * The collection of user groups.
   * 
   * @example
   * ["group-1"]
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The collection of users.
   * 
   * @example
   * ["10001"]
   */
  userIds?: string[];
  /**
   * @remarks
   * The visibility scope mode.
   * 
   * @example
   * SPECIFIED
   */
  visibilityMode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      targetId: 'targetId',
      targetType: 'targetType',
      userGroupIds: 'userGroupIds',
      userIds: 'userIds',
      visibilityMode: 'visibilityMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      targetId: 'string',
      targetType: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
      visibilityMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

