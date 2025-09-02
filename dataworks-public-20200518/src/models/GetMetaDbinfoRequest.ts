// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaDBInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The compute engine instance ID. Specify the ID in the `Engine type.Engine name` format.
   * 
   * @example
   * odps.some_engine_name
   */
  appGuid?: string;
  /**
   * @remarks
   * The E-MapReduce (EMR) cluster ID.
   * 
   * @example
   * abc
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values: odps and emr.
   * 
   * @example
   * emr
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The name of the metadatabase of the EMR cluster.
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

