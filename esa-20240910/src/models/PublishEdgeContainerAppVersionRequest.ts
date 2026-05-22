// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishEdgeContainerAppVersionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  fullRelease?: boolean;
  percentage?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  publishEnv?: string;
  publishType?: string;
  regions?: string[];
  remarks?: string;
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
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

