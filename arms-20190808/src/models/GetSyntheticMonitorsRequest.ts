// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSyntheticMonitorsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The type of the monitoring point. Valid values: 1: PC. 2: mobile device.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  monitorCategory?: number;
  /**
   * @remarks
   * The network type. Valid values: 1: private network. 2: Internet.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  network?: number;
  /**
   * @remarks
   * The type of the monitoring task. Valid values:
   * 
   * 1: ICMP. 2: TCP. 3: DNS. 4: HTTP. 5: website speed. 6: file download.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      monitorCategory: 'MonitorCategory',
      network: 'Network',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorCategory: 'number',
      network: 'number',
      taskType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyntheticMonitorsRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions.
   * 
   * This parameter is required.
   */
  filter?: GetSyntheticMonitorsRequestFilter;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: GetSyntheticMonitorsRequestFilter,
      regionId: 'string',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

