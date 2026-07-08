// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRenderingInstanceBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum outbound bandwidth for rate limiting. Unit: Mbit/s. You must specify at least one of MaxIngressBandwidth and MaxEgressBandwidth.
   * 
   * - By default, no rate limit is configured for the instance.
   * 
   * - If you do not specify this parameter or set it to 0, the last configuration is retained.
   * 
   * - If you set this parameter to a value less than 0, the rate limit is reset to unlimited.
   * 
   * @example
   * 100
   */
  maxEgressBandwidth?: number;
  /**
   * @remarks
   * The maximum inbound bandwidth for rate limiting. Unit: Mbit/s. You must specify at least one of MaxIngressBandwidth and MaxEgressBandwidth.
   * 
   * - By default, no rate limit is configured for the instance.
   * 
   * - If you do not specify this parameter or set it to 0, the last configuration is retained.
   * 
   * - If you set this parameter to a value less than 0, the rate limit is reset to unlimited.
   * 
   * @example
   * 100
   */
  maxIngressBandwidth?: number;
  /**
   * @remarks
   * The ID of the cloud application service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxEgressBandwidth: 'MaxEgressBandwidth',
      maxIngressBandwidth: 'MaxIngressBandwidth',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxEgressBandwidth: 'number',
      maxIngressBandwidth: 'number',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

