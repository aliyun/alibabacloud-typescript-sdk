// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcGatewayEndpointAttributeResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N added to the resource.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N added to the resource.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcGatewayEndpointAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the endpoint was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-08-27T01:58:37Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the gateway endpoint.
   * 
   * @example
   * test
   */
  endpointDescription?: string;
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
   * The status of the gateway endpoint. Valid values:
   * 
   * *   **Creating**
   * *   **Created**
   * *   **Modifying**
   * *   **Associating**
   * *   **Dissociating**
   * *   **Deleting**
   * 
   * @example
   * Created
   */
  endpointStatus?: string;
  /**
   * @remarks
   * The access policy for the cloud service.
   * 
   * @example
   * {"Version" : "1",   "Statement" : [ {     "Effect" : "Allow",     "Resource" : [ "*" ],     "Action" : [ "*" ],     "Principal" : [ "*" ]   } ] }
   */
  policyDocument?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1122D0F-7B3B-5445-BB19-17F27F97FE1C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the gateway endpoint belongs.
   * 
   * @example
   * rg-acfmxvfvazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the route table associated with the gateway endpoint.
   */
  routeTables?: string[];
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
   * The tag list.
   */
  tags?: GetVpcGatewayEndpointAttributeResponseBodyTags[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the gateway endpoint belongs.
   * 
   * @example
   * vpc-bp1nh86rugg01zol0****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      endpointDescription: 'EndpointDescription',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointStatus: 'EndpointStatus',
      policyDocument: 'PolicyDocument',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      routeTables: 'RouteTables',
      serviceName: 'ServiceName',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      endpointDescription: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointStatus: 'string',
      policyDocument: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      routeTables: { 'type': 'array', 'itemType': 'string' },
      serviceName: 'string',
      tags: { 'type': 'array', 'itemType': GetVpcGatewayEndpointAttributeResponseBodyTags },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.routeTables)) {
      $dara.Model.validateArray(this.routeTables);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

