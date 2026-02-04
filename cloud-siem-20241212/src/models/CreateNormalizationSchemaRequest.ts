// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNormalizationSchemaRequestNormalizationFieldsNormalizationFieldJsonKeys extends $dara.Model {
  normalizationFieldDescription?: string;
  normalizationFieldExample?: string;
  /**
   * @example
   * preset
   */
  normalizationFieldFrom?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alert_name
   */
  normalizationFieldName?: string;
  /**
   * @example
   * true
   */
  normalizationFieldRequired?: boolean;
  /**
   * @example
   * true
   */
  normalizationFieldTokenize?: boolean;
  /**
   * @remarks
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
   * @example
   * cloud_user
   */
  normalizationFieldDescription?: string;
  /**
   * @example
   * 173326*******
   */
  normalizationFieldExample?: string;
  /**
   * @example
   * preset
   */
  normalizationFieldFrom?: string;
  /**
   * @example
   * true
   */
  normalizationFieldJsonIndexAll?: boolean;
  normalizationFieldJsonKeys?: CreateNormalizationSchemaRequestNormalizationFieldsNormalizationFieldJsonKeys[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cloud_user
   */
  normalizationFieldName?: string;
  /**
   * @example
   * true
   */
  normalizationFieldRequired?: boolean;
  /**
   * @example
   * true
   */
  normalizationFieldRequirement?: boolean;
  /**
   * @example
   * true
   */
  normalizationFieldReserved?: boolean;
  /**
   * @example
   * true
   */
  normalizationFieldTokenize?: boolean;
  /**
   * @remarks
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
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NETWORK_CATEGORY
   */
  normalizationCategoryId?: string;
  normalizationFields?: CreateNormalizationSchemaRequestNormalizationFields[];
  /**
   * @example
   * ProcessQuery
   */
  normalizationSchemaDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROCESS_QUERY_DNS_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ProcessQuery
   */
  normalizationSchemaName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * log
   */
  normalizationSchemaType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx-activity
   */
  targetLogStore?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      normalizationCategoryId: 'NormalizationCategoryId',
      normalizationFields: 'NormalizationFields',
      normalizationSchemaDescription: 'NormalizationSchemaDescription',
      normalizationSchemaId: 'NormalizationSchemaId',
      normalizationSchemaName: 'NormalizationSchemaName',
      normalizationSchemaType: 'NormalizationSchemaType',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      targetLogStore: 'TargetLogStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      normalizationCategoryId: 'string',
      normalizationFields: { 'type': 'array', 'itemType': CreateNormalizationSchemaRequestNormalizationFields },
      normalizationSchemaDescription: 'string',
      normalizationSchemaId: 'string',
      normalizationSchemaName: 'string',
      normalizationSchemaType: 'string',
      regionId: 'string',
      roleFor: 'number',
      targetLogStore: 'string',
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

