// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApsWebhookRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-8vbuyjhrih**
   */
  DBClusterId?: string;
  /**
   * @remarks
   * **JobType**\\
   * Job type. SLS or OSS Export Task: ResultExport.
   * 
   * @example
   * ResultExport
   */
  jobType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      jobType: 'JobType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      jobType: 'string',
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

