// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQualityEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the partition expression.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  entityId?: number;
  /**
   * @remarks
   * The type of the engine or data source. Valid values: E-MapReduce (EMR), Hologres, AnalyticDB for PostgreSQL, CDH, MaxCompute, Kafka, and DataHub.
   * 
   * This parameter is required.
   * 
   * @example
   * odps
   */
  envType?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the engine or data source.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      envType: 'EnvType',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      envType: 'string',
      projectId: 'number',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

