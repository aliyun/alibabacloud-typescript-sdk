// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The status of the service instance. Valid values:
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

