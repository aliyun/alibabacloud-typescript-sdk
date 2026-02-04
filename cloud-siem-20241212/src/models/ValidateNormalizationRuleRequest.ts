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
   * flat
   */
  extendFieldStoreMode?: string;
  /**
   * @example
   * zh。
   */
  lang?: string;
  /**
   * @example
   * {"aaa":"bbb","xxx":"yyy"}
   */
  logSample?: string;
  /**
   * @example
   * NETWORK_CATEGORY。
   */
  normalizationCategoryId?: string;
  /**
   * @example
   * *
   */
  normalizationRuleExpression?: string;
  /**
   * @example
   * realtime
   */
  normalizationRuleMode?: string;
  /**
   * @example
   * HTTP_ACTIVITY。
   */
  normalizationSchemaId?: string;
  /**
   * @example
   * alibaba_cloud_sas
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
  /**
   * @example
   * alibaba_cloud
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      extendFieldStoreMode: 'ExtendFieldStoreMode',
      lang: 'Lang',
      logSample: 'LogSample',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationRuleExpression: 'NormalizationRuleExpression',
      normalizationRuleMode: 'NormalizationRuleMode',
      normalizationSchemaId: 'NormalizationSchemaId',
      productId: 'ProductId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      extendFieldStoreMode: 'string',
      lang: 'string',
      logSample: 'string',
      normalizationCategoryId: 'string',
      normalizationRuleExpression: 'string',
      normalizationRuleMode: 'string',
      normalizationSchemaId: 'string',
      productId: 'string',
      regionId: 'string',
      roleFor: 'number',
      vendorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

