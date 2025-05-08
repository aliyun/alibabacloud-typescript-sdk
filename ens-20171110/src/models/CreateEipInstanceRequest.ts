// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEipInstanceRequestTag } from "./CreateEipInstanceRequestTag";


export class CreateEipInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth of the EIP. Default value: 5. Valid values: 5 to 10000. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. This prevents repeated operations caused by multiple retries.
   * 
   * *   You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length.
   * *   If you use a ClientToken that has been used and other request parameters remain unchanged in a repeated request, the client will receive the same result as the first request. This does not affect the status of your server.
   * *   You can initiate a retry when the operation times out or the error code is PROCESSING. The idempotence is valid. If HTTP status code 200 is returned, the client receives the same result as the last request. However, your server status is not affected. If HTTP status code 4xx is returned and error code is not PROCESSING, the idempotence is invalid.
   * *   A client token is valid for 10 minutes.
   * 
   * @example
   * 26C28756-2586-17AF-B802-0DC50D8FDEBB
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the EIP.
   * 
   * @example
   * yourDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Edge Node Service (ENS) node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-suzhou-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The billing method of the EIP. Set the value to **PostPaid**.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the EIP. Set the value to **95BandwidthByMonth**.
   * 
   * This parameter is required.
   * 
   * @example
   * 95BandwidthByMonth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The Internet service provider. Valid values:
   * 
   * *   **cmcc**: China Mobile.
   * *   **unicom**: China Unicom.
   * *   **telecom**: China Telecom.
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * The name of the EIP.
   * 
   * @example
   * EIP1
   */
  name?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateEipInstanceRequestTag[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      isp: 'Isp',
      name: 'Name',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      ensRegionId: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      isp: 'string',
      name: 'string',
      tag: { 'type': 'array', 'itemType': CreateEipInstanceRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

