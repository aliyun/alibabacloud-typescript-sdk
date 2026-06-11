// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataMountInfo } from "./DataMountInfo";


export class UpdateAirflowRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the Airflow instance.
   * 
   * This parameter is required.
   * 
   * @example
   * af-test****
   */
  airflowId?: string;
  /**
   * @remarks
   * The name of the Airflow instance.
   * 
   * @example
   * testairflow
   */
  airflowName?: string;
  /**
   * @remarks
   * The specifications of the Airflow instance.
   * 
   * @example
   * SMALL
   */
  appSpec?: string;
  /**
   * @remarks
   * A client token to ensure request idempotence.
   * 
   * @example
   * token-****
   */
  clientToken?: string;
  /**
   * @remarks
   * The directory path where Airflow scans for DAGs.
   * 
   * @example
   * default/dags
   */
  dagsDir?: string;
  dataMountInfoList?: DataMountInfo[];
  /**
   * @remarks
   * The description of the Airflow instance.
   * 
   * @example
   * test airflow
   */
  description?: string;
  enableServerless?: boolean;
  /**
   * @example
   * 60
   */
  gracefulShutdownTimeout?: number;
  /**
   * @remarks
   * The directory path where Airflow scans for plugins.
   * 
   * @example
   * default/plugins
   */
  pluginsDir?: string;
  /**
   * @remarks
   * The path to the requirements file for package dependencies.
   * 
   * @example
   * default/requirements.txt
   */
  requirementFile?: string;
  /**
   * @remarks
   * The path to the startup script for the Airflow instance.
   * 
   * @example
   * default/startup.sh
   */
  startupFile?: string;
  /**
   * @remarks
   * The number of worker nodes.
   * 
   * @example
   * 0
   */
  workerServerlessReplicas?: number;
  /**
   * @remarks
   * The Data Management Service (DMS) workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 863024238280****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      airflowId: 'AirflowId',
      airflowName: 'AirflowName',
      appSpec: 'AppSpec',
      clientToken: 'ClientToken',
      dagsDir: 'DagsDir',
      dataMountInfoList: 'DataMountInfoList',
      description: 'Description',
      enableServerless: 'EnableServerless',
      gracefulShutdownTimeout: 'GracefulShutdownTimeout',
      pluginsDir: 'PluginsDir',
      requirementFile: 'RequirementFile',
      startupFile: 'StartupFile',
      workerServerlessReplicas: 'WorkerServerlessReplicas',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airflowId: 'string',
      airflowName: 'string',
      appSpec: 'string',
      clientToken: 'string',
      dagsDir: 'string',
      dataMountInfoList: { 'type': 'array', 'itemType': DataMountInfo },
      description: 'string',
      enableServerless: 'boolean',
      gracefulShutdownTimeout: 'number',
      pluginsDir: 'string',
      requirementFile: 'string',
      startupFile: 'string',
      workerServerlessReplicas: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataMountInfoList)) {
      $dara.Model.validateArray(this.dataMountInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

