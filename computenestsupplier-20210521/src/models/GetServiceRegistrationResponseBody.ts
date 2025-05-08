// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceRegistrationResponseBodyDetail } from "./GetServiceRegistrationResponseBodyDetail";
import { GetServiceRegistrationResponseBodyServiceInfo } from "./GetServiceRegistrationResponseBodyServiceInfo";


export class GetServiceRegistrationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Comment from reviewer.
   * 
   * @example
   * comment message
   */
  comment?: string;
  /**
   * @remarks
   * The details of service audit.
   */
  detail?: GetServiceRegistrationResponseBodyDetail;
  /**
   * @remarks
   * Finish time.
   * 
   * @example
   * 2024-12-07T11:05:50Z
   */
  finishTime?: string;
  /**
   * @remarks
   * Service registration ID.
   * 
   * @example
   * sr-1b4aabc1c9eb4109****
   */
  registrationId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A361BA9E-xxxx-xxxx-xxxx-C26E5180456E
   */
  requestId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-c2d118c9193e49xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service details.
   */
  serviceInfo?: GetServiceRegistrationResponseBodyServiceInfo;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * beta
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The status of service registration. Valid values:
   * 
   * *   Submitted
   * *   Approved
   * *   Rejected
   * *   Canceled
   * *   Executed
   * 
   * @example
   * Submitted
   */
  status?: string;
  /**
   * @remarks
   * Submit time.
   * 
   * @example
   * 2024-12-07T11:05:50Z
   */
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      detail: 'Detail',
      finishTime: 'FinishTime',
      registrationId: 'RegistrationId',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceInfo: 'ServiceInfo',
      serviceVersion: 'ServiceVersion',
      status: 'Status',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      detail: GetServiceRegistrationResponseBodyDetail,
      finishTime: 'string',
      registrationId: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceInfo: GetServiceRegistrationResponseBodyServiceInfo,
      serviceVersion: 'string',
      status: 'string',
      submitTime: 'string',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    if(this.serviceInfo && typeof (this.serviceInfo as any).validate === 'function') {
      (this.serviceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

