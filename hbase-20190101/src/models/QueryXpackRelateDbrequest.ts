// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryXpackRelateDBRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the current Spark instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-bp1qtz9rcbbt3p6ng
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is valid only when bds queries associated HBase instances.
   * 
   * - true: Single-node HBase instances are included.
   * 
   * - false: Single-node HBase instances are not included. This parameter is optional. For backward compatibility, single-node HBase instances are included when this parameter is left empty.
   * 
   * @example
   * false
   */
  hasSingleNode?: boolean;
  /**
   * @remarks
   * The type of database to query for association.
   * 
   * - spark can be associated with hdfs, hbase, mongodb, mysql, polardb_mysql, redis, and geomesa.
   * - bds can be associated with hbase, spark, and hbaseue.
   * 
   * This parameter is required.
   * 
   * @example
   * hbase
   */
  relateDbType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hasSingleNode: 'HasSingleNode',
      relateDbType: 'RelateDbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hasSingleNode: 'boolean',
      relateDbType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

