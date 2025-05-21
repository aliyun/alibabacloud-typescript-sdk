// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiApiInfoEnvironmentsSubDomains extends $dara.Model {
  /**
   * @example
   * d-xxx
   */
  domainId?: string;
  /**
   * @example
   * www.example.com
   */
  name?: string;
  /**
   * @example
   * Internet
   */
  networkType?: string;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
      networkType: 'networkType',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
      networkType: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

