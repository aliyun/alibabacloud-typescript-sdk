// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataIngestionTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the data ingestion template. Valid values:
   * 
   * - pending
   * 
   * - running
   * 
   * - success
   * 
   * - failed
   * 
   * @example
   * running
   */
  dataIngestionTemplateStatus?: string;
  /**
   * @remarks
   * A list of data source template IDs.
   * 
   * @example
   * alibaba_cloud_sas_account_snapshot_log_173326*******
   */
  dataSourceTemplateIds?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productId?: string;
  /**
   * @remarks
   * The region where the Data Management center of threat analysis is located. You must select a region based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: Your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member whose perspective you want to use. This parameter is available only for administrators.
   * 
   * @example
   * 173326*******
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

