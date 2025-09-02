// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCalcEnginesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the compute engine. The value of this parameter is not case-sensitive. Valid values:
   * 
   * *   **ODPS**
   * *   **EMR**
   * *   **BLINK**
   * *   **HOLO**
   * *   **MaxGraph**
   * *   **HYBRIDDB_FOR_POSTGRESQL**
   * *   **ADB_MYSQL**
   * *   **HADOOP_CDH**
   * *   **CLICKHOUSE**
   * 
   * This parameter is required.
   * 
   * @example
   * ODPS
   */
  calcEngineType?: string;
  /**
   * @remarks
   * The environment in which the compute engine is used. Valid values:
   * 
   * *   **DEV**
   * *   **PRD**
   * 
   * @example
   * PRD
   */
  envType?: string;
  /**
   * @remarks
   * The name of the compute engine, which must be exactly matched.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace with which the compute engine is associated.
   * 
   * This parameter is required.
   * 
   * @example
   * 27
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      calcEngineType: 'CalcEngineType',
      envType: 'EnvType',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calcEngineType: 'string',
      envType: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

