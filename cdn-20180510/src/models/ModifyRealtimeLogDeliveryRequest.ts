// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRealtimeLogDeliveryRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name for which you want to modify the configurations of real-time log delivery. Only one domain name is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The name of the Logstore where log entries are stored.
   * 
   * This parameter is required.
   * 
   * @example
   * TestLog
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Log Service project that is used for real-time log delivery.
   * 
   * This parameter is required.
   * 
   * @example
   * testProject
   */
  project?: string;
  /**
   * @remarks
   * The ID of the region where the Log Service project is deployed. For more information, see [Regions that support real-time log delivery](https://help.aliyun.com/document_detail/144883.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ch-shanghai
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      logstore: 'string',
      project: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

