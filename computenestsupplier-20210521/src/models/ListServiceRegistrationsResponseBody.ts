// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceRegistrationsResponseBodyServiceRegistrations extends $dara.Model {
  /**
   * @remarks
   * The review comments.
   * 
   * @example
   * some info is missing
   */
  comment?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2021-05-23T00:00:00Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The review request ID.
   * 
   * @example
   * sr-001
   */
  registrationId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-f4c0026a254bxxxxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The status of the review request. Possible values:
   * 
   * - Submitted: The request is submitted.
   * 
   * - Approved: The request is approved.
   * 
   * - Rejected: The request is rejected.
   * 
   * - Canceled: The request is canceled.
   * 
   * - Executed: The request is executed.
   * 
   * @example
   * Rejected
   */
  status?: string;
  /**
   * @remarks
   * The time when the request was submitted.
   * 
   * @example
   * 2021-05-22T00:00:00Z
   */
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      finishTime: 'FinishTime',
      registrationId: 'RegistrationId',
      serviceId: 'ServiceId',
      status: 'Status',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      finishTime: 'string',
      registrationId: 'string',
      serviceId: 'string',
      status: 'string',
      submitTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceRegistrationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51945B04-6AA6-410D-93BA-236E0248B104
   */
  requestId?: string;
  /**
   * @remarks
   * The service review request information.
   */
  serviceRegistrations?: ListServiceRegistrationsResponseBodyServiceRegistrations[];
  /**
   * @remarks
   * The total number of matching records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceRegistrations: 'ServiceRegistrations',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceRegistrations: { 'type': 'array', 'itemType': ListServiceRegistrationsResponseBodyServiceRegistrations },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.serviceRegistrations)) {
      $dara.Model.validateArray(this.serviceRegistrations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

