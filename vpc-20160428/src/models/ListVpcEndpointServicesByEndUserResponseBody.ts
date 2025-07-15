// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointServicesByEndUserResponseBodyServices extends $dara.Model {
  /**
   * @remarks
   * The default access policy.
   * 
   * @example
   * {   \\"Version\\" : \\"1\\",   \\"Statement\\" : [ {     \\"Effect\\" : \\"Allow\\",     \\"Action\\" : \\"*\\",     \\"Principal\\" : \\"*\\",     \\"Resource\\" : \\"*\\"   } ] }
   */
  defaultPolicyDocument?: string;
  /**
   * @remarks
   * The domain name of the cloud service to which the endpoint service belongs.
   * 
   * @example
   * oss-admin.aliyuncs.com
   */
  serviceDomain?: string;
  /**
   * @remarks
   * The ID of the endpoint service.
   * 
   * @example
   * vpces-m5enwdmilo210aibo9****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service.
   * 
   * @example
   * com.aliyun.cn-hangzhou.oss
   */
  serviceName?: string;
  /**
   * @remarks
   * Indicate whether the endpoint service supports the access policy. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  supportPolicy?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultPolicyDocument: 'DefaultPolicyDocument',
      serviceDomain: 'ServiceDomain',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      supportPolicy: 'SupportPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPolicyDocument: 'string',
      serviceDomain: 'string',
      serviceId: 'string',
      serviceName: 'string',
      supportPolicy: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointServicesByEndUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If no value is returned for **NextToken**, no next queries are sent.
   * *   If **NextToken** is returned, the value is the token that is used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0AB1129F-32C1-5E4D-9E22-E4A859CA46EB
   */
  requestId?: string;
  /**
   * @remarks
   * The list of entries returned.
   */
  services?: ListVpcEndpointServicesByEndUserResponseBodyServices[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      services: 'Services',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListVpcEndpointServicesByEndUserResponseBodyServices },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

