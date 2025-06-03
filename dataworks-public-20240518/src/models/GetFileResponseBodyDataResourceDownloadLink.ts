// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileResponseBodyDataResourceDownloadLink extends $dara.Model {
  /**
   * @remarks
   * The download URL of the resource.
   * 
   * @example
   * http://xx
   */
  downloadLink?: string;
  static names(): { [key: string]: string } {
    return {
      downloadLink: 'downloadLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadLink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

