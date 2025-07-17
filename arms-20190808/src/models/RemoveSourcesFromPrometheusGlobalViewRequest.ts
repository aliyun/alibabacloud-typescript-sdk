// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveSourcesFromPrometheusGlobalViewRequest extends $dara.Model {
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
   * The name of the global aggregation instance.
   * 
   * This parameter is required.
   * 
   * @example
   * zyGlobalView
   */
  groupName?: string;
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
   * The list of custom data sources. You can specify multiple data sources and separate them with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * localPrometheusClusterName,testCumterPrometheusName
   */
  sourceNames?: string;
  static names(): { [key: string]: string } {
    return {
      globalViewClusterId: 'GlobalViewClusterId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      sourceNames: 'SourceNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalViewClusterId: 'string',
      groupName: 'string',
      regionId: 'string',
      sourceNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

