// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNormalizationSchemaRequestNormalizationFieldsNormalizationFieldJsonKeys extends $dara.Model {
  /**
   * @remarks
   * The key description of the JSON-type normalization field.
   * 
   * @example
   * alert level
   */
  normalizationFieldDescription?: string;
  /**
   * @remarks
   * The key example of the JSON-type normalization field.
   * 
   * @example
   * Enum values: 1, 2, 3, 4, 5
   */
  normalizationFieldExample?: string;
  /**
   * @remarks
   * The key source of the JSON-type normalization field.
   * 
   * @example
   * preset
   */
  normalizationFieldFrom?: string;
  /**
   * @remarks
   * The key name of the JSON-type normalization field.
   * 
   * This parameter is required.
   * 
   * @example
   * alert_name
   */
  normalizationFieldName?: string;
  /**
   * @remarks
   * Specifies whether the key of the JSON-type normalization field is required.
   */
  normalizationFieldRequired?: boolean;
  /**
   * @remarks
   * Specifies whether the key of the JSON-type normalization field is tokenized.
   * 
   * @example
   * true
   */
  normalizationFieldTokenize?: boolean;
  /**
   * @remarks
   * The key type of the JSON-type normalization field. Valid values: text, long, double, and json.
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

export class UpdateNormalizationSchemaRequestNormalizationFields extends $dara.Model {
  /**
   * @remarks
   * The normalization field description.
   * 
   * @example
   * cloud_user
   */
  normalizationFieldDescription?: string;
  /**
   * @remarks
   * The normalization field example.
   * 
   * @example
   * 173326*******
   */
  normalizationFieldExample?: string;
  /**
   * @remarks
   * The key source of the JSON-type normalization field.
   * 
   * @example
   * preset
   */
  normalizationFieldFrom?: string;
  /**
   * @remarks
   * Specifies whether indexes are created for all keys of the JSON-type normalization field.
   */
  normalizationFieldJsonIndexAll?: boolean;
  /**
   * @remarks
   * The key list of the JSON-type normalization field.
   */
  normalizationFieldJsonKeys?: UpdateNormalizationSchemaRequestNormalizationFieldsNormalizationFieldJsonKeys[];
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
   * Specifies whether the normalization field is required.
   */
  normalizationFieldRequired?: boolean;
  /**
   * @remarks
   * Specifies whether the normalization field is tokenized.
   */
  normalizationFieldTokenize?: boolean;
  /**
   * @remarks
   * The normalization field type. Valid values: text, long, double, and json.
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
      normalizationFieldJsonKeys: { 'type': 'array', 'itemType': UpdateNormalizationSchemaRequestNormalizationFieldsNormalizationFieldJsonKeys },
      normalizationFieldName: 'string',
      normalizationFieldRequired: 'boolean',
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

export class UpdateNormalizationSchemaRequest extends $dara.Model {
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
   * The normalization fields.
   */
  normalizationFields?: UpdateNormalizationSchemaRequestNormalizationFields[];
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
   * The normalization schema ID.
   * 
   * This parameter is required.
   * 
   * @example
   * WAF_ALERT_ACTIVITY
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
   * The region where the threat analysis data management center resides. Specify the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: Your assets reside in the Chinese mainland.
   * - ap-southeast-1: Your assets reside outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member to which the administrator switches the view.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      normalizationFields: 'NormalizationFields',
      normalizationSchemaDescription: 'NormalizationSchemaDescription',
      normalizationSchemaId: 'NormalizationSchemaId',
      normalizationSchemaName: 'NormalizationSchemaName',
      normalizationSchemaType: 'NormalizationSchemaType',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      normalizationFields: { 'type': 'array', 'itemType': UpdateNormalizationSchemaRequestNormalizationFields },
      normalizationSchemaDescription: 'string',
      normalizationSchemaId: 'string',
      normalizationSchemaName: 'string',
      normalizationSchemaType: 'string',
      regionId: 'string',
      roleFor: 'number',
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

