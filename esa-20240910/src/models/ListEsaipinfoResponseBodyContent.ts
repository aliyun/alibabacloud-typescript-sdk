// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListESAIPInfoResponseBodyContent extends $dara.Model {
  /**
   * @example
   * true
   */
  cdnIp?: string;
  /**
   * @example
   * 27.129.167.239
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      cdnIp: 'CdnIp',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnIp: 'string',
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

