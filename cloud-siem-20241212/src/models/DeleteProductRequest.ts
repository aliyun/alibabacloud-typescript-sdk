// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProductRequest extends $dara.Model {
  lang?: string;
  productId?: string;
  regionId?: string;
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      productId: 'ProductId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      productId: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

