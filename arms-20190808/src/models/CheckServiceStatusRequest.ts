// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The service code of an Alibaba Cloud service. The service code of Managed Service for Prometheus is prometheus.
   * 
   * This parameter is required.
   * 
   * @example
   * prometheus
   */
  svcCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      svcCode: 'SvcCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      svcCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

