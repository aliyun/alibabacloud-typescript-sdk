// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindNlbRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The NLB instance ID.
   * 
   * @example
   * nlb-7z7jjbzz44d82c9***
   */
  nlbId?: string;
  /**
   * @remarks
   * The listener port, which must be between 0 and 65535.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
   * - **TCPSSL**
   * 
   * @example
   * TCP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      nlbId: 'NlbId',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      nlbId: 'string',
      port: 'number',
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

