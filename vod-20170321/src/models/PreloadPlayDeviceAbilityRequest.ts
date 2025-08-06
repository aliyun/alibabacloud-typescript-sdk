// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreloadPlayDeviceAbilityRequest extends $dara.Model {
  brand?: string;
  resourceRealOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      brand: 'Brand',
      resourceRealOwnerId: 'ResourceRealOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brand: 'string',
      resourceRealOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

