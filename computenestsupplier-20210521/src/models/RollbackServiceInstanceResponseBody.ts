// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE9EF87D-46F8-5AF6-9A65-6B034E204136
   */
  requestId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-5289e1d6d0c14397881d
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The deployment status of the service instance. Valid values:
   * 
   * - Created: The service instance is created.
   * 
   * - Deploying: The service instance is being deployed.
   * 
   * - DeployedFailed: The deployment of the service instance failed.
   * 
   * - Deployed: The service instance is deployed.
   * 
   * - Upgrading: The service instance is being upgraded.
   * 
   * - UpgradeRollbacking: The service instance is being rolled back.
   * 
   * - Deleting: The service instance is being deleted.
   * 
   * - Deleted: The service instance is deleted.
   * 
   * - DeletedFailed: The deletion of the service instance failed.
   * 
   * @example
   * UpgradeRollbacking
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceInstanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

