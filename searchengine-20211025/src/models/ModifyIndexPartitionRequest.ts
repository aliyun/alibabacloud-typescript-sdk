// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyIndexPartitionRequestIndexInfos } from "./ModifyIndexPartitionRequestIndexInfos";


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

