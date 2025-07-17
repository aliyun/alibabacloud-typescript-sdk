// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCommercialStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID. Default value: cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ARMS sub-service. Valid values:
   * 
   * *   apm: Application Monitoring
   * *   rum: RUM
   * *   prometheus: Managed Service for Prometheus
   * *   xtrace: Managed Service for OpenTelemetry
   * 
   * This parameter is required.
   * 
   * @example
   * apm
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

