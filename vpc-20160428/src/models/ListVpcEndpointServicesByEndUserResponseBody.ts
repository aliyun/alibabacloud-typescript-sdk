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
   * The domain name of the cloud service associated with the endpoint service in the queried region.
   * 
   * @example
   * oss-admin.aliyuncs.com
   */
  serviceDomain?: string;
  /**
   * @remarks
   * The instance ID of the endpoint service.
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
   * Indicates whether the endpoint service supports access policies. Valid values:
   * 
   * - **false**: Access policies are not supported.
   * - **true**: Access policies are supported.
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
   * The number of entries per page in a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AB1129F-32C1-5E4D-9E22-E4A859CA46EB
   */
  requestId?: string;
  /**
   * @remarks
   * The list of available endpoint services.
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

