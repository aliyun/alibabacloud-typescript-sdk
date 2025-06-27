// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIspFlushCacheTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  isp?: string[];
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      domainName: 'DomainName',
      isp: 'Isp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      domainName: 'string',
      isp: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.isp)) {
      $dara.Model.validateArray(this.isp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

