// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMseSourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * mse-af1****-nacos-ans.mse.aliyuncs.com:8848
   */
  address?: string;
  /**
   * @remarks
   * The ID of cluster.
   * 
   * @example
   * mse_
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * mse_prepaid_public_cn-7pp2eec****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * Nacos
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      clusterId: 'string',
      instanceId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMseSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 1
   */
  code?: number;
  /**
   * @remarks
   * The data structure.
   */
  data?: GetMseSourceResponseBodyData[];
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
   * The message returned.
   * 
   * *   If the request is successful, a success message is returned.
   * *   If the request fails, an error message is returned, such as the "TaskId not found" message.
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
   * 5EB2D865-B43F-5526-8F92-857718CF73A2
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetMseSourceResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

