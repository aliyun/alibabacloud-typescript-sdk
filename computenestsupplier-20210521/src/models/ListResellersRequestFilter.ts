// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResellersRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more parameter names to query services. Valid values:
   * 
   * *   ResellerUid: the uid of the distributor.
   * *   Name: the name of the distributor.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * Filter value array.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

