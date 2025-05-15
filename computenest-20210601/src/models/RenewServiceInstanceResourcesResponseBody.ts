// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RenewServiceInstanceResourcesResponseBodyFailureDetails } from "./RenewServiceInstanceResourcesResponseBodyFailureDetails";
import { RenewServiceInstanceResourcesResponseBodyRenewalResult } from "./RenewServiceInstanceResourcesResponseBodyRenewalResult";


export class RenewServiceInstanceResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of failed renewals.
   */
  failureDetails?: RenewServiceInstanceResourcesResponseBodyFailureDetails[];
  /**
   * @remarks
   * Renewal result.
   */
  renewalResult?: RenewServiceInstanceResourcesResponseBodyRenewalResult;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 13FE89A5-C036-56BF-A0FF-A31C59819FD7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failureDetails: 'FailureDetails',
      renewalResult: 'RenewalResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureDetails: { 'type': 'array', 'itemType': RenewServiceInstanceResourcesResponseBodyFailureDetails },
      renewalResult: RenewServiceInstanceResourcesResponseBodyRenewalResult,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failureDetails)) {
      $dara.Model.validateArray(this.failureDetails);
    }
    if(this.renewalResult && typeof (this.renewalResult as any).validate === 'function') {
      (this.renewalResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

