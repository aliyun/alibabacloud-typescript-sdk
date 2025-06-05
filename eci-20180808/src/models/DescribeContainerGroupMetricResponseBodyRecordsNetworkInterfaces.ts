// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupMetricResponseBodyRecordsNetworkInterfaces extends $dara.Model {
  /**
   * @remarks
   * The name of the NIC.
   * 
   * @example
   * eth0
   */
  name?: string;
  /**
   * @remarks
   * The number of bytes received by the NIC.
   * 
   * @example
   * 505001954
   */
  rxBytes?: number;
  /**
   * @remarks
   * The number of received packets dropped on the NIC.
   * 
   * @example
   * 0
   */
  rxDrops?: number;
  /**
   * @remarks
   * The number of received packet errors on the NIC.
   * 
   * @example
   * 0
   */
  rxErrors?: number;
  /**
   * @remarks
   * The number of packets received by the NIC.
   * 
   * @example
   * 4800583
   */
  rxPackets?: number;
  /**
   * @remarks
   * The number of bytes transmitted by the NIC.
   * 
   * @example
   * 1381805699
   */
  txBytes?: number;
  /**
   * @remarks
   * The number of transmitted packets dropped on the NIC.
   * 
   * @example
   * 0
   */
  txDrops?: number;
  /**
   * @remarks
   * The number of transmitted packet errors on the NIC.
   * 
   * @example
   * 0
   */
  txErrors?: number;
  /**
   * @remarks
   * The number of packets transmitted by the NIC.
   * 
   * @example
   * 5158427
   */
  txPackets?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      rxBytes: 'RxBytes',
      rxDrops: 'RxDrops',
      rxErrors: 'RxErrors',
      rxPackets: 'RxPackets',
      txBytes: 'TxBytes',
      txDrops: 'TxDrops',
      txErrors: 'TxErrors',
      txPackets: 'TxPackets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rxBytes: 'number',
      rxDrops: 'number',
      rxErrors: 'number',
      rxPackets: 'number',
      txBytes: 'number',
      txDrops: 'number',
      txErrors: 'number',
      txPackets: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

