// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserProvisioningStatisticsResponseBodyUserProvisioningStatistics } from "./GetUserProvisioningStatisticsResponseBodyUserProvisioningStatistics";


export class GetUserProvisioningStatisticsResponseBody extends $dara.Model {
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
   * The statistics of the RAM user provisioning.
   */
  userProvisioningStatistics?: GetUserProvisioningStatisticsResponseBodyUserProvisioningStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProvisioningStatistics: 'UserProvisioningStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProvisioningStatistics: GetUserProvisioningStatisticsResponseBodyUserProvisioningStatistics,
    };
  }

  validate() {
    if(this.userProvisioningStatistics && typeof (this.userProvisioningStatistics as any).validate === 'function') {
      (this.userProvisioningStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

