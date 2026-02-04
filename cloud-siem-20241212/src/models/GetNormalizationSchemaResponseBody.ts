// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationFieldsNormalizationFieldJsonKeys extends $dara.Model {
  /**
   * @example
   * 1736386610000
   */
  createTime?: number;
  /**
   * @example
   * 云code，枚举值：\n<br>● alibaba_cloud\n<br>● huawei_cloud\n<br>● tencent_cloud
   */
  normalizationFieldDescription?: string;
  /**
   * @example
   * alibaba_cloud
   */
  normalizationFieldExample?: string;
  /**
   * @example
   * preset
   */
  normalizationFieldFrom?: string;
  /**
   * @example
   * cloud_code
   */
  normalizationFieldName?: string;
  normalizationFieldRequired?: boolean;
  normalizationFieldReserved?: boolean;
  normalizationFieldTokenize?: boolean;
  /**
   * @example
   * varchar
   */
  normalizationFieldType?: string;
  /**
   * @example
   * 1736386610000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      normalizationFieldDescription: 'NormalizationFieldDescription',
      normalizationFieldExample: 'NormalizationFieldExample',
      normalizationFieldFrom: 'NormalizationFieldFrom',
      normalizationFieldName: 'NormalizationFieldName',
      normalizationFieldRequired: 'NormalizationFieldRequired',
      normalizationFieldReserved: 'NormalizationFieldReserved',
      normalizationFieldTokenize: 'NormalizationFieldTokenize',
      normalizationFieldType: 'NormalizationFieldType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      normalizationFieldDescription: 'string',
      normalizationFieldExample: 'string',
      normalizationFieldFrom: 'string',
      normalizationFieldName: 'string',
      normalizationFieldRequired: 'boolean',
      normalizationFieldReserved: 'boolean',
      normalizationFieldTokenize: 'boolean',
      normalizationFieldType: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationFields extends $dara.Model {
  /**
   * @example
   * 1736386610000
   */
  createTime?: number;
  /**
   * @example
   * cloud_user。
   */
  normalizationFieldDescription?: string;
  /**
   * @example
   * 173326*******。
   */
  normalizationFieldExample?: string;
  /**
   * @example
   * preset
   */
  normalizationFieldFrom?: string;
  normalizationFieldJsonIndexAll?: boolean;
  normalizationFieldJsonKeys?: GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationFieldsNormalizationFieldJsonKeys[];
  /**
   * @example
   * cloud_user。
   */
  normalizationFieldName?: string;
  normalizationFieldRequired?: boolean;
  /**
   * @example
   * true。
   */
  normalizationFieldRequirement?: boolean;
  /**
   * @example
   * true。
   */
  normalizationFieldReserved?: boolean;
  normalizationFieldTokenize?: boolean;
  /**
   * @example
   * varchar。
   */
  normalizationFieldType?: string;
  /**
   * @example
   * 1736386610000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      normalizationFieldDescription: 'NormalizationFieldDescription',
      normalizationFieldExample: 'NormalizationFieldExample',
      normalizationFieldFrom: 'NormalizationFieldFrom',
      normalizationFieldJsonIndexAll: 'NormalizationFieldJsonIndexAll',
      normalizationFieldJsonKeys: 'NormalizationFieldJsonKeys',
      normalizationFieldName: 'NormalizationFieldName',
      normalizationFieldRequired: 'NormalizationFieldRequired',
      normalizationFieldRequirement: 'NormalizationFieldRequirement',
      normalizationFieldReserved: 'NormalizationFieldReserved',
      normalizationFieldTokenize: 'NormalizationFieldTokenize',
      normalizationFieldType: 'NormalizationFieldType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      normalizationFieldDescription: 'string',
      normalizationFieldExample: 'string',
      normalizationFieldFrom: 'string',
      normalizationFieldJsonIndexAll: 'boolean',
      normalizationFieldJsonKeys: { 'type': 'array', 'itemType': GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationFieldsNormalizationFieldJsonKeys },
      normalizationFieldName: 'string',
      normalizationFieldRequired: 'boolean',
      normalizationFieldRequirement: 'boolean',
      normalizationFieldReserved: 'boolean',
      normalizationFieldTokenize: 'boolean',
      normalizationFieldType: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.normalizationFieldJsonKeys)) {
      $dara.Model.validateArray(this.normalizationFieldJsonKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationSchemaReferences extends $dara.Model {
  /**
   * @example
   * alibaba_cloud_cfw_flow_rule
   */
  normalizationRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      normalizationRuleId: 'NormalizationRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalizationRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNormalizationSchemaResponseBodyNormalizationSchema extends $dara.Model {
  /**
   * @example
   * 1733269771123
   */
  createTime?: number;
  /**
   * @example
   * NETWORK_CATEGORY。
   */
  normalizationCategoryId?: string;
  normalizationFields?: GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationFields[];
  /**
   * @example
   * 网络五元组日志
   */
  normalizationSchemaDescription?: string;
  /**
   * @example
   * preset
   */
  normalizationSchemaFrom?: string;
  /**
   * @example
   * HTTP_ACTIVITY。
   */
  normalizationSchemaId?: string;
  /**
   * @example
   * normalization_rule_Z57np。
   */
  normalizationSchemaName?: string;
  normalizationSchemaReferences?: GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationSchemaReferences[];
  /**
   * @example
   * preset
   */
  normalizationSchemaType?: string;
  /**
   * @example
   * network-activity。
   */
  targetLogStore?: string;
  /**
   * @example
   * network_activity。
   */
  targetStoreView?: string;
  /**
   * @example
   * 1733269771123
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationFields: 'NormalizationFields',
      normalizationSchemaDescription: 'NormalizationSchemaDescription',
      normalizationSchemaFrom: 'NormalizationSchemaFrom',
      normalizationSchemaId: 'NormalizationSchemaId',
      normalizationSchemaName: 'NormalizationSchemaName',
      normalizationSchemaReferences: 'NormalizationSchemaReferences',
      normalizationSchemaType: 'NormalizationSchemaType',
      targetLogStore: 'TargetLogStore',
      targetStoreView: 'TargetStoreView',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      normalizationCategoryId: 'string',
      normalizationFields: { 'type': 'array', 'itemType': GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationFields },
      normalizationSchemaDescription: 'string',
      normalizationSchemaFrom: 'string',
      normalizationSchemaId: 'string',
      normalizationSchemaName: 'string',
      normalizationSchemaReferences: { 'type': 'array', 'itemType': GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationSchemaReferences },
      normalizationSchemaType: 'string',
      targetLogStore: 'string',
      targetStoreView: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.normalizationFields)) {
      $dara.Model.validateArray(this.normalizationFields);
    }
    if(Array.isArray(this.normalizationSchemaReferences)) {
      $dara.Model.validateArray(this.normalizationSchemaReferences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNormalizationSchemaResponseBody extends $dara.Model {
  normalizationSchema?: GetNormalizationSchemaResponseBodyNormalizationSchema;
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****。
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      normalizationSchema: 'NormalizationSchema',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalizationSchema: GetNormalizationSchemaResponseBodyNormalizationSchema,
      requestId: 'string',
    };
  }

  validate() {
    if(this.normalizationSchema && typeof (this.normalizationSchema as any).validate === 'function') {
      (this.normalizationSchema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

