// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecWorkflowConnectivityRequest extends $dara.Model {
  /**
   * @remarks
   * The datasource config. The value is a JSON character string whose structure is defined by each dsType. Parse the JSON string before use. Sensitive fields such as tokens are masked in the response.
   * 
   * @example
   * {"endpoint":"...","token":"******"}
   */
  dsConfig?: string;
  /**
   * @remarks
   * The data source name. Exact match and fuzzy match are supported.
   * 
   * @example
   * test_ds318_hangzhou_0428
   */
  dsName?: string;
  /**
   * @remarks
   * The data source type, such as Hive or MaxCompute.
   * 
   * @example
   * Hive
   */
  dsType?: string;
  /**
   * @remarks
   * The data source version number.
   * 
   * @example
   * 3.2.0
   */
  dsVersion?: string;
  /**
   * @remarks
   * The primary key ID that uniquely identifies a record.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * Specifies whether the configuration has been modified.
   */
  isModified?: boolean;
  static names(): { [key: string]: string } {
    return {
      dsConfig: 'dsConfig',
      dsName: 'dsName',
      dsType: 'dsType',
      dsVersion: 'dsVersion',
      id: 'id',
      isModified: 'isModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsConfig: 'string',
      dsName: 'string',
      dsType: 'string',
      dsVersion: 'string',
      id: 'number',
      isModified: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

