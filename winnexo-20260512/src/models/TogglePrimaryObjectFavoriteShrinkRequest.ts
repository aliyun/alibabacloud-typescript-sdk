// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TogglePrimaryObjectFavoriteShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - **1**: Add to whitelist.
   * - **2**: Remove from whitelist.
   * 
   * This parameter is required.
   * 
   * @example
   * add
   */
  action?: string;
  /**
   * @remarks
   * The list of primary object business IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  objectIdsShrink?: string;
  /**
   * @remarks
   * The object type, such as customer. This parameter has a value when type is set to mention.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  objectType?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object name, optional).
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The ID of the effective tenant.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      objectIdsShrink: 'objectIds',
      objectType: 'objectType',
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      objectIdsShrink: 'string',
      objectType: 'string',
      operatingObjectName: 'string',
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

