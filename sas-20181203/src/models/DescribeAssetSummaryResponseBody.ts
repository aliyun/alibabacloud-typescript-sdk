// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetSummaryResponseBodyAssetsSummary extends $dara.Model {
  /**
   * @remarks
   * The total number of protected assets in all regions.
   * 
   * >  Security Center supports the Hangzhou and Singapore service centers, which separately correspond to the China and Outside China data management centers. In the Hangzhou service center, Security Center provides protection capabilities for assets that are deployed in the regions covered by the China data management center. In the Singapore service center, Security Center provides protection capabilities for assets that are deployed in the regions covered by the Outside China data management center. You can determine whether the current region is covered by the China data management center or by the Outside China data management center based on the endpoint of Security Center. For more information about the supported regions for each data management center, see [What is Security Center?](https://help.aliyun.com/document_detail/42302.html)
   * 
   * @example
   * 2064
   */
  totalAssetAllRegion?: number;
  /**
   * @remarks
   * The total number of cores of protected assets in all regions.
   * 
   * >  Security Center supports the Hangzhou and Singapore service centers, which separately correspond to the China and Outside China data management centers. In the Hangzhou service center, Security Center provides protection capabilities for assets that are deployed in the regions covered by the China data management center. In the Singapore service center, Security Center provides protection capabilities for assets that are deployed in the regions covered by the Outside China data management center. You can determine whether the current region is covered by the China data management center or by the Outside China data management center based on the endpoint of Security Center. For more information about the supported regions for each data management center, see [What is Security Center?](https://help.aliyun.com/document_detail/42302.html)
   * 
   * @example
   * 3200
   */
  totalCoreAllRegion?: number;
  /**
   * @remarks
   * The total number of cores of protected assets in the current region.
   * 
   * >  Security Center supports the Hangzhou and Singapore service centers, which separately correspond to the China and Outside China data management centers. In the Hangzhou service center, Security Center provides protection capabilities for assets that are deployed in the regions covered by the China data management center. In the Singapore service center, Security Center provides protection capabilities for assets that are deployed in the regions covered by the Outside China data management center. You can determine whether the current region is covered by the China data management center or by the Outside China data management center based on the endpoint of Security Center. For more information about the supported regions for each data management center, see [What is Security Center?](https://help.aliyun.com/document_detail/42302.html)
   * 
   * @example
   * 1022
   */
  totalCoreNum?: number;
  static names(): { [key: string]: string } {
    return {
      totalAssetAllRegion: 'TotalAssetAllRegion',
      totalCoreAllRegion: 'TotalCoreAllRegion',
      totalCoreNum: 'TotalCoreNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalAssetAllRegion: 'number',
      totalCoreAllRegion: 'number',
      totalCoreNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistical information about the assets.
   */
  assetsSummary?: DescribeAssetSummaryResponseBodyAssetsSummary;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 0FA7F1F4-488D-52CA-9BFC-3E47793B49D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetsSummary: 'AssetsSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsSummary: DescribeAssetSummaryResponseBodyAssetsSummary,
      requestId: 'string',
    };
  }

  validate() {
    if(this.assetsSummary && typeof (this.assetsSummary as any).validate === 'function') {
      (this.assetsSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

