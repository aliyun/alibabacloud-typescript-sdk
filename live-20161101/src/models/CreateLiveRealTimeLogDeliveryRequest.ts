// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveRealTimeLogDeliveryRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The LogStoreName for real-time log delivery to SLS.
   * 
   * This parameter is required.
   * 
   * @example
   * test_logstore
   */
  logstore?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ProjectName for real-time log delivery to SLS.
   * 
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  project?: string;
  /**
   * @remarks
   * The Region for real-time log delivery to SLS.
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

