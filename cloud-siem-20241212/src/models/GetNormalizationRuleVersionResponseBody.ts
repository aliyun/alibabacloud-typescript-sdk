// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNormalizationRuleVersionResponseBodyNormalizationRuleVersion extends $dara.Model {
  createTime?: number;
  normalizationCategoryId?: string;
  normalizationRuleDescription?: string;
  normalizationRuleExpression?: string;
  normalizationRuleFormat?: string;
  normalizationRuleId?: string;
  normalizationRuleName?: string;
  normalizationRuleStatus?: string;
  normalizationRuleType?: string;
  normalizationRuleVersion?: number;
  normalizationRuleVersionName?: string;
  normalizationSchemaId?: string;
  productId?: string;
  regionId?: string;
  updateTime?: number;
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationRuleDescription: 'NormalizationRuleDescription',
      normalizationRuleExpression: 'NormalizationRuleExpression',
      normalizationRuleFormat: 'NormalizationRuleFormat',
      normalizationRuleId: 'NormalizationRuleId',
      normalizationRuleName: 'NormalizationRuleName',
      normalizationRuleStatus: 'NormalizationRuleStatus',
      normalizationRuleType: 'NormalizationRuleType',
      normalizationRuleVersion: 'NormalizationRuleVersion',
      normalizationRuleVersionName: 'NormalizationRuleVersionName',
      normalizationSchemaId: 'NormalizationSchemaId',
      productId: 'ProductId',
      regionId: 'RegionId',
      updateTime: 'UpdateTime',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      normalizationCategoryId: 'string',
      normalizationRuleDescription: 'string',
      normalizationRuleExpression: 'string',
      normalizationRuleFormat: 'string',
      normalizationRuleId: 'string',
      normalizationRuleName: 'string',
      normalizationRuleStatus: 'string',
      normalizationRuleType: 'string',
      normalizationRuleVersion: 'number',
      normalizationRuleVersionName: 'string',
      normalizationSchemaId: 'string',
      productId: 'string',
      regionId: 'string',
      updateTime: 'number',
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

export class GetNormalizationRuleVersionResponseBody extends $dara.Model {
  normalizationRuleVersion?: GetNormalizationRuleVersionResponseBodyNormalizationRuleVersion;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      normalizationRuleVersion: 'NormalizationRuleVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalizationRuleVersion: GetNormalizationRuleVersionResponseBodyNormalizationRuleVersion,
      requestId: 'string',
    };
  }

  validate() {
    if(this.normalizationRuleVersion && typeof (this.normalizationRuleVersion as any).validate === 'function') {
      (this.normalizationRuleVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

