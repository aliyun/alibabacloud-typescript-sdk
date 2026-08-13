// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConversationRequest extends $dara.Model {
  /**
   * @remarks
   * 会话元数据，可含 model 等透传字段（model 需为合法抽象模型名，否则回退默认）
   * 
   * @example
   * string_value
   */
  metadata?: string;
  /**
   * @remarks
   * 关联业务对象ID
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * operatingObjectName
   * 
   * @example
   * string_value
   */
  operatingObjectName?: any[];
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'metadata',
      objectId: 'objectId',
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'string',
      objectId: 'string',
      operatingObjectName: { 'type': 'array', 'itemType': 'any' },
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operatingObjectName)) {
      $dara.Model.validateArray(this.operatingObjectName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

