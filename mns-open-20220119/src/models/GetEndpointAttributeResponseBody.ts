// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEndpointAttributeResponseBodyDataCidrList extends $dara.Model {
  /**
   * @remarks
   * The access control list (ACL) policy. Valid value:
   * 
   * - **allow**: The endpoint allows access from the specified CIDR block. This is the only supported value.
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
   * The time when the CIDR block was created.
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
   * The list of CIDR blocks.
   */
  cidrList?: GetEndpointAttributeResponseBodyDataCidrList[];
  /**
   * @remarks
   * Indicates whether the endpoint is enabled.
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
   * The response code.
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
   * The response message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06273500-249F-5863-121D-74D51123****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the response.
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

