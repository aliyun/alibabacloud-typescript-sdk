// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more parameter names to query services. Valid values:
   * 
   * *   ServiceId: the ID of the service.
   * *   Name: the name of the service.
   * *   Status: the state of the service.
   * *   SupplierName: the name of the service provider.
   * 
   * @example
   * Status
   */
  name?: string;
  /**
   * @remarks
   * A value of the filter condition.
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

