// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContainerGroupRequestAcrRegistryInfo extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role in the Alibaba Cloud account to which the elastic container instance belongs.
   * 
   * @example
   * acs:ram::1609982529******:role/role-assume
   */
  arnService?: string;
  /**
   * @remarks
   * The ARN of the RAM role in the Alibaba Cloud account to which the Container Registry Enterprise Edition instance belongs.
   * 
   * @example
   * acs:ram::1298452580******:role/role-acr
   */
  arnUser?: string;
  /**
   * @remarks
   * The domain names of the Container Registry Enterprise Edition instance. By default, all domain names of the instance are displayed. You can specify multiple domain names. Separate multiple domain names with commas (,).
   * 
   * @example
   * *****-****-registry.cn-beijing.cr.aliyuncs.com
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
   * acr-test
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID of the Container Registry Enterprise Edition instance.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      arnService: 'ArnService',
      arnUser: 'ArnUser',
      domain: 'Domain',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arnService: 'string',
      arnUser: 'string',
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

