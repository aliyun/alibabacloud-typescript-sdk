// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMetaDataComponentRequest extends $dara.Model {
  /**
   * @remarks
   * The data source category. Valid values: DATASET, WORKFLOW, ENGINE.
   * 
   * @example
   * WORKFLOW
   */
  categoryType?: string;
  /**
   * @remarks
   * The role of the data source in the migration pipeline. Valid values:
   * - 0: source.
   * - 1: destination.
   * 
   * @example
   * 0
   */
  componentType?: number;
  /**
   * @remarks
   * The datasource config.
   * 
   * @example
   * {"endpoint":"...","token":"******"}
   */
  dsConfig?: string;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * Data source description
   */
  dsDesc?: string;
  /**
   * @remarks
   * The external ID of the data source.
   * 
   * @example
   * 290
   */
  dsId?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test_ds318_hangzhou_0428
   */
  dsName?: string;
  /**
   * @remarks
   * The connectivity status of the data source.
   * 
   * @example
   * 1
   */
  dsStatus?: number;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * Hive
   */
  dsType?: string;
  /**
   * @remarks
   * The version of the data source.
   * 
   * @example
   * 3.2.0
   */
  dsVersion?: string;
  static names(): { [key: string]: string } {
    return {
      categoryType: 'categoryType',
      componentType: 'componentType',
      dsConfig: 'dsConfig',
      dsDesc: 'dsDesc',
      dsId: 'dsId',
      dsName: 'dsName',
      dsStatus: 'dsStatus',
      dsType: 'dsType',
      dsVersion: 'dsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryType: 'string',
      componentType: 'number',
      dsConfig: 'string',
      dsDesc: 'string',
      dsId: 'string',
      dsName: 'string',
      dsStatus: 'number',
      dsType: 'string',
      dsVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

