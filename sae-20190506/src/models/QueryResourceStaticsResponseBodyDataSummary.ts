// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResourceStaticsResponseBodyDataSummary extends $dara.Model {
  activeCpu?: number;
  /**
   * @remarks
   * The CPU usage. Unit: core per minute.
   * 
   * @example
   * 3354
   */
  cpu?: number;
  cu?: number;
  ephemeralStorage?: number;
  idleCpu?: number;
  /**
   * @remarks
   * The memory usage. Unit: GiB per minute.
   * 
   * @example
   * 6708
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      activeCpu: 'ActiveCpu',
      cpu: 'Cpu',
      cu: 'Cu',
      ephemeralStorage: 'EphemeralStorage',
      idleCpu: 'IdleCpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCpu: 'number',
      cpu: 'number',
      cu: 'number',
      ephemeralStorage: 'number',
      idleCpu: 'number',
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

