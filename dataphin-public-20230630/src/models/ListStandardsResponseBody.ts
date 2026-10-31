// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeMonitorConfig extends $dara.Model {
  /**
   * @remarks
   * The field to be checked.
   * 
   * @example
   * column1
   */
  columnName?: string;
  /**
   * @remarks
   * Specifies whether the check is case-sensitive.
   */
  isCaseSensitive?: boolean;
  /**
   * @remarks
   * The monitoring method. Valid values: METADATA: metadata monitoring. QUALITY: data quality monitoring.
   * 
   * @example
   * METADATA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      isCaseSensitive: 'IsCaseSensitive',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      isCaseSensitive: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeRefAttributeAttributeFromInfoStandardReference extends $dara.Model {
  /**
   * @remarks
   * The ID of the standard.
   * 
   * @example
   * 22
   */
  standardId?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      standardId: 'StandardId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardId: 'number',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeRefAttributeAttributeFromInfo extends $dara.Model {
  /**
   * @remarks
   * The source of the attribute. Valid values: SYSTEM: system attribute. CUSTOM: custom attribute. STANDARD: standard.
   * 
   * @example
   * CUSTOM
   */
  attributeFrom?: string;
  /**
   * @remarks
   * The corresponding standard. This parameter takes effect when the attribute source is set to STANDARD.
   */
  standardReference?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeRefAttributeAttributeFromInfoStandardReference;
  static names(): { [key: string]: string } {
    return {
      attributeFrom: 'AttributeFrom',
      standardReference: 'StandardReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeFrom: 'string',
      standardReference: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeRefAttributeAttributeFromInfoStandardReference,
    };
  }

  validate() {
    if(this.standardReference && typeof (this.standardReference as any).validate === 'function') {
      (this.standardReference as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeRefAttribute extends $dara.Model {
  /**
   * @remarks
   * The source of the attribute.
   */
  attributeFromInfo?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeRefAttributeAttributeFromInfo;
  /**
   * @remarks
   * The ID of the attribute.
   * 
   * @example
   * 123
   */
  attributeId?: number;
  static names(): { [key: string]: string } {
    return {
      attributeFromInfo: 'AttributeFromInfo',
      attributeId: 'AttributeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeFromInfo: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeRefAttributeAttributeFromInfo,
      attributeId: 'number',
    };
  }

  validate() {
    if(this.attributeFromInfo && typeof (this.attributeFromInfo as any).validate === 'function') {
      (this.attributeFromInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeValueConfigValueRangeLookupTableReference extends $dara.Model {
  /**
   * @remarks
   * The referenced field in the lookup table.
   * 
   * @example
   * col1
   */
  column?: string;
  /**
   * @remarks
   * The ID of the lookup table.
   * 
   * @example
   * 11
   */
  lookupTableId?: number;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      lookupTableId: 'LookupTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      lookupTableId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeValueConfigValueRangeMinMaxValueConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the maximum value.
   */
  includeMaxValue?: boolean;
  /**
   * @remarks
   * Specifies whether to include the minimum value.
   */
  includeMinValue?: boolean;
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 100
   */
  maxValue?: string;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 0
   */
  minValue?: string;
  static names(): { [key: string]: string } {
    return {
      includeMaxValue: 'IncludeMaxValue',
      includeMinValue: 'IncludeMinValue',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeMaxValue: 'boolean',
      includeMinValue: 'boolean',
      maxValue: 'string',
      minValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeValueConfigValueRange extends $dara.Model {
  /**
   * @remarks
   * The value range. This parameter takes effect when the value source is set to DATAPHIN_ATTRIBUTE. Valid values: BIZ_UNIT: data block. PROJECT: project. USER: user. USER_GROUP: user group.
   * 
   * @example
   * DATAPHIN_ATTRIBUTE
   */
  dataphinAttributeType?: string;
  /**
   * @remarks
   * The value range. This parameter takes effect when the value source is set to LOOKUP_TABLE.
   */
  lookupTableReference?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeValueConfigValueRangeLookupTableReference;
  /**
   * @remarks
   * The value range. This parameter takes effect when the value source is set to MIN_MAX.
   */
  minMaxValueConfig?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeValueConfigValueRangeMinMaxValueConfig;
  /**
   * @remarks
   * The value source. Valid values: NONE: no constraint. LIST: obtained from a list. LOOKUP_TABLE: lookup table. MIN_MAX: obtained between the maximum and minimum values. DATAPHIN_ATTRIBUTE: Dataphin system property. BUILT_IN_DATA_TYPES: built-in data type. BUILT_IN_DATA_CLASSIFICATION: built-in data categorization. BUILT_IN_DATA_LEVEL: built-in data security classification.
   * 
   * @example
   * NONE
   */
  valueConstraint?: string;
  /**
   * @remarks
   * The value range. This parameter takes effect when the value source is set to LIST.
   */
  valueList?: string[];
  static names(): { [key: string]: string } {
    return {
      dataphinAttributeType: 'DataphinAttributeType',
      lookupTableReference: 'LookupTableReference',
      minMaxValueConfig: 'MinMaxValueConfig',
      valueConstraint: 'ValueConstraint',
      valueList: 'ValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataphinAttributeType: 'string',
      lookupTableReference: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeValueConfigValueRangeLookupTableReference,
      minMaxValueConfig: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeValueConfigValueRangeMinMaxValueConfig,
      valueConstraint: 'string',
      valueList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.lookupTableReference && typeof (this.lookupTableReference as any).validate === 'function') {
      (this.lookupTableReference as any).validate();
    }
    if(this.minMaxValueConfig && typeof (this.minMaxValueConfig as any).validate === 'function') {
      (this.minMaxValueConfig as any).validate();
    }
    if(Array.isArray(this.valueList)) {
      $dara.Model.validateArray(this.valueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeValueConfig extends $dara.Model {
  /**
   * @remarks
   * The data type of the attribute value. Valid values: STRING: string. BIGINT: numeric type. DOUBLE: floating-point type. DATE: date accurate to day. DATETIME: date accurate to millisecond. BOOLEAN: Boolean type.
   * 
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * test
   */
  defaultValue?: string;
  /**
   * @remarks
   * The length of the attribute value. An empty value or -1 indicates that the length is not limited. Typically, only the string type limits the length of the attribute value.
   * 
   * @example
   * 1
   */
  length?: number;
  /**
   * @remarks
   * The attribute value type. Valid values: CUSTOMIZED: custom input. SINGLE_ENUM: single enum value. MULTIPLE_ENUMS: multiple enum values. RANGE: range value.
   * 
   * @example
   * CUSTOMIZED
   */
  type?: string;
  /**
   * @remarks
   * The value range.
   */
  valueRange?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeValueConfigValueRange;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      defaultValue: 'DefaultValue',
      length: 'Length',
      type: 'Type',
      valueRange: 'ValueRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      defaultValue: 'string',
      length: 'number',
      type: 'string',
      valueRange: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeValueConfigValueRange,
    };
  }

  validate() {
    if(this.valueRange && typeof (this.valueRange as any).validate === 'function') {
      (this.valueRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttribute extends $dara.Model {
  /**
   * @remarks
   * The attribute code.
   * 
   * @example
   * test_attr
   */
  code?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the monitoring configuration.
   */
  enableMonitorConfig?: boolean;
  /**
   * @remarks
   * The ID of the attribute.
   * 
   * @example
   * 1011
   */
  id?: number;
  /**
   * @remarks
   * The monitoring configuration.
   */
  monitorConfig?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeMonitorConfig;
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * attr1
   */
  name?: string;
  /**
   * @remarks
   * The referenced attribute information.
   */
  refAttribute?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeRefAttribute;
  /**
   * @remarks
   * Specifies whether the attribute is required.
   */
  required?: boolean;
  /**
   * @remarks
   * The attribute type. Valid values: BIZ_ATTRIBUTE: business attribute. TECH_ATTRIBUTE: technical attribute. MANAGEMENT_ATTRIBUTE: management attribute. QUALITY_ATTRIBUTE: quality attribute. MASTER_DATA_ATTRIBUTE: master data attribute. LIFECYCLE_ATTRIBUTE: lifecycle attribute. SECURITY_ATTRIBUTE: security attribute.
   * 
   * @example
   * BIZ_ATTRIBUTE
   */
  type?: string;
  /**
   * @remarks
   * The value configuration.
   */
  valueConfig?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeValueConfig;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      enableMonitorConfig: 'EnableMonitorConfig',
      id: 'Id',
      monitorConfig: 'MonitorConfig',
      name: 'Name',
      refAttribute: 'RefAttribute',
      required: 'Required',
      type: 'Type',
      valueConfig: 'ValueConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      enableMonitorConfig: 'boolean',
      id: 'number',
      monitorConfig: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeMonitorConfig,
      name: 'string',
      refAttribute: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeRefAttribute,
      required: 'boolean',
      type: 'string',
      valueConfig: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeValueConfig,
    };
  }

  validate() {
    if(this.monitorConfig && typeof (this.monitorConfig as any).validate === 'function') {
      (this.monitorConfig as any).validate();
    }
    if(this.refAttribute && typeof (this.refAttribute as any).validate === 'function') {
      (this.refAttribute as any).validate();
    }
    if(this.valueConfig && typeof (this.valueConfig as any).validate === 'function') {
      (this.valueConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResultStandardListAttributeWithValueList extends $dara.Model {
  /**
   * @remarks
   * The attribute details.
   */
  attribute?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttribute;
  /**
   * @remarks
   * The attribute value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttribute,
      value: 'string',
    };
  }

  validate() {
    if(this.attribute && typeof (this.attribute as any).validate === 'function') {
      (this.attribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResultStandardListCreator extends $dara.Model {
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 300000913
   */
  id?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * susan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResultStandardListEffectiveTimeConfig extends $dara.Model {
  /**
   * @remarks
   * The end time of the effective period. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-12-30 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the effective period. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The effective period type. Valid values:
   * - FOREVER: Permanent.
   * - TIME_PERIOD: Time period.
   * 
   * @example
   * TIME_PERIOD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResultStandardListLastModifier extends $dara.Model {
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 300000913
   */
  id?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * susan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResultStandardListOwner extends $dara.Model {
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 300000913
   */
  id?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * susan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResultStandardListStandardSet extends $dara.Model {
  /**
   * @remarks
   * The code of the standard set.
   * 
   * @example
   * cc
   */
  code?: string;
  /**
   * @remarks
   * The folder to which the standard set belongs.
   * 
   * @example
   * /dir1
   */
  directory?: string;
  /**
   * @remarks
   * The ID of the standard set.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the standard set.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      directory: 'Directory',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directory: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResultStandardListStandardTemplate extends $dara.Model {
  /**
   * @remarks
   * The code of the standard template.
   * 
   * @example
   * 1121
   */
  code?: string;
  /**
   * @remarks
   * The ID of the standard template.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the standard template.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The source of the standard template. Valid values:
   * - CUSTOM: Custom standard template.
   * - SYSTEM: Built-in standard template.
   * 
   * @example
   * SYSTEM
   */
  templateFrom?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      name: 'Name',
      templateFrom: 'TemplateFrom',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'number',
      name: 'string',
      templateFrom: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResultStandardList extends $dara.Model {
  /**
   * @remarks
   * The attribute value configuration.
   */
  attributeWithValueList?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueList[];
  /**
   * @remarks
   * The code of the standard.
   * 
   * @example
   * zz
   */
  code?: string;
  /**
   * @remarks
   * The creator.
   */
  creator?: ListStandardsResponseBodyPageResultStandardListCreator;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The effective period configuration.
   */
  effectiveTimeConfig?: ListStandardsResponseBodyPageResultStandardListEffectiveTimeConfig;
  /**
   * @remarks
   * The English name of the standard.
   * 
   * @example
   * test
   */
  englishName?: string;
  /**
   * @remarks
   * The standard ID.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The user who last updated the standard.
   */
  lastModifier?: ListStandardsResponseBodyPageResultStandardListLastModifier;
  /**
   * @remarks
   * The last modified time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the standard.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The owner.
   */
  owner?: ListStandardsResponseBodyPageResultStandardListOwner;
  /**
   * @remarks
   * The stage of the standard.
   * 
   * @example
   * dev
   */
  stage?: string;
  /**
   * @remarks
   * The standard set that the current standard depends on.
   */
  standardSet?: ListStandardsResponseBodyPageResultStandardListStandardSet;
  /**
   * @remarks
   * The standard template that the current standard depends on.
   */
  standardTemplate?: ListStandardsResponseBodyPageResultStandardListStandardTemplate;
  /**
   * @remarks
   * The status of the standard.
   * 
   * @example
   * draft
   */
  status?: string;
  /**
   * @remarks
   * The type of the standard.
   * 
   * @example
   * zz
   */
  type?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      attributeWithValueList: 'AttributeWithValueList',
      code: 'Code',
      creator: 'Creator',
      description: 'Description',
      effectiveTimeConfig: 'EffectiveTimeConfig',
      englishName: 'EnglishName',
      id: 'Id',
      lastModifier: 'LastModifier',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      stage: 'Stage',
      standardSet: 'StandardSet',
      standardTemplate: 'StandardTemplate',
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeWithValueList: { 'type': 'array', 'itemType': ListStandardsResponseBodyPageResultStandardListAttributeWithValueList },
      code: 'string',
      creator: ListStandardsResponseBodyPageResultStandardListCreator,
      description: 'string',
      effectiveTimeConfig: ListStandardsResponseBodyPageResultStandardListEffectiveTimeConfig,
      englishName: 'string',
      id: 'number',
      lastModifier: ListStandardsResponseBodyPageResultStandardListLastModifier,
      modifyTime: 'string',
      name: 'string',
      owner: ListStandardsResponseBodyPageResultStandardListOwner,
      stage: 'string',
      standardSet: ListStandardsResponseBodyPageResultStandardListStandardSet,
      standardTemplate: ListStandardsResponseBodyPageResultStandardListStandardTemplate,
      status: 'string',
      type: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attributeWithValueList)) {
      $dara.Model.validateArray(this.attributeWithValueList);
    }
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.effectiveTimeConfig && typeof (this.effectiveTimeConfig as any).validate === 'function') {
      (this.effectiveTimeConfig as any).validate();
    }
    if(this.lastModifier && typeof (this.lastModifier as any).validate === 'function') {
      (this.lastModifier as any).validate();
    }
    if(this.owner && typeof (this.owner as any).validate === 'function') {
      (this.owner as any).validate();
    }
    if(this.standardSet && typeof (this.standardSet as any).validate === 'function') {
      (this.standardSet as any).validate();
    }
    if(this.standardTemplate && typeof (this.standardTemplate as any).validate === 'function') {
      (this.standardTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The standard list.
   */
  standardList?: ListStandardsResponseBodyPageResultStandardList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      standardList: 'StandardList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardList: { 'type': 'array', 'itemType': ListStandardsResponseBodyPageResultStandardList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.standardList)) {
      $dara.Model.validateArray(this.standardList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStandardsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paged query result.
   */
  pageResult?: ListStandardsResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListStandardsResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

