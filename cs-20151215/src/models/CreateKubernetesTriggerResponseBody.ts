// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKubernetesTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The action of the trigger. For example, `redeploy`: Redeploys the resources.
   * 
   * @example
   * redeploy
   */
  action?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c5cdf7e3938bc4f8eb0e44b21a80f****
   */
  clusterId?: string;
  /**
   * @remarks
   * The trigger ID.
   * 
   * @example
   * 111
   */
  id?: string;
  /**
   * @remarks
   * The project name of the trigger.
   * 
   * @example
   * default/test-app
   */
  projectId?: string;
  /**
   * @remarks
   * The type of the trigger. Valid values:
   * - `deployment`: The trigger for stateless applications.
   * - `application`: The trigger for applications in Hybrid Cloud Application Center.
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

