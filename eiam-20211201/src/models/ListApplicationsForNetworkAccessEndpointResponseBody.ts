// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsForNetworkAccessEndpointResponseBodyApplicationsForNetworkAccessEndpoint extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app_m5nzr3kk4njkco2nnc4wjxxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * cloudSSO
   */
  applicationName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_6ed5syotlwdrgmbzn7qn5xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForNetworkAccessEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of applications for the network access endpoint.
   */
  applicationsForNetworkAccessEndpoint?: ListApplicationsForNetworkAccessEndpointResponseBodyApplicationsForNetworkAccessEndpoint[];
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationsForNetworkAccessEndpoint: 'ApplicationsForNetworkAccessEndpoint',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationsForNetworkAccessEndpoint: { 'type': 'array', 'itemType': ListApplicationsForNetworkAccessEndpointResponseBodyApplicationsForNetworkAccessEndpoint },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationsForNetworkAccessEndpoint)) {
      $dara.Model.validateArray(this.applicationsForNetworkAccessEndpoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

