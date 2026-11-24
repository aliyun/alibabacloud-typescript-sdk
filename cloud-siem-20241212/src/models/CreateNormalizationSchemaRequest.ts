// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNormalizationSchemaRequestNormalizationFieldsNormalizationFieldJsonKeys extends $dara.Model {
  /**
   * @remarks
   * The description of the key for the JSON normalization field.
   * 
   * @example
   * The alert severity levels are represented by the values 1, 2, 3, and 4.
   */
  normalizationFieldDescription?: string;
  /**
   * @remarks
   * The example of the key for the JSON normalization field.
   * 
   * @example
   * 1, 2, 3, 4
   */
  normalizationFieldExample?: string;
  /**
   * @remarks
   * The source of the key for the JSON normalization field.
   * 
   * @example
   * preset
   */
  normalizationFieldFrom?: string;
  /**
   * @remarks
   * The name of the key for the JSON normalization field.
   * 
   * This parameter is required.
   * 
   * @example
   * alert_level
   */
  normalizationFieldName?: string;
  /**
   * @remarks
   * Specifies whether the key for the JSON normalization field is required.
   * 
   * @example
   * true
   */
  normalizationFieldRequired?: boolean;
  /**
   * @remarks
   * Specifies whether the key for the JSON normalization field is tokenized.
   * 
   * @example
   * true
   */
  normalizationFieldTokenize?: boolean;
  /**
   * @remarks
   * The type of the key for the JSON normalization field. Valid values: text, long, double, and json.
   * 
   * This parameter is required.
   * 
   * @example
   * text
   */
  normalizationFieldType?: string;
  static names(): { [key: string]: string } {
    return {
      normalizationFieldDescription: 'NormalizationFieldDescription',
      normalizationFieldExample: 'NormalizationFieldExample',
      normalizationFieldFrom: 'NormalizationFieldFrom',
      normalizationFieldName: 'NormalizationFieldName',
      normalizationFieldRequired: 'NormalizationFieldRequired',
      normalizationFieldTokenize: 'NormalizationFieldTokenize',
      normalizationFieldType: 'NormalizationFieldType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalizationFieldDescription: 'string',
      normalizationFieldExample: 'string',
      normalizationFieldFrom: 'string',
      normalizationFieldName: 'string',
      normalizationFieldRequired: 'boolean',
      normalizationFieldTokenize: 'boolean',
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

export class CreateNormalizationSchemaRequestNormalizationFields extends $dara.Model {
  /**
   * @remarks
   * The description of the normalization field.
   * 
   * @example
   * cloud_user
   */
  normalizationFieldDescription?: string;
  /**
   * @remarks
   * The example of the normalization field.
   * 
   * @example
   * 173326*******
   */
  normalizationFieldExample?: string;
  /**
   * @remarks
   * The source of the key for the JSON normalization field.
   * 
   * @example
   * preset
   */
  normalizationFieldFrom?: string;
  /**
   * @remarks
   * Specifies whether to create indexes for all keys of the JSON normalization field.
   * 
   * @example
   * true
   */
  normalizationFieldJsonIndexAll?: boolean;
  /**
   * @remarks
   * The list of keys for the JSON normalization field.
   */
  normalizationFieldJsonKeys?: CreateNormalizationSchemaRequestNormalizationFieldsNormalizationFieldJsonKeys[];
  /**
   * @remarks
   * The name of the normalization field.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_user
   */
  normalizationFieldName?: string;
  /**
   * @remarks
   * Specifies whether the normalization field is required.
   * 
   * @example
   * true
   */
  normalizationFieldRequired?: boolean;
  /**
   * @remarks
   * Specifies whether the normalization field is required.
   * 
   * @example
   * true
   */
  normalizationFieldRequirement?: boolean;
  /**
   * @remarks
   * Specifies whether the normalization field is reserved.
   * 
   * @example
   * true
   */
  normalizationFieldReserved?: boolean;
  /**
   * @remarks
   * Specifies whether the normalization field is tokenized.
   * 
   * @example
   * true
   */
  normalizationFieldTokenize?: boolean;
  /**
   * @remarks
   * The type of the normalization field. Valid values: text, long, double, and json.
   * 
   * This parameter is required.
   * 
   * @example
   * text
   */
  normalizationFieldType?: string;
  static names(): { [key: string]: string } {
    return {
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalizationFieldDescription: 'string',
      normalizationFieldExample: 'string',
      normalizationFieldFrom: 'string',
      normalizationFieldJsonIndexAll: 'boolean',
      normalizationFieldJsonKeys: { 'type': 'array', 'itemType': CreateNormalizationSchemaRequestNormalizationFieldsNormalizationFieldJsonKeys },
      normalizationFieldName: 'string',
      normalizationFieldRequired: 'boolean',
      normalizationFieldRequirement: 'boolean',
      normalizationFieldReserved: 'boolean',
      normalizationFieldTokenize: 'boolean',
      normalizationFieldType: 'string',
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

export class CreateNormalizationSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * Note: This parameter is required in actual API calls. If it is not provided, the service returns a 400 error "The specified Lang can not be empty.". Explicitly pass the language code.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the normalization category.
   * 
   * @example
   * NETWORK_CATEGORY
   */
  normalizationCategoryId?: string;
  /**
   * @remarks
   * The source of the field.
   * 
   * @example
   * native
   */
  normalizationFieldSource?: string;
  /**
   * @remarks
   * The normalization fields.
   */
  normalizationFields?: CreateNormalizationSchemaRequestNormalizationFields[];
  /**
   * @remarks
   * The description of the normalization schema.
   * 
   * @example
   * ProcessQuery
   */
  normalizationSchemaDescription?: string;
  /**
   * @remarks
   * The ID of the normalization schema. When you create a custom schema, the ID must start with custom- and can contain only lowercase letters, digits, and hyphens. Example: custom-my-log-schema.
   * 
   * This parameter is required.
   * 
   * @example
   * PROCESS_QUERY_DNS_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @remarks
   * The name of the normalization schema.
   * 
   * This parameter is required.
   * 
   * @example
   * ProcessQuery
   */
  normalizationSchemaName?: string;
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
   * The ID of the security domain.
   * 
   * @example
   * NETWORK_AND_WEB_SECURITY
   */
  normalizationSecurityDomainId?: string;
  /**
   * @remarks
   * The ID of the product.
   * 
   * @example
   * sas
   */
  productId?: string;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. You must select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Assets are located in regions outside China.
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
  /**
   * @remarks
   * The Logstore of Simple Log Service.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx-activity
   */
  targetLogStore?: string;
  /**
   * @remarks
   * The ID of the vendor.
   * 
   * @example
   * alibaba
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationFieldSource: 'NormalizationFieldSource',
      normalizationFields: 'NormalizationFields',
      normalizationSchemaDescription: 'NormalizationSchemaDescription',
      normalizationSchemaId: 'NormalizationSchemaId',
      normalizationSchemaName: 'NormalizationSchemaName',
      normalizationSchemaType: 'NormalizationSchemaType',
      normalizationSecurityDomainId: 'NormalizationSecurityDomainId',
      productId: 'ProductId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      targetLogStore: 'TargetLogStore',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      normalizationCategoryId: 'string',
      normalizationFieldSource: 'string',
      normalizationFields: { 'type': 'array', 'itemType': CreateNormalizationSchemaRequestNormalizationFields },
      normalizationSchemaDescription: 'string',
      normalizationSchemaId: 'string',
      normalizationSchemaName: 'string',
      normalizationSchemaType: 'string',
      normalizationSecurityDomainId: 'string',
      productId: 'string',
      regionId: 'string',
      roleFor: 'number',
      targetLogStore: 'string',
      vendorId: 'string',
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

