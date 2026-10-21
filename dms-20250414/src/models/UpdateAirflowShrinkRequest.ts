// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAirflowShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique key ID of the Airflow instance.
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
   * The specification description of the Airflow instance.
   * 
   * @example
   * SMALL
   */
  appSpec?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * token-****
   */
  clientToken?: string;
  /**
   * @remarks
   * The DAG directory scanned by Airflow.
   * 
   * @example
   * default/dags
   */
  dagsDir?: string;
  /**
   * @remarks
   * The list of data mount information.
   */
  dataMountInfoListShrink?: string;
  /**
   * @remarks
   * The description of the Airflow instance.
   * 
   * @example
   * test airflow
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable serverless workers.
   */
  enableServerless?: boolean;
  /**
   * @remarks
   * The timeout period for a worker to exit.
   * 
   * @example
   * 60
   */
  gracefulShutdownTimeout?: number;
  /**
   * @remarks
   * The plugin directory scanned by Airflow.
   * 
   * @example
   * default/plugins
   */
  pluginsDir?: string;
  /**
   * @remarks
   * The installation file for package dependencies.
   * 
   * @example
   * default/requirements.txt
   */
  requirementFile?: string;
  /**
   * @remarks
   * The script loaded at startup of the Airflow instance.
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
   * The ID of the Data Management (DMS) workspace.
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
      dataMountInfoListShrink: 'DataMountInfoList',
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
      dataMountInfoListShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

