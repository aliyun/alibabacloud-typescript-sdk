// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddContainerClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * cc-00049slr9iuvvv6pp134
   */
  clusterId?: string;
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message that is returned. If the request is successful, a value of successful is returned. If the request fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1FCBC078-FFCB-542A-8555-566477679720
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * *   true: The request is successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The token that is used to register the Hybrid Backup Recovery (HBR) client in the cluster.
   * 
   * @example
   * eyJhY2NvdW*****VnZpgXQC5A==
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

