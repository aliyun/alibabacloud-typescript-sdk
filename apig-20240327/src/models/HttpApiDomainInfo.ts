// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiDomainInfo extends $dara.Model {
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * d-xxx
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  name?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * Valid values:
   * 
   * *   HTTPS
   * *   HTTP
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
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

