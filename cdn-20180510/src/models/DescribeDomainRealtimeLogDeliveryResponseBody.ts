// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRealtimeLogDeliveryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the Logstore where log entries are stored.
   * 
   * @example
   * LogstoreName
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Log Service project that is used for real-time log delivery.
   * 
   * @example
   * ProjectName
   */
  project?: string;
  /**
   * @remarks
   * The ID of the region where the Log Service project is deployed.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F8F3852-912F-42AC-80EB-F1CF4284DE93
   */
  requestId?: string;
  /**
   * @remarks
   * The status of real-time log delivery. Valid values:
   * 
   * *   **online**
   * *   **offline**
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      region: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

