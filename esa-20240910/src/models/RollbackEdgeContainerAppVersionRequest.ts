// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackEdgeContainerAppVersionRequest extends $dara.Model {
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
   * The deployment percentage for the target version after the rollback. Valid values: **1 to 100**. Default value: **0**.
   * 
   * @example
   * 50
   */
  percentage?: number;
  /**
   * @remarks
   * Additional information about the rollback.
   * 
   * @example
   * test rollback app
   */
  remarks?: string;
  /**
   * @remarks
   * Specifies whether to use percentage rollback.
   * 
   * @example
   * true
   */
  usedPercent?: boolean;
  /**
   * @remarks
   * The ID of the version to roll back to.
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

