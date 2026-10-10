// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGroupSourceContentRequest extends $dara.Model {
  /**
   * @remarks
   * The returned content.
   * 
   * This parameter is required.
   * 
   * @example
   * Updated body content
   */
  content?: string;
  /**
   * @remarks
   * Specifies whether to force synchronization.
   * 
   * @example
   * false
   */
  forceSync?: boolean;
  /**
   * @remarks
   * The project group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  groupId?: string;
  /**
   * @remarks
   * The original project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * source_example
   */
  sourceId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      forceSync: 'forceSync',
      groupId: 'groupId',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      forceSync: 'boolean',
      groupId: 'string',
      sourceId: 'string',
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

