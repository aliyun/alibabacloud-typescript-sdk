// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveRealtimeLogDeliveryRequest extends $dara.Model {
  /**
   * @remarks
   * The main streaming domain for which you want to modify the configuration of real-time log delivery.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the Logstore to which log entries are delivered.
   * 
   * This parameter is required.
   * 
   * @example
   * logstore_example
   */
  logstore?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the Log Service project that is used for real-time log delivery.
   * 
   * This parameter is required.
   * 
   * @example
   * project_example
   */
  project?: string;
  /**
   * @remarks
   * The ID of the region where the Log Service project is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      logstore: 'Logstore',
      ownerId: 'OwnerId',
      project: 'Project',
      region: 'Region',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      logstore: 'string',
      ownerId: 'number',
      project: 'string',
      region: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

