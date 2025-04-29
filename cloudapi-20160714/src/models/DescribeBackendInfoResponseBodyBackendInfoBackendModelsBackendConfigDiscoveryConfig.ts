// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfigNacosConfig } from "./DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfigNacosConfig";
import { DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfigZookeeperConfig } from "./DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfigZookeeperConfig";


export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfig extends $dara.Model {
  /**
   * @remarks
   * The Nacos configurations.
   */
  nacosConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfigNacosConfig;
  /**
   * @remarks
   * The registry type.
   * 
   * @example
   * NACOS
   */
  rcType?: string;
  /**
   * @remarks
   * The ZooKeeper configuration.
   */
  zookeeperConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfigZookeeperConfig;
  static names(): { [key: string]: string } {
    return {
      nacosConfig: 'NacosConfig',
      rcType: 'RcType',
      zookeeperConfig: 'ZookeeperConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nacosConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfigNacosConfig,
      rcType: 'string',
      zookeeperConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfigZookeeperConfig,
    };
  }

  validate() {
    if(this.nacosConfig && typeof (this.nacosConfig as any).validate === 'function') {
      (this.nacosConfig as any).validate();
    }
    if(this.zookeeperConfig && typeof (this.zookeeperConfig as any).validate === 'function') {
      (this.zookeeperConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

