// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataObjectColumnDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The page number to return. Default value: **1**.
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
   * The unique ID of the data object that you want to query.
   * 
   * > Call the [DescribeDataObjects](https://help.aliyun.com/document_detail/2399253.html) operation to obtain the ID.
   * 
   * @example
   * 318248
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * - **zh_cn**: Chinese
   * 
   * - **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the service to which the data object belongs. Valid values:
   * 
   * - **1**: MaxCompute
   * 
   * - **2**: OSS
   * 
   * - **3**: ADB-MYSQL
   * 
   * - **4**: Tablestore
   * 
   * - **5**: RDS
   * 
   * - **6**: SELF_DB
   * 
   * - **7**: PolarDB-X
   * 
   * - **8**: PolarDB
   * 
   * - **9**: ADB-PG
   * 
   * - **10**: OceanBase
   * 
   * - **11**: MongoDB
   * 
   * - **25**: Redis
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The ID of the industry-specific template.
   * 
   * > Call the [DescribeDataObjects](https://help.aliyun.com/document_detail/2399253.html) operation to obtain the ID of the industry-specific template.
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
      id: 'number',
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

