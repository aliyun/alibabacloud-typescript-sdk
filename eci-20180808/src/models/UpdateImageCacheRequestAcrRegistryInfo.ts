// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageCacheRequestAcrRegistryInfo extends $dara.Model {
  /**
   * @remarks
   * The domain names of the Container Registry Enterprise Edition instance. By default, all domain names of the instance are displayed. You can specify multiple domain names. Separate multiple domain names with commas (,).
   * 
   * @example
   * test****-registry.cn-hangzhou.cr.aliyuncs.com
   */
  domain?: string[];
  /**
   * @remarks
   * The ID of the Container Registry Enterprise Edition instance.
   * 
   * @example
   * cri-nwj395hgf6f3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the Container Registry Enterprise Edition instance.
   * 
   * @example
   * test****
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID of the Container Registry Enterprise Edition instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domain)) {
      $dara.Model.validateArray(this.domain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

