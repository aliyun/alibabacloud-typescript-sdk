// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaDBInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The engine ID, in the format of `Engine type.Engine name`.
   * 
   * @example
   * odps.some_engine_name
   */
  appGuid?: string;
  /**
   * @remarks
   * The cluster ID of the EMR cluster.
   * 
   * @example
   * abc
   */
  clusterId?: string;
  /**
   * @remarks
   * The data type. Valid values: odps and emr.
   * 
   * @example
   * emr
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The database of the EMR cluster.
   * 
   * @example
   * abc
   */
  databaseName?: string;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGuid: 'string',
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

