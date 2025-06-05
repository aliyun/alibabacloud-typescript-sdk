// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupStatusResponseBodyDataPodStatusPodIps extends $dara.Model {
  /**
   * @remarks
   * The IP address of the container group.
   * 
   * @example
   * 192.168.XX.XX
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

