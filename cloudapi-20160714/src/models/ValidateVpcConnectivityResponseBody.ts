// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateVpcConnectivityResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the API Gateway instance is connected to the port. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * True
   */
  connected?: boolean;
  /**
   * @remarks
   * Indicates whether the instance in the authorization is an ECS instance or an SLB instance when the instance ID in the authorization is an IP address. Valid values:
   * 
   * *   **ECS**
   * *   **SLB**
   * *   **INVALID**: The instance type corresponding to the IP address is invalid.
   * 
   * @example
   * ECS
   */
  ipType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A591B5B-0EC2-5463-B8B8-1984AE3AEBF1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connected: 'Connected',
      ipType: 'IpType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connected: 'boolean',
      ipType: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

