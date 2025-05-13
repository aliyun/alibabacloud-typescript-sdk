// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesResponseBodyResourcesQuotasSpecs extends $dara.Model {
  /**
   * @remarks
   * The specification name.
   * 
   * @example
   * cu
   */
  name?: string;
  /**
   * @remarks
   * The specification description.
   * 
   * @example
   * 11500
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

