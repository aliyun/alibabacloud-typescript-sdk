// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveRealTimeLogLogstoreRequest extends $dara.Model {
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
      logstore: 'Logstore',
      ownerId: 'OwnerId',
      project: 'Project',
      region: 'Region',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

