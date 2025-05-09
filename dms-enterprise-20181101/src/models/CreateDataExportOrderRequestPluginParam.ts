// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataExportOrderRequestPluginParamWatermark } from "./CreateDataExportOrderRequestPluginParamWatermark";


export class CreateDataExportOrderRequestPluginParam extends $dara.Model {
  /**
   * @remarks
   * The estimated number of data rows to be affected.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  affectRows?: number;
  /**
   * @remarks
   * The reason for the export ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  classify?: string;
  /**
   * @remarks
   * The database ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 18****
   */
  dbId?: number;
  /**
   * @remarks
   * The SQL statements that can be executed.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT * FROM DMS_test
   *  LIMIT 20;
   */
  exeSQL?: string;
  /**
   * @remarks
   * Specifies whether to skip verification. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  ignoreAffectRows?: boolean;
  /**
   * @remarks
   * The reason for skipping verification. This parameter is required if you set IgnoreAffectRows to true.
   * 
   * @example
   * Test only, does not affect the business, and does not require verification.
   */
  ignoreAffectRowsReason?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 132****
   */
  instanceId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > If you set this parameter to **true**, the database that you specify must be a logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  logic?: boolean;
  /**
   * @remarks
   * The information about the watermarks.
   */
  watermark?: CreateDataExportOrderRequestPluginParamWatermark;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      classify: 'Classify',
      dbId: 'DbId',
      exeSQL: 'ExeSQL',
      ignoreAffectRows: 'IgnoreAffectRows',
      ignoreAffectRowsReason: 'IgnoreAffectRowsReason',
      instanceId: 'InstanceId',
      logic: 'Logic',
      watermark: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      classify: 'string',
      dbId: 'number',
      exeSQL: 'string',
      ignoreAffectRows: 'boolean',
      ignoreAffectRowsReason: 'string',
      instanceId: 'number',
      logic: 'boolean',
      watermark: CreateDataExportOrderRequestPluginParamWatermark,
    };
  }

  validate() {
    if(this.watermark && typeof (this.watermark as any).validate === 'function') {
      (this.watermark as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

