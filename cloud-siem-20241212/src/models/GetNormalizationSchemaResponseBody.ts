// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationFields extends $dara.Model {
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
   * cloud_user。
   */
  normalizationFieldName?: string;
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
  /**
   * @example
   * varchar。
   */
  normalizationFieldType?: string;
  static names(): { [key: string]: string } {
    return {
      normalizationFieldDescription: 'NormalizationFieldDescription',
      normalizationFieldExample: 'NormalizationFieldExample',
      normalizationFieldName: 'NormalizationFieldName',
      normalizationFieldRequirement: 'NormalizationFieldRequirement',
      normalizationFieldReserved: 'NormalizationFieldReserved',
      normalizationFieldType: 'NormalizationFieldType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalizationFieldDescription: 'string',
      normalizationFieldExample: 'string',
      normalizationFieldName: 'string',
      normalizationFieldRequirement: 'boolean',
      normalizationFieldReserved: 'boolean',
      normalizationFieldType: 'string',
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
  createTime?: number;
  /**
   * @example
   * NETWORK_CATEGORY。
   */
  normalizationCategoryId?: string;
  normalizationFields?: GetNormalizationSchemaResponseBodyNormalizationSchemaNormalizationFields[];
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
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationFields: 'NormalizationFields',
      normalizationSchemaId: 'NormalizationSchemaId',
      normalizationSchemaName: 'NormalizationSchemaName',
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
      normalizationSchemaId: 'string',
      normalizationSchemaName: 'string',
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

