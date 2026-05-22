// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishEdgeContainerAppVersionShrinkRequest extends $dara.Model {
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
  regionsShrink?: string;
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
      regionsShrink: 'Regions',
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
      regionsShrink: 'string',
      remarks: 'string',
      startTime: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

