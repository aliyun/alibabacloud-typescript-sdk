// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileDownloadInfoRequestOption extends $dara.Model {
  /**
   * @example
   * true
   */
  preferIntranet?: boolean;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      preferIntranet: 'PreferIntranet',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preferIntranet: 'boolean',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

