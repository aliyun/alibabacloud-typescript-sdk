// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceRegistrationsResponseBodyServiceRegistrations extends $dara.Model {
  /**
   * @remarks
   * Comment.
   * 
   * @example
   * some info is missing
   */
  comment?: string;
  /**
   * @remarks
   * Finish time.
   * 
   * @example
   * 2021-05-23T00:00:00Z
   */
  finishTime?: string;
  /**
   * @remarks
   * Registration ID.
   * 
   * @example
   * sr-001
   */
  registrationId?: string;
  /**
   * @remarks
   * Service ID.
   * 
   * @example
   * service-f4c0026a254bxxxxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * Registration status. Allowed values:
   * 
   * - Submitted
   * 
   * - Approved
   * 
   * - Rejected
   * 
   * - Canceled
   * 
   * - Executed
   * 
   * - Executed: Executed.
   * 
   * @example
   * Rejected
   */
  status?: string;
  /**
   * @remarks
   * Submit time.
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
   * Number of items per page in a paginated query. The maximum is 100, and the default is 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 51945B04-6AA6-410D-93BA-236E0248B104
   */
  requestId?: string;
  /**
   * @remarks
   * Service registration information.
   */
  serviceRegistrations?: ListServiceRegistrationsResponseBodyServiceRegistrations[];
  /**
   * @remarks
   * Total number of records that meet the criteria.
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

