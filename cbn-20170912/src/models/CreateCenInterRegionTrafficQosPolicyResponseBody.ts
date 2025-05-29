// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenInterRegionTrafficQosPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6DF9A765-BCD2-5C7E-8C32-C35C8A361A39
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * @example
   * qos-eczzew0v1kzrb5****
   */
  trafficQosPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficQosPolicyId: 'TrafficQosPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficQosPolicyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

