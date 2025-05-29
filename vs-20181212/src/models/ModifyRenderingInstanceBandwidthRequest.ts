// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRenderingInstanceBandwidthRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  maxEgressBandwidth?: number;
  /**
   * @example
   * 100
   */
  maxIngressBandwidth?: number;
  /**
   * @remarks
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

