// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The actions performed by the trigger.
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
   * c93095129fc41463aa455d89444fd****
   */
  clusterId?: string;
  /**
   * @remarks
   * The trigger ID.
   * 
   * @example
   * 102536
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
   * The trigger type.
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

