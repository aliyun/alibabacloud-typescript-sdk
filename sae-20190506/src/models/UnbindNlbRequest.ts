// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindNlbRequest extends $dara.Model {
  /**
   * @remarks
   * A short description of struct
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of NLB instance.
   * 
   * @example
   * nlb-7z7jjbzz44d82c9***
   */
  nlbId?: string;
  /**
   * @remarks
   * The listener port of the instance. Valid values: 0 to 65535.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   **TCP**.
   * *   **UDP**.
   * *   **TCPSSL**.
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

