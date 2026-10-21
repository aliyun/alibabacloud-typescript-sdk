// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNormalizationSchemaRequestNormalizationFieldsNormalizationFieldJsonKeys extends $dara.Model {
  /**
   * @remarks
   * The key description for a standard field of the JSON type.
   * 
   * @example
   * The alert severity levels are represented by the values 1, 2, 3, and 4.
   */
  normalizationFieldDescription?: string;
  /**
   * @remarks
   * The key example for a standard field of the JSON type.
   * 
   * @example
   * 1, 2, 3, 4
   */
  normalizationFieldExample?: string;
  /**
   * @remarks
   * The key source for a standard field of the JSON type.
   * 
   * @example
   * preset
   */
  normalizationFieldFrom?: string;
  /**
   * @remarks
   * The key name for a standard field of the JSON type.
   * 
   * This parameter is required.
   * 
   * @example
   * alert_level
   */
  normalizationFieldName?: string;
  /**
   * @remarks
   * Specifies whether the key for a standard field of the JSON type is required.
   * 
   * @example
   * true
   */
  normalizationFieldRequired?: boolean;
  /**
   * @remarks
   * Specifies whether the key for a standard field of the JSON type is tokenized.
   * 
   * @example
   * true
   */
  normalizationFieldTokenize?: boolean;
  /**
   * @remarks
   * The key type for a standard field of the JSON type. Valid values: text, long, double, and json.
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
   * The standard field description.
   * 
   * @example
   * cloud_user
   */
  normalizationFieldDescription?: string;
  /**
   * @remarks
   * The standard field example.
   * 
   * @example
   * 173326*******
   */
  normalizationFieldExample?: string;
  /**
   * @remarks
   * The key source for a standard field of the JSON type.
   * 
   * @example
   * preset
   */
  normalizationFieldFrom?: string;
  /**
   * @remarks
   * Specifies whether to create indexes for all keys in a standard field of the JSON type.
   * 
   * @example
   * true
   */
  normalizationFieldJsonIndexAll?: boolean;
  /**
   * @remarks
   * The key list for a standard field of the JSON type.
   */
  normalizationFieldJsonKeys?: CreateNormalizationSchemaRequestNormalizationFieldsNormalizationFieldJsonKeys[];
  /**
   * @remarks
   * The normalization field name.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_user
   */
  normalizationFieldName?: string;
  /**
   * @remarks
   * Specifies whether the standard field is required.
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
   * Specifies whether the standard field is tokenized.
   * 
   * @example
   * true
   */
  normalizationFieldTokenize?: boolean;
  /**
   * @remarks
   * The standard field type. Valid values: text, long, double, and json.
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
   * The language of the response messages. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * Note: This parameter is required in actual API calls. If it is not provided, the service returns a 400 error: "The specified Lang can not be empty." Pass the language code explicitly.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The normalization category ID.
   * 
   * @example
   * NETWORK_CATEGORY
   */
  normalizationCategoryId?: string;
  /**
   * @remarks
   * The field source.
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
   * The normalization schema description.
   * 
   * @example
   * ProcessQuery
   */
  normalizationSchemaDescription?: string;
  /**
   * @remarks
   * The normalization schema ID. When creating a custom schema, the ID must start with custom- and can contain only lowercase letters, digits, and hyphens. Example: custom-my-log-schema.
   * 
   * This parameter is required.
   * 
   * @example
   * PROCESS_QUERY_DNS_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @remarks
   * The normalization schema name.
   * 
   * This parameter is required.
   * 
   * @example
   * ProcessQuery
   */
  normalizationSchemaName?: string;
  /**
   * @remarks
   * The normalization schema type. Valid values:
   * - log: log.
   * - entity: entity.
   * 
   * This parameter is required.
   * 
   * @example
   * log
   */
  normalizationSchemaType?: string;
  /**
   * @remarks
   * The security domain ID.
   * 
   * @example
   * NETWORK_AND_WEB_SECURITY
   */
  normalizationSecurityDomainId?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * sas
   */
  productId?: string;
  /**
   * @remarks
   * The region where the data management center of Cloud Threat Detection and Response (CTDR) is located. Select the management center region based on the region where your assets reside. Valid values:
   * - cn-hangzhou: assets in the Chinese mainland or Hong Kong (China).
   * - ap-southeast-1: assets in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that the administrator uses to switch to the view of another member account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The Simple Log Service LogStore.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx-activity
   */
  targetLogStore?: string;
  /**
   * @remarks
   * The vendor ID.
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

