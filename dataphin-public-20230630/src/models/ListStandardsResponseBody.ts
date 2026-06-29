// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeMonitorConfig extends $dara.Model {
  /**
   * @remarks
   * Column to check.
   * 
   * @example
   * column1
   */
  columnName?: string;
  /**
   * @remarks
   * Whether case-sensitive.
   */
  isCaseSensitive?: boolean;
  /**
   * @remarks
   * Monitor type: METADATA for metadata monitoring, QUALITY for data quality monitoring.
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
   * Standard ID.
   * 
   * @example
   * 22
   */
  standardId?: number;
  /**
   * @remarks
   * Version number.
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
   * Attribute source: SYSTEM for system attribute, CUSTOM for custom attribute, STANDARD for standard.
   * 
   * @example
   * CUSTOM
   */
  attributeFrom?: string;
  /**
   * @remarks
   * Corresponding standard, effective when attribute source is STANDARD.
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
   * Attribute source.
   */
  attributeFromInfo?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeRefAttributeAttributeFromInfo;
  /**
   * @remarks
   * Attribute ID.
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
   * Referenced lookup table column.
   * 
   * @example
   * col1
   */
  column?: string;
  /**
   * @remarks
   * Lookup table ID.
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
   * Whether to include the maximum value.
   */
  includeMaxValue?: boolean;
  /**
   * @remarks
   * Whether to include the minimum value.
   */
  includeMinValue?: boolean;
  /**
   * @remarks
   * Maximum value.
   * 
   * @example
   * 100
   */
  maxValue?: string;
  /**
   * @remarks
   * Minimum value.
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
   * Value range, effective when value constraint is DATAPHIN_ATTRIBUTE: BIZ_UNIT for data business unit, PROJECT for project, USER for user, USER_GROUP for user group.
   * 
   * @example
   * DATAPHIN_ATTRIBUTE
   */
  dataphinAttributeType?: string;
  /**
   * @remarks
   * Value range, effective when value constraint is LOOKUP_TABLE.
   */
  lookupTableReference?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeValueConfigValueRangeLookupTableReference;
  /**
   * @remarks
   * Value range, effective when value constraint is MIN_MAX.
   */
  minMaxValueConfig?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeValueConfigValueRangeMinMaxValueConfig;
  /**
   * @remarks
   * Value constraint: NONE for no constraint, LIST for obtaining from a list, LOOKUP_TABLE for lookup table, MIN_MAX for values between minimum and maximum, DATAPHIN_ATTRIBUTE for Dataphin system attribute, BUILT_IN_DATA_TYPES for built-in data types, BUILT_IN_DATA_CLASSIFICATION for built-in data classification, BUILT_IN_DATA_LEVEL for built-in data security level.
   * 
   * @example
   * NONE
   */
  valueConstraint?: string;
  /**
   * @remarks
   * Value range, effective when value constraint is LIST.
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
   * Data type of the attribute value: STRING for string, BIGINT for numeric type, DOUBLE for floating-point type, DATE for date accurate to day, DATETIME for date accurate to milliseconds, BOOLEAN for boolean.
   * 
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @remarks
   * Default value.
   * 
   * @example
   * test
   */
  defaultValue?: string;
  /**
   * @remarks
   * Attribute value length. If empty or -1, the length is not limited. Typically, only string types limit the attribute value length.
   * 
   * @example
   * 1
   */
  length?: number;
  /**
   * @remarks
   * Attribute value type: CUSTOMIZED for custom input, SINGLE_ENUM for single enumeration value, MULTIPLE_ENUMS for multiple enumeration values, RANGE for range value.
   * 
   * @example
   * CUSTOMIZED
   */
  type?: string;
  /**
   * @remarks
   * Value range.
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
   * Attribute code.
   * 
   * @example
   * test_attr
   */
  code?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Whether to enable monitor configuration.
   */
  enableMonitorConfig?: boolean;
  /**
   * @remarks
   * Attribute ID.
   * 
   * @example
   * 1011
   */
  id?: number;
  /**
   * @remarks
   * Monitor configuration.
   */
  monitorConfig?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeMonitorConfig;
  /**
   * @remarks
   * Attribute name.
   * 
   * @example
   * attr1
   */
  name?: string;
  /**
   * @remarks
   * Referenced attribute information.
   */
  refAttribute?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeRefAttribute;
  /**
   * @remarks
   * Whether it is required.
   */
  required?: boolean;
  /**
   * @remarks
   * Attribute type: BIZ_ATTRIBUTE for business attribute, TECH_ATTRIBUTE for technical attribute, MANAGEMENT_ATTRIBUTE for management attribute, QUALITY_ATTRIBUTE for quality attribute, MASTER_DATA_ATTRIBUTE for master data attribute, LIFECYCLE_ATTRIBUTE for lifecycle attribute, SECURITY_ATTRIBUTE for security attribute.
   * 
   * @example
   * BIZ_ATTRIBUTE
   */
  type?: string;
  /**
   * @remarks
   * Value configuration.
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
   * Attribute details.
   */
  attribute?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttribute;
  /**
   * @remarks
   * Attribute value.
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
   * User ID.
   * 
   * @example
   * 300000913
   */
  id?: string;
  /**
   * @remarks
   * User name.
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
   * End time of the effective period.
   * 
   * @example
   * 2025-12-30 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * Start time of the effective period.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * Effective time type: FOREVER for permanent, TIME_PERIOD for a time period.
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
   * User ID.
   * 
   * @example
   * 300000913
   */
  id?: string;
  /**
   * @remarks
   * User name.
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
   * User ID.
   * 
   * @example
   * 300000913
   */
  id?: string;
  /**
   * @remarks
   * User name.
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
   * Standard set code.
   * 
   * @example
   * cc
   */
  code?: string;
  /**
   * @remarks
   * Directory of the standard set.
   * 
   * @example
   * /dir1
   */
  directory?: string;
  /**
   * @remarks
   * Standard set ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Standard set name.
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
   * Standard template code.
   * 
   * @example
   * 1121
   */
  code?: string;
  /**
   * @remarks
   * Standard template ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Standard template name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Standard template source: CUSTOM for custom standard templates, SYSTEM for system built-in standard templates.
   * 
   * @example
   * SYSTEM
   */
  templateFrom?: string;
  /**
   * @remarks
   * Version number.
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
   * Attribute value configuration list.
   */
  attributeWithValueList?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueList[];
  /**
   * @remarks
   * Standard code.
   * 
   * @example
   * zz
   */
  code?: string;
  /**
   * @remarks
   * Creator.
   */
  creator?: ListStandardsResponseBodyPageResultStandardListCreator;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Effective time configuration.
   */
  effectiveTimeConfig?: ListStandardsResponseBodyPageResultStandardListEffectiveTimeConfig;
  /**
   * @remarks
   * Standard English name.
   * 
   * @example
   * test
   */
  englishName?: string;
  /**
   * @remarks
   * Standard ID.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * Last modifier.
   */
  lastModifier?: ListStandardsResponseBodyPageResultStandardListLastModifier;
  /**
   * @remarks
   * Last modified time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * Standard name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Owner.
   */
  owner?: ListStandardsResponseBodyPageResultStandardListOwner;
  /**
   * @remarks
   * Stage of the standard.
   * 
   * @example
   * dev
   */
  stage?: string;
  /**
   * @remarks
   * Standard set that the current standard depends on.
   */
  standardSet?: ListStandardsResponseBodyPageResultStandardListStandardSet;
  /**
   * @remarks
   * Standard template that the current standard depends on.
   */
  standardTemplate?: ListStandardsResponseBodyPageResultStandardListStandardTemplate;
  /**
   * @remarks
   * Status of the standard.
   * 
   * @example
   * draft
   */
  status?: string;
  /**
   * @remarks
   * Standard type.
   * 
   * @example
   * zz
   */
  type?: string;
  /**
   * @remarks
   * Version number.
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
   * Standard list.
   */
  standardList?: ListStandardsResponseBodyPageResultStandardList[];
  /**
   * @remarks
   * Total number of records.
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
   * Backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP response code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Details of the backend response error.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Paginated query result.
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
   * Whether the request is successful.
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

