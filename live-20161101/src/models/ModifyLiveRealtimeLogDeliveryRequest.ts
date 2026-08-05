// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveRealtimeLogDeliveryRequest extends $dara.Model {
  /**
   * @remarks
   * The primary streaming domain for which you want to change the real-time log delivery configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the Logstore in SLS to which logs are delivered.
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
   * The name of the Simple Log Service (SLS) project to which logs are delivered.
   * 
   * This parameter is required.
   * 
   * @example
   * project_example
   */
  project?: string;
  /**
   * @remarks
   * The region where the SLS project is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
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

