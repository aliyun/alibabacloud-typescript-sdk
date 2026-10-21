// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataIngestionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of data ingestion policy IDs.
   */
  dataIngestionIdsShrink?: string;
  /**
   * @remarks
   * The accessed state of data ingestion. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  dataIngestionStatus?: string;
  /**
   * @remarks
   * The list of data ingestion template IDs.
   */
  dataIngestionTemplateIdsShrink?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The list of normalization schema IDs.
   */
  normalizationSchemaIdsShrink?: string;
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
   * The data management center of the threat analysis feature. Specify this parameter based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Your assets reside in the Chinese mainland.
   * - ap-southeast-1: Your assets reside outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member to which the administrator switches the view.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataIngestionIdsShrink: 'DataIngestionIds',
      dataIngestionStatus: 'DataIngestionStatus',
      dataIngestionTemplateIdsShrink: 'DataIngestionTemplateIds',
      lang: 'Lang',
      normalizationSchemaIdsShrink: 'NormalizationSchemaIds',
      productId: 'ProductId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIngestionIdsShrink: 'string',
      dataIngestionStatus: 'string',
      dataIngestionTemplateIdsShrink: 'string',
      lang: 'string',
      normalizationSchemaIdsShrink: 'string',
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

