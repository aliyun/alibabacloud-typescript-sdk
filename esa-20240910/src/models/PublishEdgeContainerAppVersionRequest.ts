// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishEdgeContainerAppVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * Specifies whether to fully release the version. This parameter takes effect only when PublishType is set to region.
   * 
   * @example
   * true
   */
  fullRelease?: boolean;
  /**
   * @remarks
   * The release percentage. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  percentage?: number;
  /**
   * @remarks
   * The environment to which you want to release the version. Valid values:
   * 
   * *   prod: the production environment.
   * *   staging: the staging environment.
   * 
   * This parameter is required.
   * 
   * @example
   * prod
   */
  publishEnv?: string;
  /**
   * @remarks
   * Specifies how the version is released. Valid values:
   * 
   * *   percentage: releases the version by percentage.
   * *   region: releases the version by region.
   * 
   * If you do not specify this parameter, the version is released by percentage by default.
   * 
   * @example
   * percentage
   */
  publishType?: string;
  /**
   * @remarks
   * The regions to which the version is released.
   */
  regions?: string[];
  /**
   * @remarks
   * The remarks. This parameter is empty by default.
   * 
   * @example
   * test publish app
   */
  remarks?: string;
  /**
   * @remarks
   * The time when the application version starts to be released. If you do not specify this parameter, the current time is used by default.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-06-05T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ver-87962637161651****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      fullRelease: 'FullRelease',
      percentage: 'Percentage',
      publishEnv: 'PublishEnv',
      publishType: 'PublishType',
      regions: 'Regions',
      remarks: 'Remarks',
      startTime: 'StartTime',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      fullRelease: 'boolean',
      percentage: 'number',
      publishEnv: 'string',
      publishType: 'string',
      regions: { 'type': 'array', 'itemType': 'string' },
      remarks: 'string',
      startTime: 'string',
      versionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

