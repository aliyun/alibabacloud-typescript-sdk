// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TraceInfo extends $dara.Model {
  duration?: number;
  operationName?: string;
  serviceIp?: string;
  serviceName?: string;
  timestamp?: number;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      operationName: 'operationName',
      serviceIp: 'serviceIp',
      serviceName: 'serviceName',
      timestamp: 'timestamp',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      operationName: 'string',
      serviceIp: 'string',
      serviceName: 'string',
      timestamp: 'number',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

