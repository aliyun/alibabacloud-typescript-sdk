// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConversationShrinkRequest extends $dara.Model {
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
  operatingObjectNameShrink?: string;
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
      operatingObjectNameShrink: 'operatingObjectName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'string',
      objectId: 'string',
      operatingObjectNameShrink: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

