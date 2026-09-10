// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the attribute. Only `RegionId` is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * RegionId
   */
  attributeName?: string;
  /**
   * @remarks
   * The filter condition. The value must be a JSON string in the {"key1":"value1"} format.
   */
  filter?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      attributeName: 'attributeName',
      filter: 'filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      filter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.filter) {
      $dara.Model.validateMap(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

