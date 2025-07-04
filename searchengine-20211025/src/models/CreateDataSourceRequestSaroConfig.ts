// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSourceRequestSaroConfig extends $dara.Model {
  /**
   * @remarks
   * The namespace of the SARO data source.
   * 
   * @example
   * igraph-cn-x0r3e3abe02
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the SARO table.
   * 
   * @example
   * index_hdfs
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

