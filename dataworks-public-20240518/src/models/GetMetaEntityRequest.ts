// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The entity ID.
   * 
   * This parameter is required.
   * 
   * @example
   * custom_entity-customer_api:api_001
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

