// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClothesRequest extends $dara.Model {
  categories?: number[];
  clothSize?: string;
  current?: number;
  jwtToken?: string;
  name?: string;
  size?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      clothSize: 'ClothSize',
      current: 'Current',
      jwtToken: 'JwtToken',
      name: 'Name',
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'number' },
      clothSize: 'string',
      current: 'number',
      jwtToken: 'string',
      name: 'string',
      size: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

