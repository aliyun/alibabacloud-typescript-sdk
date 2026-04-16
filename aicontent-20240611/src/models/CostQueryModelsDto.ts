// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricDefRespDTO } from "./MetricDefRespDto";
import { ModelRowDTO } from "./ModelRowDto";


export class CostQueryModelsDTO extends $dara.Model {
  columns?: MetricDefRespDTO[];
  /**
   * @example
   * model_id
   */
  idField?: string;
  /**
   * @example
   * model_name
   */
  nameField?: string;
  rows?: ModelRowDTO[];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      idField: 'idField',
      nameField: 'nameField',
      rows: 'rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': MetricDefRespDTO },
      idField: 'string',
      nameField: 'string',
      rows: { 'type': 'array', 'itemType': ModelRowDTO },
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

