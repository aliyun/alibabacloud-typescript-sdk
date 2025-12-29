// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInfraredDeviceBrandsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  category?: string;
  serviceProvider?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      serviceProvider: 'ServiceProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      serviceProvider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

