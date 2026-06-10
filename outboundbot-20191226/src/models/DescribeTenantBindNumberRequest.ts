// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantBindNumberRequest extends $dara.Model {
  /**
   * @remarks
   * Phone number to query (required)
   * 
   * > Query the binding status of this number across all instances. Get the number from the response of ListAllTenantBindNumberBinding.
   * 
   * @example
   * 15005059355
   */
  number?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

