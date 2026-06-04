// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetaEntityRequest extends $dara.Model {
  /**
   * @example
   * []
   */
  attributes?: { [key: string]: string };
  /**
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @example
   * []
   */
  customAttributes?: { [key: string]: string[] };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * custom_entity-customer_api:api_001
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      comment: 'Comment',
      customAttributes: 'CustomAttributes',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      comment: 'string',
      customAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      id: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(this.customAttributes) {
      $dara.Model.validateMap(this.customAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

