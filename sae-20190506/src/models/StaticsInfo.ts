// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StaticsInfo extends $dara.Model {
  activeCPUUsage?: number;
  cost?: number;
  diskUsage?: number;
  functionName?: string;
  gpuUsage?: number;
  idleCPUUsage?: number;
  instanceTrafficOut?: number;
  invocations?: number;
  invokeCDNOut?: number;
  invokeInternetOut?: number;
  memoryUsage?: number;
  region?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      activeCPUUsage: 'activeCPUUsage',
      cost: 'cost',
      diskUsage: 'diskUsage',
      functionName: 'functionName',
      gpuUsage: 'gpuUsage',
      idleCPUUsage: 'idleCPUUsage',
      instanceTrafficOut: 'instanceTrafficOut',
      invocations: 'invocations',
      invokeCDNOut: 'invokeCDNOut',
      invokeInternetOut: 'invokeInternetOut',
      memoryUsage: 'memoryUsage',
      region: 'region',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCPUUsage: 'number',
      cost: 'number',
      diskUsage: 'number',
      functionName: 'string',
      gpuUsage: 'number',
      idleCPUUsage: 'number',
      instanceTrafficOut: 'number',
      invocations: 'number',
      invokeCDNOut: 'number',
      invokeInternetOut: 'number',
      memoryUsage: 'number',
      region: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

