// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MapPkFromHidRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  bid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mappingScenes?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bid: 'Bid',
      hid: 'Hid',
      mappingScenes: 'MappingScenes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bid: 'string',
      hid: 'string',
      mappingScenes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

