// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetProxyConfig extends $dara.Model {
  /**
   * @remarks
   * Dataset type. Only LABEL is supported.
   * 
   * @example
   * LABEL
   */
  datasetType?: string;
  /**
   * @remarks
   * Dataset source. Only PAI is supported.
   * 
   * @example
   * PAI
   */
  source?: string;
  /**
   * @remarks
   * Source dataset ID. For information about how to obtain a dataset ID, see [ListDatasets](https://help.aliyun.com/document_detail/457222.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 214***12514
   */
  sourceDatasetId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetType: 'DatasetType',
      source: 'Source',
      sourceDatasetId: 'SourceDatasetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetType: 'string',
      source: 'string',
      sourceDatasetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

