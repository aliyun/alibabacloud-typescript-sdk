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
  percentage?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test rollback app
   */
  remarks?: string;
  usedPercent?: boolean;
  /**
   * @remarks
   * The ID of version that you want to roll back.
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

