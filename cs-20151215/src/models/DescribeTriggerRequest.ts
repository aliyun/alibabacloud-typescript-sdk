// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTriggerRequest extends $dara.Model {
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
   * The namespace to which the application belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The type of trigger. Valid values:
   * 
   * *   `deployment`: performs actions on Deployments.
   * *   `application`: performs actions on applications that are deployed in Application Center.
   * 
   * Default value: `deployment`.
   * 
   * If you do not set this parameter, triggers are not filtered by type.
   * 
   * @example
   * deployment
   */
  type?: string;
  /**
   * @remarks
   * The action that the trigger performs. Set the value to redeploy.
   * 
   * `redeploy`: redeploys the resources specified by `project_id`.
   * 
   * If you do not specify this parameter, triggers are not filtered by action.
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

