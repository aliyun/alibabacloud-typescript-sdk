// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetFileMetasStat } from "./DatasetFileMetasStat";


export class GetDatasetFileMetasStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the returned aggregation list. You can get the count for each aggregated item. The list is sorted by Count in descending order by default.
   */
  datasetFileMetasStats?: DatasetFileMetasStat[];
  /**
   * @remarks
   * The number of statistical results returned. For example, the number of metadata entries or the number of user tags.
   * 
   * @example
   * 73
   */
  totalCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMetasStats: 'DatasetFileMetasStats',
      totalCount: 'TotalCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetFileMetasStats: { 'type': 'array', 'itemType': DatasetFileMetasStat },
      totalCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datasetFileMetasStats)) {
      $dara.Model.validateArray(this.datasetFileMetasStats);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

