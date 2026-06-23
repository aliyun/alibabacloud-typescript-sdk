// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The trigger action. Valid values:
   * 
   * `redeploy`: redeploys the resource defined in `project_id`.
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
   * The trigger project name.
   * 
   * The value consists of the namespace and application name in the format of `${namespace}/${name}`.
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
   * The trigger type. Valid values:
   * 
   * - `deployment`: a trigger for stateless applications. 
   * 
   * - `application`: a trigger for App Hub applications.
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

