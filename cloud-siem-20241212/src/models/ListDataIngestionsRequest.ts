// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataIngestionsRequest extends $dara.Model {
  dataIngestionIds?: string[];
  /**
   * @example
   * enabled。
   */
  dataIngestionStatus?: string;
  dataIngestionTemplateIds?: string[];
  /**
   * @example
   * zh。
   */
  lang?: string;
  normalizationSchemaIds?: string[];
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
      dataIngestionIds: 'DataIngestionIds',
      dataIngestionStatus: 'DataIngestionStatus',
      dataIngestionTemplateIds: 'DataIngestionTemplateIds',
      lang: 'Lang',
      normalizationSchemaIds: 'NormalizationSchemaIds',
      productId: 'ProductId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIngestionIds: { 'type': 'array', 'itemType': 'string' },
      dataIngestionStatus: 'string',
      dataIngestionTemplateIds: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      normalizationSchemaIds: { 'type': 'array', 'itemType': 'string' },
      productId: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataIngestionIds)) {
      $dara.Model.validateArray(this.dataIngestionIds);
    }
    if(Array.isArray(this.dataIngestionTemplateIds)) {
      $dara.Model.validateArray(this.dataIngestionTemplateIds);
    }
    if(Array.isArray(this.normalizationSchemaIds)) {
      $dara.Model.validateArray(this.normalizationSchemaIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

