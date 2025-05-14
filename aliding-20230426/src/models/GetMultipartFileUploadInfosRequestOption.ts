// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultipartFileUploadInfosRequestOption extends $dara.Model {
  /**
   * @example
   * true
   */
  preferIntranet?: boolean;
  static names(): { [key: string]: string } {
    return {
      preferIntranet: 'PreferIntranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preferIntranet: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

