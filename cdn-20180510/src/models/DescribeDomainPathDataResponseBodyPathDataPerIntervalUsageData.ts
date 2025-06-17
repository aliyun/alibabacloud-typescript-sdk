// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainPathDataResponseBodyPathDataPerIntervalUsageData extends $dara.Model {
  /**
   * @remarks
   * The number of visits to the URL.
   * 
   * @example
   * 10
   */
  acc?: number;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /path/
   */
  path?: string;
  /**
   * @remarks
   * The point in time.
   * 
   * @example
   * 2017-09-30T16:00:00Z
   */
  time?: string;
  /**
   * @remarks
   * The amount of network traffic. Unit: bytes.
   * 
   * @example
   * 346
   */
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      path: 'Path',
      time: 'Time',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'number',
      path: 'string',
      time: 'string',
      traffic: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

