// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingRoomsResponseBodyWaitingRoomsHostNameAndPath extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The subdomain.
   * 
   * @example
   * test.
   */
  subdomain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      path: 'Path',
      subdomain: 'Subdomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      path: 'string',
      subdomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

