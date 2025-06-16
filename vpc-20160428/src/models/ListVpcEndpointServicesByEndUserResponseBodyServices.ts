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

