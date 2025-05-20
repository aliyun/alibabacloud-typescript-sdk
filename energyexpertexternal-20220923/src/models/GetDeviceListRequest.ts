// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the site.
   * 
   * This parameter is required.
   * 
   * @example
   * pn_95
   */
  factoryId?: string;
  static names(): { [key: string]: string } {
    return {
      factoryId: 'factoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

