// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListK8sResourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the k8s resource.
   * 
   * @example
   * xxljob-01632622cda2f
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the k8s resource.
   * 
   * @example
   * q_ecs_enterprise_spot_c
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sResourceResponseBody extends $dara.Model {
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
   * - An array of k8s resources.
   */
  data?: ListK8sResourceResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * The Request ID.
   * 
   * @example
   * 2ECA6FC9-7557-5576-AF5F-FC3E7BCC9C21
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
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
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListK8sResourceResponseBodyData },
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

