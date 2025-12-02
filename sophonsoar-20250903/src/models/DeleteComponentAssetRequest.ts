// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteComponentAssetRequest extends $dara.Model {
  /**
   * @remarks
   * Asset UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1C5F11E9-****-51F0-****-43BB312A0557
   */
  componentAssetUuid?: string;
  /**
   * @remarks
   * Set the language type for requests and received messages, default is **zh**. Values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Resource directory member account ID.
   * 
   * @example
   * 13760*****718726
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      componentAssetUuid: 'ComponentAssetUuid',
      lang: 'Lang',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentAssetUuid: 'string',
      lang: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

