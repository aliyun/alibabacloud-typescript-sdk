// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResourceStaticsResponseBodyDataRealTimeRes extends $dara.Model {
  /**
   * @remarks
   * The CPU usage. Unit: core per minute.
   * 
   * @example
   * 13
   */
  cpu?: number;
  ephemeralStorage?: number;
  /**
   * @remarks
   * The memory usage. Unit: GiB per minute.
   * 
   * @example
   * 26
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      ephemeralStorage: 'EphemeralStorage',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      ephemeralStorage: 'number',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

