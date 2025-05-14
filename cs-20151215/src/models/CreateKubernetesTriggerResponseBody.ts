// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKubernetesTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The action that the trigger performs. For example, a value of `redeploy` indicates that the trigger redeploys the application.
   * 
   * @example
   * redeploy
   */
  action?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c5cdf7e3938bc4f8eb0e44b21a80f****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the trigger.
   * 
   * @example
   * 111
   */
  id?: string;
  /**
   * @remarks
   * The name of the trigger project.
   * 
   * @example
   * default/test-app
   */
  projectId?: string;
  /**
   * @remarks
   * The type of trigger.
   * 
   * Valid values:
   * 
   * *   `deployment`: performs actions on Deployments.
   * *   `application`: performs actions on applications that are deployed in Application Center.
   * 
   * @example
   * deployment
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      clusterId: 'cluster_id',
      id: 'id',
      projectId: 'project_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clusterId: 'string',
      id: 'string',
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

