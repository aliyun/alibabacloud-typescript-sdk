// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateUserProvisioningResponseBodyUserProvisioning } from "./UpdateUserProvisioningResponseBodyUserProvisioning";


export class UpdateUserProvisioningResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6F90F3D-4502-5877-B80B-97476F6AE2CC
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the RAM user provisioning.
   */
  userProvisioning?: UpdateUserProvisioningResponseBodyUserProvisioning;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProvisioning: 'UserProvisioning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProvisioning: UpdateUserProvisioningResponseBodyUserProvisioning,
    };
  }

  validate() {
    if(this.userProvisioning && typeof (this.userProvisioning as any).validate === 'function') {
      (this.userProvisioning as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

