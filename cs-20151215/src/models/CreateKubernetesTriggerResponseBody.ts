// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKubernetesTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The trigger action. For example, `redeploy`: redeploy.
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
   * The trigger project name.
   * 
   * @example
   * default/test-app
   */
  projectId?: string;
  /**
   * @remarks
   * The trigger type.
   * 
   * Valid values:
   * 
   * - `deployment`: a trigger for stateless applications. 
   * 
   * - `application`: a trigger for Application Center applications.
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

