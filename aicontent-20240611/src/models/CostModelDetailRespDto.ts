// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricDefRespDTO } from "./MetricDefRespDto";
import { CostModelDetailRowDTO } from "./CostModelDetailRowDto";


export class CostModelDetailRespDTO extends $dara.Model {
  /**
   * @remarks
   * List of column definitions
   */
  columns?: MetricDefRespDTO[];
  /**
   * @remarks
   * Current granularity: daily/hourly
   * 
   * @example
   * hourly
   */
  granularity?: string;
  /**
   * @remarks
   * Model ID
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @remarks
   * Model name
   * 
   * @example
   * 通义千问-Plus
   */
  modelName?: string;
  /**
   * @remarks
   * Current page
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Number of entries per page
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * List of data rows
   */
  rows?: CostModelDetailRowDTO[];
  /**
   * @remarks
   * Total number of entries
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      granularity: 'granularity',
      modelId: 'modelId',
      modelName: 'modelName',
      page: 'page',
      pageSize: 'pageSize',
      rows: 'rows',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': MetricDefRespDTO },
      granularity: 'string',
      modelId: 'number',
      modelName: 'string',
      page: 'number',
      pageSize: 'number',
      rows: { 'type': 'array', 'itemType': CostModelDetailRowDTO },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

