// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCmsInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * n9p9o9o3se
   */
  clusterId?: string;
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
   * The type of integrated cloud service. Valid values:
   * 
   * - `direct`: An integration for cloud products that are monitored by the product itself.
   * 
   * - `cms`: An integration with CloudMonitor.
   * 
   * @example
   * direct
   */
  typeFilter?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      typeFilter: 'TypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      typeFilter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

