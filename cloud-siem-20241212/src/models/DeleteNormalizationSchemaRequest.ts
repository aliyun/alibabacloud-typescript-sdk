// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNormalizationSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the normalization schema.
   * 
   * This parameter is required.
   * 
   * @example
   * PROCESS_QUERY_DNS_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @remarks
   * The type of the normalization schema. Valid values:
   * - log: Log.
   * - entity: Entity.
   * 
   * This parameter is required.
   * 
   * @example
   * log
   */
  normalizationSchemaType?: string;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. You must select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland.
   * - ap-southeast-1: Assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator switches to.
   * 
   * @example
   * 113091674488****
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

