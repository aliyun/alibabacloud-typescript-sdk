// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveRealTimeLogLogstoreRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the SLS Logstore for real-time delivery.
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
   * The name of the Simple Log Service (SLS) project for real-time delivery.
   * 
   * This parameter is required.
   * 
   * @example
   * project_example
   */
  project?: string;
  /**
   * @remarks
   * The region of the SLS project for real-time delivery.
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

