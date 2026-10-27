// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKubernetesTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The action of the trigger. Valid values:
   * - `redeploy`: Redeploys the resources defined in `project_id`.
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
   * The project name of the trigger. It consists of the namespace and the name of the application, in the format of `${namespace}/${name}`. Example: `default/test-app`.
   * 
   * This parameter is required.
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

