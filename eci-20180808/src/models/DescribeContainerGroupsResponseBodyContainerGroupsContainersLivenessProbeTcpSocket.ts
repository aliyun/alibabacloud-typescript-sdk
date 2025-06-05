// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeTcpSocket extends $dara.Model {
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * 1.2.3.4
   */
  host?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 80
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

