// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewServiceInstanceResourcesResponseBodyFailureDetails extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * InvalidPeriod
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Error message
   */
  errorMessage?: string;
  /**
   * @remarks
   * Resource ARN (Aliyun Resource Name).
   * 
   * @example
   * acs:ecs:cn-hongkong:1488317743351199:instance/i-j6c6f3lbky38o8rpeqw2
   */
  resourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      resourceArn: 'ResourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      resourceArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewServiceInstanceResourcesResponseBodyRenewalResult extends $dara.Model {
  /**
   * @remarks
   * Number of failed renewals.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * Number of successfully renewed resources.
   * 
   * @example
   * 9
   */
  succeeded?: number;
  /**
   * @remarks
   * Number of renewed resources.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      succeeded: 'Succeeded',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      succeeded: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

