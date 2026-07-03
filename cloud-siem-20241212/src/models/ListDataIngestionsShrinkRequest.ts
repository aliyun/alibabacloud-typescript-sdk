// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataIngestionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * An array of data ingestion policy IDs.
   */
  dataIngestionIdsShrink?: string;
  /**
   * @remarks
   * The data ingestion status. Valid values:
   * 
   * - `enabled`: Enabled.
   * 
   * - `disabled`: Disabled.
   * 
   * @example
   * enabled
   */
  dataIngestionStatus?: string;
  /**
   * @remarks
   * An array of data ingestion template IDs.
   */
  dataIngestionTemplateIdsShrink?: string;
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
   * An array of normalization schema IDs.
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
   * The region where the threat analysis feature is deployed. Select the region that corresponds to the location of your asset. Valid values:
   * 
   * - `cn-hangzhou`: Your asset is in the Chinese mainland.
   * 
   * - `ap-southeast-1`: Your asset is in a region outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. An administrator can use this parameter to query data as the specified member.
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

