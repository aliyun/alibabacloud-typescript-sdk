// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKubernetesTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * web-server
   */
  name?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * 
   * - `deployment`: a trigger for a stateless application. 
   * 
   * - `application`: a trigger for an application center application.
   * 
   * Default value: `deployment`.
   * 
   * If you do not specify a trigger type, the query results are not filtered by trigger type.
   * 
   * @example
   * deployment
   */
  type?: string;
  /**
   * @remarks
   * The trigger action. Valid values:
   * 
   * `redeploy`: redeploys the resources defined in `project_id`.
   * 
   * If you do not specify a trigger action, the query results are not filtered by trigger action.
   * 
   * @example
   * redeploy
   */
  action?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      namespace: 'Namespace',
      type: 'Type',
      action: 'action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      namespace: 'string',
      type: 'string',
      action: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

