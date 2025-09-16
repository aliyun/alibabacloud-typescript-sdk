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

export class ModifyIndexPartitionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test1
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The data center.
   * 
   * @example
   * pre_domain_1
   */
  domainName?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 1633293829
   */
  generation?: number;
  /**
   * @remarks
   * The index information.
   */
  indexInfos?: ModifyIndexPartitionRequestIndexInfos[];
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'dataSourceName',
      domainName: 'domainName',
      generation: 'generation',
      indexInfos: 'indexInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      domainName: 'string',
      generation: 'number',
      indexInfos: { 'type': 'array', 'itemType': ModifyIndexPartitionRequestIndexInfos },
    };
  }

  validate() {
    if(Array.isArray(this.indexInfos)) {
      $dara.Model.validateArray(this.indexInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

