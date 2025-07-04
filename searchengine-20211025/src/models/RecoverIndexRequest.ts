// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoverIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment ID of the data source.
   * 
   * @example
   * 277
   */
  buildDeployId?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-pl32rf0js04_odps_first
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The ID of the full index version.
   * 
   * @example
   * 1653018575
   */
  generation?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * main_index
   */
  indexName?: string;
  static names(): { [key: string]: string } {
    return {
      buildDeployId: 'buildDeployId',
      dataSourceName: 'dataSourceName',
      generation: 'generation',
      indexName: 'indexName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildDeployId: 'number',
      dataSourceName: 'string',
      generation: 'string',
      indexName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

