// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayAuthConsumerDetailResponseBodyDataResourceList extends $dara.Model {
  /**
   * @remarks
   * The consumer ID.
   * 
   * @example
   * 123
   */
  consumerId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-4822033a8513496fa10f05c934f*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The time when the resource associated with the consumer authentication record was created.
   * 
   * @example
   * 2022-12-06 01:38:03
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the resource associated with the consumer authentication record was modified.
   * 
   * @example
   * 2022-12-06 01:38:03
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the authorized resource for the consumer.
   * 
   * @example
   * 16
   */
  id?: number;
  /**
   * @remarks
   * The resource authorization state. Valid values:
   * 
   * *   true: Resource authorization is enabled.
   * *   false: Resource authorization is disabled.
   * 
   * @example
   * true
   */
  resourceStatus?: boolean;
  /**
   * @remarks
   * The ID of the route.
   * 
   * @example
   * 3458
   */
  routeId?: number;
  /**
   * @remarks
   * The name of the route.
   * 
   * @example
   * test
   */
  routeName?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      resourceStatus: 'ResourceStatus',
      routeId: 'RouteId',
      routeName: 'RouteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      resourceStatus: 'boolean',
      routeId: 'number',
      routeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayAuthConsumerDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The status of the consumer. Valid values:
   * 
   * *   true: enabled
   * *   false: disabled
   * 
   * @example
   * true
   */
  consumerStatus?: boolean;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The encryption type. Valid values:
   * 
   * *   RSA
   * *   OCT
   * 
   * @example
   * RSA
   */
  encodeType?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-7ea3da97b96543e19f6c597cd4a9****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The time when the consumer authentication record was created.
   * 
   * @example
   * 2031-03-30 02:35:12
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the consumer authentication record was modified.
   * 
   * @example
   * 2023-02-01 14:17:57
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the consumer.
   * 
   * @example
   * 12
   */
  id?: number;
  /**
   * @remarks
   * The JWT public key. The JSON format is supported.
   * 
   * @example
   * {
   *       "keys": [
   *             {
   *                   "e": "AQAB",
   *                   "kid": "DHFbpoIUqrY8t2zpA2qXfCmr5VO5ZEr4RzHU_-envvQ",
   *                   "kty": "RSA",
   *                   "n": "xAE7eB6qugXyCAG3yhh7pkDkT65pHymX-P7KfIupjf59vsdo91bSP9C8H07pSAGQO1MV_xFj9VswgsCg4R6otmg5PV2He95lZdHtOcU5DXIg_pbhLdKXbi66GlVeK6ABZOUW3WYtnNHD-91gVuoeJT_DwtGGcp4ignkgXfkiEm4sw-4sfb4qdt5oLbyVpmW6x9cfa7vs2WTfURiCrBoUqgBo_-4WTiULmmHSGZHOjzwa8WtrtOQGsAFjIbno85jp6MnGGGZPYZbDAa_b3y5u-YpW7ypZrvD8BgtKVjgtQgZhLAGezMt0ua3DRrWnKqTZ0BJ_EyxOGuHJrLsn00fnMQ"
   *             }
   *       ]
   * }
   */
  jwks?: string;
  /**
   * @remarks
   * The name of the key used for JWT-based identity authentication.
   * 
   * @example
   * iss
   */
  keyName?: string;
  /**
   * @remarks
   * The value of the key used for JWT-based identity authentication.
   * 
   * @example
   * abcd
   */
  keyValue?: string;
  /**
   * @remarks
   * The name of the consumer.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 123
   */
  primaryUser?: string;
  /**
   * @remarks
   * The resource list.
   */
  resourceList?: GetGatewayAuthConsumerDetailResponseBodyDataResourceList[];
  /**
   * @remarks
   * The names of the parameters that are required to verify each token. By default, each token is prefixed with Bearer and stored in the Authorization header, such as `Authorization: Bearer <Content of a token>`.
   * 
   * @example
   * Authorization
   */
  tokenName?: string;
  /**
   * @remarks
   * Specifies whether to enable pass-through.
   * 
   * @example
   * true
   */
  tokenPass?: boolean;
  /**
   * @remarks
   * The positions of the parameters that are required to verify each token. By default, each token is prefixed with Bearer and stored in the Authorization header, such as `Authorization: Bearer <Content of a token>`.
   * 
   * @example
   * HEADER
   */
  tokenPosition?: string;
  /**
   * @remarks
   * The prefixes of the parameters that are required to verify each token. By default, each token is prefixed with Bearer and stored in the Authorization header, such as `Authorization: Bearer <Content of a token>`.
   * 
   * @example
   * Bearer
   */
  tokenPrefix?: string;
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * *   JWT
   * 
   * @example
   * JWT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      consumerStatus: 'ConsumerStatus',
      description: 'Description',
      encodeType: 'EncodeType',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      jwks: 'Jwks',
      keyName: 'KeyName',
      keyValue: 'KeyValue',
      name: 'Name',
      primaryUser: 'PrimaryUser',
      resourceList: 'ResourceList',
      tokenName: 'TokenName',
      tokenPass: 'TokenPass',
      tokenPosition: 'TokenPosition',
      tokenPrefix: 'TokenPrefix',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerStatus: 'boolean',
      description: 'string',
      encodeType: 'string',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      jwks: 'string',
      keyName: 'string',
      keyValue: 'string',
      name: 'string',
      primaryUser: 'string',
      resourceList: { 'type': 'array', 'itemType': GetGatewayAuthConsumerDetailResponseBodyDataResourceList },
      tokenName: 'string',
      tokenPass: 'boolean',
      tokenPosition: 'string',
      tokenPrefix: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayAuthConsumerDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 is returned if the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetGatewayAuthConsumerDetailResponseBodyData;
  /**
   * @remarks
   * The dynamic part in the error message.
   * 
   * @example
   * code
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace the \\*\\*%s\\*\\* variable in the **ErrMessage** parameter.
   * 
   * >  If the return value of the **ErrMessage** parameter is **The Value of Input Parameter %s is not valid** and the return value of the **DynamicMessage** parameter is **DtsJobId**, the specified **DtsJobId** parameter is invalid.
   * 
   * @example
   * The specified parameter is invalid.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code that is returned.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 316F5F64-F73D-42DC-8632-01E308B6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetGatewayAuthConsumerDetailResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

