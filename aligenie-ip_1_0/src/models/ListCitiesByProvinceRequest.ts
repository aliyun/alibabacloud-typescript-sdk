// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCitiesByProvinceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

