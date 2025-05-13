// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetJobConfig } from "./DatasetJobConfig";


export class ListDatasetJobConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dataset job configurations.
   */
  datasetJobConfigs?: DatasetJobConfig[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasetJobConfigs: 'DatasetJobConfigs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetJobConfigs: { 'type': 'array', 'itemType': DatasetJobConfig },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.datasetJobConfigs)) {
      $dara.Model.validateArray(this.datasetJobConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

