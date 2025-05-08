// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE9EF87D-46F8-5AF6-9A65-6B034E204136
   */
  requestId?: string;
  /**
   * @remarks
   * Service instance ID.
   * 
   * @example
   * si-5289e1d6d0c14397881d
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The deployment status of the service instance. Possible values:
   * 
   * - Created: Created
   * 
   * - Deploying: Deploying
   * 
   * - DeployedFailed: Deployment Failed
   * 
   * - Deployed: Deployed
   * 
   * - Upgrading: Upgrading
   * 
   * - UpgradeRollbacking: Rolling Back
   * 
   * - Deleting: Deleting
   * 
   * - Deleted: Deleted
   * 
   * - DeletedFailed: Deletion Failed
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

