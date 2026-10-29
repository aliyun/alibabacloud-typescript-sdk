// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRenderingInstanceBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum outbound bandwidth limit, in Mbit/s. You must specify at least one of MaxIngressBandwidth and MaxEgressBandwidth.
   * - The original configuration of the instance does not limit the bandwidth.
   * - If you do not specify this parameter or specify 0, the last configuration is retained by default.
   * - If you specify a value less than 0, the bandwidth limit is reset to unlimited.
   * 
   * @example
   * 100
   */
  maxEgressBandwidth?: number;
  /**
   * @remarks
   * The maximum inbound bandwidth limit, in Mbit/s. You must specify at least one of MaxIngressBandwidth and MaxEgressBandwidth.
   * - The original configuration of the instance does not limit the bandwidth.
   * - If you do not specify this parameter or specify 0, the last configuration is retained by default.
   * - If you specify a value less than 0, the bandwidth limit is reset to unlimited.
   * 
   * @example
   * 100
   */
  maxIngressBandwidth?: number;
  /**
   * @remarks
   * The instance ID of the cloud application service.
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

