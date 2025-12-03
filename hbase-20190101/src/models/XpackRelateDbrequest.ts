// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class XpackRelateDBRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ap-bp1qtz9rcbbt3****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp16o0pd52e3****
   */
  dbClusterIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hbase
   */
  relateDbType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dbClusterIds: 'DbClusterIds',
      relateDbType: 'RelateDbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dbClusterIds: 'string',
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

