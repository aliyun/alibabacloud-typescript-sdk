// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetSummaryResponseBodyAssetsSummary extends $dara.Model {
  /**
   * @remarks
   * The total number of assets across all regions.
   * >Security Center uses independent service centers in the Chinese mainland and outside the Chinese mainland. You can check the endpoint to which you are connected to determine the current service region. For more information about the regions included in each service region, see [What is Security Center?](https://help.aliyun.com/document_detail/42302.html).
   * 
   * @example
   * 2064
   */
  totalAssetAllRegion?: number;
  /**
   * @remarks
   * The total number of cores of assets across all regions.
   * >Security Center uses independent service centers in the Chinese mainland and outside the Chinese mainland. You can check the endpoint to which you are connected to determine the current service region. For more information about the regions included in each service region, see [What is Security Center?](https://help.aliyun.com/document_detail/42302.html).
   * 
   * @example
   * 3200
   */
  totalCoreAllRegion?: number;
  /**
   * @remarks
   * The total number of cores of assets in the current region.
   * 
   * >Security Center uses independent service centers in the Chinese mainland and outside the Chinese mainland. You can check the endpoint to which you are connected to determine the current service region. For more information about the regions included in each service region, see [What is Security Center?](https://help.aliyun.com/document_detail/42302.html).
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
   * The asset statistics information.
   */
  assetsSummary?: DescribeAssetSummaryResponseBodyAssetsSummary;
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request. You can use the ID to troubleshoot issues.
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

