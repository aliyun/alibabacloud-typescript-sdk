// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaEntityAttributeDef } from "./MetaEntityAttributeDef";


export class CreateMetaEntityDefRequest extends $dara.Model {
  /**
   * @example
   * []
   */
  attributeDefs?: MetaEntityAttributeDef[];
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Business API
   */
  displayName?: string;
  /**
   * @example
   * NONE
   */
  extend?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * biz_api
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attributeDefs: 'AttributeDefs',
      description: 'Description',
      displayName: 'DisplayName',
      extend: 'Extend',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeDefs: { 'type': 'array', 'itemType': MetaEntityAttributeDef },
      description: 'string',
      displayName: 'string',
      extend: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeDefs)) {
      $dara.Model.validateArray(this.attributeDefs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

