// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAirflowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af-test****
   */
  airflowId?: string;
  /**
   * @example
   * testairflow
   */
  airflowName?: string;
  /**
   * @example
   * SMALL
   */
  appSpec?: string;
  /**
   * @example
   * token-****
   */
  clientToken?: string;
  /**
   * @example
   * default/dags
   */
  dagsDir?: string;
  /**
   * @example
   * test airflow
   */
  description?: string;
  /**
   * @example
   * default/plugins
   */
  pluginsDir?: string;
  /**
   * @example
   * default/requirements.txt
   */
  requirementFile?: string;
  /**
   * @example
   * default/startup.sh
   */
  startupFile?: string;
  /**
   * @example
   * 0
   */
  workerServerlessReplicas?: number;
  /**
   * @remarks
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
      description: 'Description',
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
      description: 'string',
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

