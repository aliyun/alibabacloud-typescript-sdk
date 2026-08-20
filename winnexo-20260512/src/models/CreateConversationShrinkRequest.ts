// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConversationShrinkRequest extends $dara.Model {
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
  operatingObjectNameShrink?: string;
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

