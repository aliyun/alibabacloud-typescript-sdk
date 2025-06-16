// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcGatewayEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the gateway endpoint was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-08-27T01:58:37Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the gateway endpoint.
   * 
   * @example
   * vpce-bp1w1dmdqjpwul0v3****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the gateway endpoint.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 62CFC815-E08A-5CF4-92D1-54273EC9E406
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the gateway endpoint belongs.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the endpoint service.
   * 
   * @example
   * com.aliyun.cn-hangzhou.oss
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      endpointId: 'string',
      endpointName: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

