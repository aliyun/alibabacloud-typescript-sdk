// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImportFileUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The URL that is used to upload the configuration file.
   * 
   * @example
   * http://xxxxxxx
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

