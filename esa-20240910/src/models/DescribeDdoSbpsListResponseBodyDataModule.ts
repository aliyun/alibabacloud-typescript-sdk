// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSBpsListResponseBodyDataModule extends $dara.Model {
  /**
   * @remarks
   * Attack bandwidth, in bps.
   * 
   * @example
   * 9000000000
   */
  attackBps?: number;
  /**
   * @remarks
   * Attack PPS.
   * 
   * @example
   * 9000000
   */
  attackPps?: number;
  /**
   * @remarks
   * Normal business bandwidth, in bps.
   * 
   * @example
   * 1000000000
   */
  normalBps?: number;
  /**
   * @remarks
   * Normal business PPS.
   * 
   * @example
   * 1000000
   */
  normalPps?: number;
  /**
   * @remarks
   * The timestamp of this data, in ISO8601 format, using UTC+0, formatted as: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-05-14T17:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * Total bandwidth, in bps.
   * 
   * @example
   * 10000000000
   */
  totalBps?: number;
  /**
   * @remarks
   * Total PPS.
   * 
   * @example
   * 100000000
   */
  totalPps?: number;
  static names(): { [key: string]: string } {
    return {
      attackBps: 'AttackBps',
      attackPps: 'AttackPps',
      normalBps: 'NormalBps',
      normalPps: 'NormalPps',
      timeStamp: 'TimeStamp',
      totalBps: 'TotalBps',
      totalPps: 'TotalPps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackBps: 'number',
      attackPps: 'number',
      normalBps: 'number',
      normalPps: 'number',
      timeStamp: 'string',
      totalBps: 'number',
      totalPps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

