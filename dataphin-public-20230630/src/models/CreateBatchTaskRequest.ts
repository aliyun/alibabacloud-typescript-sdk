// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchTaskRequestCreateCommand extends $dara.Model {
  /**
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @example
   * 12131111
   */
  dataSourceId?: string;
  /**
   * @example
   * erp
   */
  dataSourceSchema?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx test.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /a/b
   */
  directory?: string;
  /**
   * @example
   * PYTHON3_7
   */
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test111
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10121101
   */
  projectId?: number;
  pythonModuleList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  scheduleType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      description: 'Description',
      directory: 'Directory',
      engine: 'Engine',
      name: 'Name',
      projectId: 'ProjectId',
      pythonModuleList: 'PythonModuleList',
      scheduleType: 'ScheduleType',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceCatalog: 'string',
      dataSourceId: 'string',
      dataSourceSchema: 'string',
      description: 'string',
      directory: 'string',
      engine: 'string',
      name: 'string',
      projectId: 'number',
      pythonModuleList: { 'type': 'array', 'itemType': 'string' },
      scheduleType: 'number',
      taskType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pythonModuleList)) {
      $dara.Model.validateArray(this.pythonModuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateBatchTaskRequestCreateCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateBatchTaskRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

