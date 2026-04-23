// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricDefRespDTO } from "./MetricDefRespDto";
import { CostModelDetailRowDTO } from "./CostModelDetailRowDto";


export class CostModelDetailRespDTO extends $dara.Model {
  columns?: MetricDefRespDTO[];
  /**
   * @example
   * hourly
   */
  granularity?: string;
  /**
   * @example
   * 1
   */
  modelId?: number;
  modelName?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  rows?: CostModelDetailRowDTO[];
  /**
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

