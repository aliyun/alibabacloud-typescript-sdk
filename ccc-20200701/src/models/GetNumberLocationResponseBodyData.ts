// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNumberLocationResponseBodyData extends $dara.Model {
  city?: string;
  /**
   * @example
   * 1312121****
   */
  number?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

