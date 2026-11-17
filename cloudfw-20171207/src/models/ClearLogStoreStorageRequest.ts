// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClearLogStoreStorageRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the site whose logs are to be cleared. If there is only one Logstore, you can leave this parameter empty. If there are two Logstores, you must specify cn or intl.
   * 
   * @example
   * cn
   */
  site?: string;
  static names(): { [key: string]: string } {
    return {
      site: 'Site',
    };
  }

  static types(): { [key: string]: any } {
    return {
      site: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

