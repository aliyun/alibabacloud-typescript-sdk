// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeMonitorConfig extends $dara.Model {
  /**
   * @example
   * column1
   */
  columnName?: string;
  isCaseSensitive?: boolean;
  /**
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
   * @example
   * 22
   */
  standardId?: number;
  /**
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
   * @example
   * CUSTOM
   */
  attributeFrom?: string;
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
  attributeFromInfo?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeRefAttributeAttributeFromInfo;
  /**
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
   * @example
   * col1
   */
  column?: string;
  /**
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
  includeMaxValue?: boolean;
  includeMinValue?: boolean;
  /**
   * @example
   * 100
   */
  maxValue?: string;
  /**
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
   * @example
   * DATAPHIN_ATTRIBUTE
   */
  dataphinAttributeType?: string;
  lookupTableReference?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeValueConfigValueRangeLookupTableReference;
  minMaxValueConfig?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeValueConfigValueRangeMinMaxValueConfig;
  /**
   * @example
   * NONE
   */
  valueConstraint?: string;
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
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @example
   * test
   */
  defaultValue?: string;
  /**
   * @example
   * 1
   */
  length?: number;
  /**
   * @example
   * CUSTOMIZED
   */
  type?: string;
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
   * @example
   * test_attr
   */
  code?: string;
  /**
   * @example
   * test
   */
  description?: string;
  enableMonitorConfig?: boolean;
  /**
   * @example
   * 1011
   */
  id?: number;
  monitorConfig?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeMonitorConfig;
  /**
   * @example
   * attr1
   */
  name?: string;
  refAttribute?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttributeRefAttribute;
  required?: boolean;
  /**
   * @example
   * BIZ_ATTRIBUTE
   */
  type?: string;
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
  attribute?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueListAttribute;
  /**
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
   * @example
   * 300000913
   */
  id?: string;
  /**
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
   * @example
   * 2025-12-30 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  startTime?: string;
  /**
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
   * @example
   * 300000913
   */
  id?: string;
  /**
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
   * @example
   * 300000913
   */
  id?: string;
  /**
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
   * @example
   * cc
   */
  code?: string;
  /**
   * @example
   * /dir1
   */
  directory?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
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
   * @example
   * 1121
   */
  code?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * SYSTEM
   */
  templateFrom?: string;
  /**
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
  attributeWithValueList?: ListStandardsResponseBodyPageResultStandardListAttributeWithValueList[];
  /**
   * @example
   * zz
   */
  code?: string;
  creator?: ListStandardsResponseBodyPageResultStandardListCreator;
  /**
   * @example
   * test
   */
  description?: string;
  effectiveTimeConfig?: ListStandardsResponseBodyPageResultStandardListEffectiveTimeConfig;
  /**
   * @example
   * test
   */
  englishName?: string;
  /**
   * @example
   * 1234
   */
  id?: number;
  lastModifier?: ListStandardsResponseBodyPageResultStandardListLastModifier;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @example
   * test
   */
  name?: string;
  owner?: ListStandardsResponseBodyPageResultStandardListOwner;
  /**
   * @example
   * dev
   */
  stage?: string;
  standardSet?: ListStandardsResponseBodyPageResultStandardListStandardSet;
  standardTemplate?: ListStandardsResponseBodyPageResultStandardListStandardTemplate;
  /**
   * @example
   * draft
   */
  status?: string;
  /**
   * @example
   * zz
   */
  type?: string;
  /**
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
  standardList?: ListStandardsResponseBodyPageResultStandardList[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  pageResult?: ListStandardsResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
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

