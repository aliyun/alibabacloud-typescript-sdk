// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRegionsResponseBodyRegionsRegionRecommendZones } from "./DescribeRegionsResponseBodyRegionsRegionRecommendZones";


export class DescribeRegionsResponseBodyRegionsRegion extends $dara.Model {
  /**
   * @remarks
   * The region name. Valid values:
   * 
   * *   **China (Hangzhou)**
   * *   **China (Shanghai)**
   * *   **China (Beijing)**
   * *   **China (Zhangjiakou)**
   * *   **China (Shenzhen)**
   * *   **China (Guangzhou)**
   * *   **China (Hong Kong)**
   * *   **Singapore**
   * *   **US (Silicon Valley)**
   */
  localName?: string;
  /**
   * @remarks
   * The recommended zones.
   */
  recommendZones?: DescribeRegionsResponseBodyRegionsRegionRecommendZones;
  /**
   * @remarks
   * The endpoint for the region. Valid values:
   * 
   * *   **sae.cn-hangzhou.aliyuncs.com**
   * *   **sae.cn-shanghai.aliyuncs.com**
   * *   **sae.cn-beijing.aliyuncs.com**
   * *   **sae.cn-zhangjiakou.aliyuncs.com**
   * *   **sae.cn-shenzhen.aliyuncs.com**
   * *   **sae.cn-guangzhou.aliyuncs.com**
   * *   **sae.cn-hongkong.aliyuncs.com**
   * *   **sae.ap-southeast-1.aliyuncs.com**
   * *   **sae.us-west-1.aliyuncs.com**
   * 
   * @example
   * sae.cn-shanghai.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The region ID. Valid values:
   * 
   * *   **cn-hangzhou**: the ID of the China (Hangzhou) region
   * *   **cn-shanghai**: the ID of the China (Shanghai) region
   * *   **cn-beijing**: the ID of the China (Beijing) region
   * *   **cn-zhangjiakou**: the ID of the China (Zhangjiakou) region
   * *   **cn-shenzhen**: the ID of the China (Shenzhen) region
   * *   **cn-guangzhou**: the ID of the China (Guangzhou) region
   * *   **cn-hongkong**: the ID of the China (Hong Kong) region
   * *   **ap-southeast-1**: the ID of the Singapore region
   * *   **us-west-1**: the ID of the US (Silicon Valley) region
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      recommendZones: 'RecommendZones',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      recommendZones: DescribeRegionsResponseBodyRegionsRegionRecommendZones,
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.recommendZones && typeof (this.recommendZones as any).validate === 'function') {
      (this.recommendZones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

