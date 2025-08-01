// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrometheusGlobalViewRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the global aggregation instance.
   * 
   * This parameter is required.
   * 
   * @example
   * global-v2-cn-1478326682034601-vss8pd0i
   */
  globalViewClusterId?: string;
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
  static names(): { [key: string]: string } {
    return {
      globalViewClusterId: 'GlobalViewClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalViewClusterId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

