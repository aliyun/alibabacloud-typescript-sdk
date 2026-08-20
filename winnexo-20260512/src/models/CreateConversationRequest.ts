// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConversationRequest extends $dara.Model {
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * string_value
   */
  metadata?: string;
  /**
   * @remarks
   * The primary key ID of the associated variable.
   * 
   * @example
   * 2676
   */
  objectId?: string;
  /**
   * @remarks
   * The operating object name.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: any[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10001
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

