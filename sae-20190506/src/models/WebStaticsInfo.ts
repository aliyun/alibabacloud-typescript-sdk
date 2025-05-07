// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebStaticsInfo extends $dara.Model {
  cpuUsage?: number;
  internetTrafficOut?: number;
  invocations?: number;
  memoryUsage?: number;
  static names(): { [key: string]: string } {
    return {
      cpuUsage: 'CpuUsage',
      internetTrafficOut: 'InternetTrafficOut',
      invocations: 'Invocations',
      memoryUsage: 'MemoryUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuUsage: 'number',
      internetTrafficOut: 'number',
      invocations: 'number',
      memoryUsage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

