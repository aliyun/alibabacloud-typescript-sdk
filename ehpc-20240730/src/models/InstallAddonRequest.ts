// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAddonRequest extends $dara.Model {
  /**
   * @remarks
   * The addon name.
   * 
   * This parameter is required.
   * 
   * @example
   * Login
   */
  addonName?: string;
  /**
   * @remarks
   * The addon version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  addonVersion?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The resource configurations of the addon.
   * 
   * This parameter is required.
   * 
   * @example
   * `{"EipResource": {"AutoCreate": true}, "EcsResources": [{"InstanceType": "ecs.c7.xlarge", "ImageId": "centos_7_6_xxx.vhd", "SystemDisk": {"Category": "cloud_essd", "Size": 40, "Level": "PL0"}]}`
   */
  resourcesSpec?: string;
  /**
   * @remarks
   * The service configurations of the addon.
   * 
   * This parameter is required.
   * 
   * @example
   * `[{"ServiceName": "SSH", "ServiceAccessType": null, "ServiceAccessUrl": null, "NetworkACL": [{"IpProtocol": "TCP", "Port": 22, "SourceCidrIp": "0.0.0.0/0"}]}, {"ServiceName": "VNC", "ServiceAccessType": null, "ServiceAccessUrl": null, "NetworkACL": [{"IpProtocol": "TCP", "Port": 12016, "SourceCidrIp": "0.0.0.0/0"}]}]`
   */
  servicesSpec?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'AddonName',
      addonVersion: 'AddonVersion',
      clusterId: 'ClusterId',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      addonVersion: 'string',
      clusterId: 'string',
      resourcesSpec: 'string',
      servicesSpec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

