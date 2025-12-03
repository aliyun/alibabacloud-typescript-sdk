// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryXpackRelateDBRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ap-bp1qtz9rcbbt3p6ng
   */
  clusterId?: string;
  /**
   * @example
   * false
   */
  hasSingleNode?: boolean;
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

