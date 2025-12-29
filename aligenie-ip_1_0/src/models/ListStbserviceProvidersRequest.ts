// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSTBServiceProvidersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  city?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
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

