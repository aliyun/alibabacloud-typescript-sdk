// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSdkListRequest extends $dara.Model {
  group?: number;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'number',
      product: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

