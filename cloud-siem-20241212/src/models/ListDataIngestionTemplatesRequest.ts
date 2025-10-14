// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataIngestionTemplatesRequest extends $dara.Model {
  /**
   * @example
   * running。
   */
  dataIngestionTemplateStatus?: string;
  /**
   * @example
   * alibaba_cloud_sas_account_snapshot_log_173326*******。
   */
  dataSourceTemplateIds?: string;
  /**
   * @example
   * zh。
   */
  lang?: string;
  /**
   * @example
   * 1。
   */
  pageNumber?: string;
  /**
   * @example
   * 10。
   */
  pageSize?: string;
  /**
   * @example
   * alibaba_cloud_sas。
   */
  productId?: string;
  /**
   * @example
   * cn-hangzhou。
   */
  regionId?: string;
  /**
   * @example
   * 173326*******。
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataIngestionTemplateStatus: 'DataIngestionTemplateStatus',
      dataSourceTemplateIds: 'DataSourceTemplateIds',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productId: 'ProductId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIngestionTemplateStatus: 'string',
      dataSourceTemplateIds: 'string',
      lang: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      productId: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

