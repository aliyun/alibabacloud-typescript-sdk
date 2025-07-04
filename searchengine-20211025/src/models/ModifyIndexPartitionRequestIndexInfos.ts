// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIndexPartitionRequestIndexInfos extends $dara.Model {
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * atest2
   */
  indexName?: string;
  /**
   * @remarks
   * The concurrency. Default value: 1.
   * 
   * @example
   * 1
   */
  parallelNum?: number;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 3
   */
  partitionCount?: number;
  static names(): { [key: string]: string } {
    return {
      indexName: 'indexName',
      parallelNum: 'parallelNum',
      partitionCount: 'partitionCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexName: 'string',
      parallelNum: 'number',
      partitionCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

