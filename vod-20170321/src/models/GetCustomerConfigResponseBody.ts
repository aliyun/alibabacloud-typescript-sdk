// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerConfigResponseBody extends $dara.Model {
  appId?: string;
  auditConfig?: string;
  downloadSwitch?: string;
  metricConfig?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      auditConfig: 'AuditConfig',
      downloadSwitch: 'DownloadSwitch',
      metricConfig: 'MetricConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      auditConfig: 'string',
      downloadSwitch: 'string',
      metricConfig: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

