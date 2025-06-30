// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateResolverEndpointRequestIpConfig } from "./UpdateResolverEndpointRequestIpConfig";


export class UpdateResolverEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The source IP addresses of outbound traffic. You can add two to six IP addresses.
   * 
   * >  You must add at least two source IP addresses for outbound traffic to ensure high availability. We recommend that you add two IP addresses that reside in different zones. You can add up to six source IP addresses.
   */
  ipConfig?: UpdateResolverEndpointRequestIpConfig[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The endpoint name.
   * 
   * @example
   * endpoint-test-name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      ipConfig: 'IpConfig',
      lang: 'Lang',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      ipConfig: { 'type': 'array', 'itemType': UpdateResolverEndpointRequestIpConfig },
      lang: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipConfig)) {
      $dara.Model.validateArray(this.ipConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

