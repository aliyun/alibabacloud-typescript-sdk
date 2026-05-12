// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RouteItem extends $dara.Model {
  /**
   * @remarks
   * Instance Endpoint Type
   * 
   * This parameter is required.
   * 
   * @example
   * Internet
   * 
   * **if can be null:**
   * false
   */
  endpointType?: string;
  /**
   * @remarks
   * Instance Domain
   * 
   * This parameter is required.
   * 
   * @example
   * test-instance-registry-vpc.cn-hangzhou.cr.aliyuncs.com
   */
  instanceDomain?: string;
  /**
   * @remarks
   * OSS Domain
   * 
   * This parameter is required.
   * 
   * @example
   * https://cri-cfafawer***-registry.oss-cn-hangzhou.aliyuncs.com
   */
  storageDomain?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      instanceDomain: 'InstanceDomain',
      storageDomain: 'StorageDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      instanceDomain: 'string',
      storageDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

