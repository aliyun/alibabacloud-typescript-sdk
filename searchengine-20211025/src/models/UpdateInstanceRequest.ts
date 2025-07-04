// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateInstanceRequestComponents } from "./UpdateInstanceRequestComponents";


export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the instance specification.
   */
  components?: UpdateInstanceRequestComponents[];
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The type of the order. Valid values: UPGRADE and DOWNGRADE. UPGRADE upgrades the instance specifications. DOWNGRADE: downgrades the instance specifications.
   * 
   * @example
   * ""
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      components: 'components',
      description: 'description',
      orderType: 'orderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': UpdateInstanceRequestComponents },
      description: 'string',
      orderType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

