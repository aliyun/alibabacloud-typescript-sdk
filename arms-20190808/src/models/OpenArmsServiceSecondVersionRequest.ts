// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenArmsServiceSecondVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   `arms`: ARMS
   * *   `arms_app`: Application Monitoring
   * *   `arms_web`: Browser Monitoring
   * *   `prometheus_monitor`: Managed Service for Prometheus
   * *   `synthetic_post`: Synthetic Monitoring
   * 
   * This parameter is required.
   * 
   * @example
   * arms
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

