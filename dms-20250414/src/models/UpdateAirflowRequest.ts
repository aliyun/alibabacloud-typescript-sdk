// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataMountInfo } from "./DataMountInfo";


export class UpdateAirflowRequest extends $dara.Model {
  /**
   * @remarks
   * The unique key ID of Airflow.
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
   * The specification description of Airflow.
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
  dataMountInfoList?: DataMountInfo[];
  /**
   * @remarks
   * The description of Airflow.
   * 
   * @example
   * test airflow
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable data lineage. For Airflow 2.x, this feature is always disabled, and the lineage specifications and number of replicas are ignored.
   */
  enableLineage?: boolean;
  /**
   * @remarks
   * Specifies whether to enable serverless workers.
   */
  enableServerless?: boolean;
  /**
   * @remarks
   * The timeout period for worker exit.
   * 
   * @example
   * 60
   */
  gracefulShutdownTimeout?: number;
  /**
   * @remarks
   * The number of replicas for the lineage service. The default value is 1 when enabled. If omitted during an update, the original value is retained.
   * 
   * @example
   * 1
   */
  lineageReplicas?: number;
  /**
   * @remarks
   * The merged lineage service specification, which uses the same tier as AppSpec.
   * 
   * @example
   * SMALL
   */
  lineageSpec?: string;
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
   * The script loaded when the Airflow instance starts.
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
      dataMountInfoList: 'DataMountInfoList',
      description: 'Description',
      enableLineage: 'EnableLineage',
      enableServerless: 'EnableServerless',
      gracefulShutdownTimeout: 'GracefulShutdownTimeout',
      lineageReplicas: 'LineageReplicas',
      lineageSpec: 'LineageSpec',
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
      enableLineage: 'boolean',
      enableServerless: 'boolean',
      gracefulShutdownTimeout: 'number',
      lineageReplicas: 'number',
      lineageSpec: 'string',
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

