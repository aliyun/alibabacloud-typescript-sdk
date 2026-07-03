// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNormalizationSchemaRequestNormalizationFieldsNormalizationFieldJsonKeys extends $dara.Model {
  /**
   * @remarks
   * The description of the key for a normalization field of the json type.
   * 
   * @example
   * The alert severity levels are represented by the values 1, 2, 3, and 4.
   */
  normalizationFieldDescription?: string;
  /**
   * @remarks
   * An example of the key for a normalization field of the json type.
   * 
   * @example
   * 1, 2, 3, 4
   */
  normalizationFieldExample?: string;
  /**
   * @remarks
   * The source of the key for a normalization field of the json type.
   * 
   * @example
   * preset
   */
  normalizationFieldFrom?: string;
  /**
   * @remarks
   * The name of the key for a normalization field of the json type.
   * 
   * This parameter is required.
   * 
   * @example
   * alert_level
   */
  normalizationFieldName?: string;
  /**
   * @remarks
   * Indicates whether the key for a normalization field of the json type is required.
   * 
   * @example
   * true
   */
  normalizationFieldRequired?: boolean;
  /**
   * @remarks
   * Indicates whether to tokenize the key for a normalization field of the json type.
   * 
   * @example
   * true
   */
  normalizationFieldTokenize?: boolean;
  /**
   * @remarks
   * The type of the key for a normalization field of the json type. Supported types: text, long, double, and json.
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
   * An example of the normalization field.
   * 
   * @example
   * 173326*******
   */
  normalizationFieldExample?: string;
  /**
   * @remarks
   * The source of the key for a normalization field of the json type.
   * 
   * @example
   * preset
   */
  normalizationFieldFrom?: string;
  /**
   * @remarks
   * Indicates whether to create an index for all keys of a json type normalization field.
   * 
   * @example
   * true
   */
  normalizationFieldJsonIndexAll?: boolean;
  /**
   * @remarks
   * The list of keys for a normalization field of the json type.
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
   * Indicates whether the normalization field is required.
   * 
   * @example
   * true
   */
  normalizationFieldRequired?: boolean;
  /**
   * @remarks
   * Indicates whether the normalization field is required.
   * 
   * @example
   * true
   */
  normalizationFieldRequirement?: boolean;
  /**
   * @remarks
   * Indicates whether the normalization field is reserved.
   * 
   * @example
   * true
   */
  normalizationFieldReserved?: boolean;
  /**
   * @remarks
   * Indicates whether to tokenize the normalization field.
   * 
   * @example
   * true
   */
  normalizationFieldTokenize?: boolean;
  /**
   * @remarks
   * The type of the normalization field. Supported types: text, long, double, and json.
   * 
   * This parameter is required.
   * 
   * @example
   * varchar
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
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the normalization classification.
   * 
   * @example
   * NETWORK_CATEGORY
   */
  normalizationCategoryId?: string;
  /**
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
   * The description of the normalization structure.
   * 
   * @example
   * ProcessQuery
   */
  normalizationSchemaDescription?: string;
  /**
   * @remarks
   * The ID of the normalization structure.
   * 
   * This parameter is required.
   * 
   * @example
   * PROCESS_QUERY_DNS_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @remarks
   * The name of the normalization structure.
   * 
   * This parameter is required.
   * 
   * @example
   * ProcessQuery
   */
  normalizationSchemaName?: string;
  /**
   * @remarks
   * The type of the normalization structure. Valid values:
   * 
   * - log: a log
   * 
   * - entity: an entity
   * 
   * This parameter is required.
   * 
   * @example
   * log
   */
  normalizationSchemaType?: string;
  /**
   * @example
   * NETWORK_AND_WEB_SECURITY
   */
  normalizationSecurityDomainId?: string;
  /**
   * @example
   * sas
   */
  productId?: string;
  /**
   * @remarks
   * The region where the Data Management center for threat analysis is located. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: for assets in the Chinese mainland and China (Hong Kong)
   * 
   * - ap-southeast-1: for assets in regions outside China
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. An administrator can use this ID to switch to the member\\"s perspective.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The Simple Log Service Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx-activity
   */
  targetLogStore?: string;
  /**
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

