// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportNacosConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The URL that is used to download the exported configurations.
   * 
   * @example
   * http://xxxxxxxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

