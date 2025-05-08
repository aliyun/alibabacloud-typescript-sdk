// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSL7QpsListResponseBodyDataModule extends $dara.Model {
  /**
   * @remarks
   * Attack QPS.
   * 
   * @example
   * 5
   */
  attack?: number;
  /**
   * @remarks
   * Normal QPS.
   * 
   * @example
   * 4
   */
  normal?: number;
  /**
   * @remarks
   * Data time, following ISO8601 notation and using UTC+0, formatted as yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-04-19T16:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * Total QPS.
   * 
   * @example
   * 9
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      attack: 'Attack',
      normal: 'Normal',
      timeStamp: 'TimeStamp',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attack: 'number',
      normal: 'number',
      timeStamp: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

