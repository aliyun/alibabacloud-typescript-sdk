// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataObjectColumnDetailV2Request extends $dara.Model {
  /**
   * @remarks
   * When performing a paginated query, set the current page number. Default value: **1**.
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
   * Set the unique identifier ID of the data object to be queried.
   * 
   * > You can obtain the identifier ID by calling [DescribeDataObjects](https://help.aliyun.com/document_detail/2399253.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 13456723343
   */
  id?: string;
  /**
   * @remarks
   * The language type for the request and response messages, default is **zh_cn**. Values:
   * - **zh_cn**: Chinese.
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * When performing a paginated query, set the maximum number of data asset instances to display per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID corresponding to the product name of the data object. Values:
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
   * Industry template ID.
   * > You can obtain the industry template identifier ID by calling [DescribeDataObjects](https://help.aliyun.com/document_detail/2399253.html).
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

