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
   * The ID of the service instance.
   * 
   * @example
   * si-5cbae874da0e47xxxxxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The deployment state of the service instance. Valid values:
   * 
   * *   Created
   * *   Deploying
   * *   DeployedFailed
   * *   Deployed
   * *   Upgrading
   * *   Deleting
   * *   Deleted
   * *   DeletedFailed
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The parameters required for the upgrade.
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

