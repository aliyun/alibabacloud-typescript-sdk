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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

