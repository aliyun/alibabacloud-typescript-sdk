// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceExposure extends $dara.Model {
  displayName?: string;
  jobId?: string;
  message?: string;
  podId?: string;
  port?: number;
  serviceId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      jobId: 'JobId',
      message: 'Message',
      podId: 'PodId',
      port: 'Port',
      serviceId: 'ServiceId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      jobId: 'string',
      message: 'string',
      podId: 'string',
      port: 'number',
      serviceId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

