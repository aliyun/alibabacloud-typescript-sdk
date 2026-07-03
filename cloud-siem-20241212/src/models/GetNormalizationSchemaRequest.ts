// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNormalizationSchemaRequest extends $dara.Model {
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
   * The ID of the normalization rule category.
   * 
   * @example
   * HTTP_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @remarks
   * The normalization schema type. Valid values:
   * - log: log.
   * - entity: entity.
   * 
   * @example
   * log
   */
  normalizationSchemaType?: string;
  /**
   * @remarks
   * The region where the threat analysis data management center resides. Specify the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: Your assets reside in the Chinese mainland.
   * - ap-southeast-1: Your assets reside outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that the administrator switches to when viewing as another member.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      normalizationSchemaId: 'NormalizationSchemaId',
      normalizationSchemaType: 'NormalizationSchemaType',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      normalizationSchemaId: 'string',
      normalizationSchemaType: 'string',
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

