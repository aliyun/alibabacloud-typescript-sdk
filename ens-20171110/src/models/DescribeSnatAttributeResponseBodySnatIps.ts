// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnatAttributeResponseBodySnatIps extends $dara.Model {
  /**
   * @remarks
   * The time when the IP address was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-04-26T15:38:27Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 203.132.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The status of the IP address.
   * 
   * *   Running
   * *   Stopping
   * *   Stopped
   * *   Starting
   * *   Releasing
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      ip: 'Ip',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      ip: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

