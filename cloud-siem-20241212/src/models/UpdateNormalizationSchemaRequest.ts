// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNormalizationSchemaRequestNormalizationFieldsNormalizationFieldJsonKeys extends $dara.Model {
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

export class UpdateNormalizationSchemaRequestNormalizationFields extends $dara.Model {
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
  normalizationFieldJsonIndexAll?: boolean;
  normalizationFieldJsonKeys?: UpdateNormalizationSchemaRequestNormalizationFieldsNormalizationFieldJsonKeys[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cloud_user
   */
  normalizationFieldName?: string;
  normalizationFieldRequired?: boolean;
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
   * @example
   * zh
   */
  lang?: string;
  normalizationFields?: UpdateNormalizationSchemaRequestNormalizationFields[];
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
   * WAF_ALERT_ACTIVITY
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

