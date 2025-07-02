// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HTTPTrigger extends $dara.Model {
  /**
   * @example
   * https://svc-func-xxxxxxxx.cn-hangzhou.fcapp.run
   */
  urlInternet?: string;
  /**
   * @example
   * https://svc-func-xxxxxxxx.cn-hangzhou-vpc.fcapp.run
   */
  urlIntranet?: string;
  static names(): { [key: string]: string } {
    return {
      urlInternet: 'urlInternet',
      urlIntranet: 'urlIntranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlInternet: 'string',
      urlIntranet: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

