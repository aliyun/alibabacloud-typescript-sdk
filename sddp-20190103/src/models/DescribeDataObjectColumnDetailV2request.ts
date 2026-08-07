// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataObjectColumnDetailV2Request extends $dara.Model {
  /**
   * @remarks
   * Settings for paging query. The page number of the current page. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The unique ID of the data object to query.
   * 
   * > You can call [DescribeDataObjects](https://help.aliyun.com/document_detail/2399253.html) to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 13456723343
   */
  id?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * - **zh_cn**: Chinese.
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * Settings for paging query. The maximum number of data asset instances to display on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the product to which the data object belongs. Valid values:
   * - **1**: MaxCompute
   * - **2**: OSS
   * - **3**: ADB-MYSQL
   * - **4**: TableStore
   * - **5**: RDS
   * - **6**: SELF_DB
   * - **7**: PolarDB-X
   * - **8**: PolarDB
   * - **9**: ADB-PG
   * - **10**: OceanBase
   * - **11**: MongoDB
   * - **25**: Redis
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The industry template ID.
   * > You can call [DescribeDataObjects](https://help.aliyun.com/document_detail/2399253.html) to obtain the industry template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      featureType: 'FeatureType',
      id: 'Id',
      lang: 'Lang',
      pageSize: 'PageSize',
      productId: 'ProductId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      featureType: 'number',
      id: 'string',
      lang: 'string',
      pageSize: 'number',
      productId: 'number',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

