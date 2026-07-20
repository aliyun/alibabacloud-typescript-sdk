// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishEdgeContainerAppVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * > 1) Obtain the AppId by calling CreateEdgeContainerApp. 2) Obtain the VersionId by calling CreateEdgeContainerAppVersion (which requires the AppId). 3) The complete call chain is CreateEdgeContainerApp → CreateEdgeContainerAppVersion → PublishEdgeContainerAppVersion.
   * 
   * This parameter is required.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * Specifies whether to perform a full release. This parameter takes effect only when PublishType is set to region.
   * 
   * @example
   * true
   */
  fullRelease?: boolean;
  /**
   * @remarks
   * The publishing percentage. Valid values: **1 to 100**. Default value: **100**.
   * 
   * @example
   * 100
   */
  percentage?: number;
  /**
   * @remarks
   * The publishing environment. Valid values:
   * 
   * - **prod**: production environment.
   * - **staging**: staging environment.
   * 
   * This parameter is required.
   * 
   * @example
   * prod
   */
  publishEnv?: string;
  /**
   * @remarks
   * The publishing type. Valid values:
   * - **percentage**: Publish by percentage.
   * 
   * - **region**: Publish by region.
   * 
   * If this parameter is not specified, percentage-based publishing is used by default.
   * 
   * @example
   * percentage
   */
  publishType?: string;
  /**
   * @remarks
   * The list of publishing regions.
   */
  regions?: string[];
  /**
   * @remarks
   * The remarks. Default value: empty.
   * 
   * @example
   * test publish app
   */
  remarks?: string;
  /**
   * @remarks
   * The time when the publishing starts. If this parameter is not specified, the current time is used by default.
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

