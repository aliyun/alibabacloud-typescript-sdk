// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKubernetesTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The action that the trigger performs. Set the value to redeploy.
   * 
   * `redeploy`: redeploys the resources specified by `project_id`.
   * 
   * This parameter is required.
   * 
   * @example
   * redeploy
   */
  action?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c5cdf7e3938bc4f8eb0e44b21a80f****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the trigger project.
   * 
   * The name consists of the namespace where the application is deployed and the name of the application. The format is `${namespace}/${name}`.
   * 
   * Example: `default/test-app`.
   * 
   * This parameter is required.
   * 
   * @example
   * default/test-app
   */
  projectId?: string;
  /**
   * @remarks
   * The type of trigger. Valid values:
   * 
   * *   `deployment`: performs actions on Deployments.
   * *   `application`: performs actions on applications that are deployed in Application Center.
   * 
   * Default value: `deployment`.
   * 
   * @example
   * deployment
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      clusterId: 'cluster_id',
      projectId: 'project_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clusterId: 'string',
      projectId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

