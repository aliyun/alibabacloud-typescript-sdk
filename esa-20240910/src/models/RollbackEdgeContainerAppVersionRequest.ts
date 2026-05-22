// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackEdgeContainerAppVersionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  percentage?: number;
  remarks?: string;
  usedPercent?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      percentage: 'Percentage',
      remarks: 'Remarks',
      usedPercent: 'UsedPercent',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      percentage: 'number',
      remarks: 'string',
      usedPercent: 'boolean',
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

