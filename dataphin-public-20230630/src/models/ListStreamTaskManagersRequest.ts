// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStreamTaskManagersRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment instance ID. You can obtain the value from the deploymentInstanceId returned in the operation record or historical run instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 7db678957dc449aab0086b931c9f8218
   */
  deploymentInstanceId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The ID of the Dataphin project to which the task belongs. This parameter is used for permission verification in the production environment.
   * 
   * This parameter is required.
   * 
   * @example
   * 7299592831043008
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      deploymentInstanceId: 'DeploymentInstanceId',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentInstanceId: 'string',
      opTenantId: 'number',
      opUserId: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

