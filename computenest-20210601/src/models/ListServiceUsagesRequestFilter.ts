// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceUsagesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more filters. Valid values:
   * 
   * *   ServiceId: the ID of the service.
   * *   ServiceName: the service name.
   * *   Status: the state of the service.
   * *   SupplierName: the name of the service provider.
   * 
   * @example
   * ServiceId
   */
  name?: string;
  /**
   * @remarks
   * The parameter values of the filter.
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

