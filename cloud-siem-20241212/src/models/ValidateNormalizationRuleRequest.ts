// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateNormalizationRuleRequest extends $dara.Model {
  /**
   * @example
   * 123456。
   */
  data?: string;
  /**
   * @example
   * zh。
   */
  lang?: string;
  /**
   * @example
   * NETWORK_CATEGORY。
   */
  normalizationCategoryId?: string;
  /**
   * @example
   * HTTP_ACTIVITY。
   */
  normalizationSchemaId?: string;
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
      data: 'Data',
      lang: 'Lang',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationSchemaId: 'NormalizationSchemaId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      lang: 'string',
      normalizationCategoryId: 'string',
      normalizationSchemaId: 'string',
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

