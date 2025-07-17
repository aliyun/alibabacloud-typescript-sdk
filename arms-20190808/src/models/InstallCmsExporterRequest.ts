// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallCmsExporterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cc7a37ee31aea4ed1a059eff8034b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cloud services that you want to monitor. The CmsArgs parameter is the startup parameter of the cms-exporter collector. Separate multiple cloud services with number signs (`#`).
   * 
   * @example
   * hologres#cen
   */
  cmsArgs?: string;
  /**
   * @remarks
   * The recently monitored cloud services. Separate multiple cloud services with number signs (`#`).
   * 
   * @example
   * hologres#cen
   */
  directArgs?: string;
  /**
   * @remarks
   * Specifies whether to collect the aliyun tags attached to each cloud service. Default value: false.
   * 
   * @example
   * false
   */
  enableTag?: boolean;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      cmsArgs: 'CmsArgs',
      directArgs: 'DirectArgs',
      enableTag: 'EnableTag',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      cmsArgs: 'string',
      directArgs: 'string',
      enableTag: 'boolean',
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

