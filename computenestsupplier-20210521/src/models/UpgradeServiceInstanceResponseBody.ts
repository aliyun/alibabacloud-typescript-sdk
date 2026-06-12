// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F224E002-AB0E-5FD9-A87E-54AEE56F6CAE
   */
  requestId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-5cbae874da0e47xxxxxx
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
   * - DeployedFailed: The service instance failed to be deployed.
   * 
   * - Deployed: The service instance is deployed.
   * 
   * - Upgrading: The service instance is being upgraded.
   * 
   * - Deleting: The service instance is being deleted.
   * 
   * - Deleted: The service instance is deleted.
   * 
   * - DeletedFailed: The service instance failed to be deleted.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The parameters that are required for the upgrade.
   */
  upgradeRequiredParameters?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
      status: 'Status',
      upgradeRequiredParameters: 'UpgradeRequiredParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceInstanceId: 'string',
      status: 'string',
      upgradeRequiredParameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.upgradeRequiredParameters)) {
      $dara.Model.validateArray(this.upgradeRequiredParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

