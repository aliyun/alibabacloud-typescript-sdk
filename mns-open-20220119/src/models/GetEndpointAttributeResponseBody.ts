// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEndpointAttributeResponseBodyDataCidrList extends $dara.Model {
  /**
   * @remarks
   * The ACL policy. Valid values:
   * 
   * *   **allow**: indicates that the current endpoint allows access from the corresponding CIDR block. (Only allow is supported.)
   * 
   * @example
   * allow
   */
  aclStrategy?: string;
  /**
   * @remarks
   * The CIDR block.
   * 
   * @example
   * 172.18.0.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1701951224000
   */
  createTime?: number;
  static names(): { [key: string]: string } {
    return {
      aclStrategy: 'AclStrategy',
      cidr: 'Cidr',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclStrategy: 'string',
      cidr: 'string',
      createTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndpointAttributeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of CIDR block.
   */
  cidrList?: GetEndpointAttributeResponseBodyDataCidrList[];
  /**
   * @remarks
   * Specifies whether the endpoint is enabled.
   * 
   * @example
   * true
   */
  endpointEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      cidrList: 'CidrList',
      endpointEnabled: 'EndpointEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrList: { 'type': 'array', 'itemType': GetEndpointAttributeResponseBodyDataCidrList },
      endpointEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.cidrList)) {
      $dara.Model.validateArray(this.cidrList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndpointAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: GetEndpointAttributeResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06273500-249F-5863-121D-74D51123****
   */
  requestId?: string;
  /**
   * @remarks
   * The response status.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetEndpointAttributeResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
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

