// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSyncEcsHostTaskRequestRegion extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user who owns the region. This parameter is used for cross-account synchronization.
   * 
   * @example
   * 141339776561****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncEcsHostTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * Default value: en
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The regions for synchronization.
   * 
   * This parameter is required.
   */
  region?: UpdateSyncEcsHostTaskRequestRegion[];
  /**
   * @remarks
   * The status of the ECS hostname sync task. Valid values:
   * 
   * - ON: enables the task.
   * 
   * - OFF: disables the task.
   * 
   * This parameter is required.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The unique ID of the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      region: 'Region',
      status: 'Status',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      region: { 'type': 'array', 'itemType': UpdateSyncEcsHostTaskRequestRegion },
      status: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

