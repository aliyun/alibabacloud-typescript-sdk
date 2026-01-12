// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClothesShrinkRequest extends $dara.Model {
  categoriesShrink?: string;
  clothSize?: string;
  current?: number;
  jwtToken?: string;
  name?: string;
  size?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      categoriesShrink: 'Categories',
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
      categoriesShrink: 'string',
      clothSize: 'string',
      current: 'number',
      jwtToken: 'string',
      name: 'string',
      size: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

