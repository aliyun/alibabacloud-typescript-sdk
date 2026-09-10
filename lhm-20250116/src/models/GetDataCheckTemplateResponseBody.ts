// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCheckTemplateResponseBodyDataBasicMetricRules extends $dara.Model {
  /**
   * @remarks
   * The check methods (metric calculation methods). Multiple values are separated by commas, such as SUM,AVG,MIN,MAX. The values must be within the range allowed by the templatetype.
   * 
   * @example
   * SUM,AVG
   */
  checkMethods?: string;
  /**
   * @remarks
   * The data type category. Valid values: 0: primitive data type. 1: composite data type.
   * 
   * @example
   * 0
   */
  dataTypeClassify?: number;
  /**
   * @remarks
   * The data type group that identifies the data type category to which the check rule applies. The value is an integer from 0 to 7. For the meaning of each value, refer to the valid values.
   * 
   * @example
   * 0
   */
  dataTypeGroup?: number;
  /**
   * @remarks
   * The list of data types to which the check rule applies. Configure this field as needed.
   */
  dataTypeList?: string[];
  /**
   * @remarks
   * The data types. Configure this field as needed.
   * 
   * @example
   * BIGINT
   */
  dataTypes?: string;
  /**
   * @remarks
   * The difference tolerance rate type. Valid values: 0: unified. 1: custom. Default value: 0.
   * 
   * @example
   * 0
   */
  diffTolerateType?: number;
  /**
   * @remarks
   * The difference tolerance rate values. When the type is unified, one value is used. When the type is custom, values are set by the configured tolerance type, such as sum:33,avg:99.
   */
  diffTolerateValues?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to enable decimal scale control for DECIMAL type comparison. Valid values: 0: no. 1: yes.
   * 
   * @example
   * 0
   */
  enableDecimalScale?: number;
  /**
   * @remarks
   * The filter column names, separated by commas.
   * 
   * @example
   * col_a,col_b
   */
  filterColumnName?: string;
  /**
   * @remarks
   * Specifies whether to ignore trailing zeros in decimal places for DECIMAL type comparison. Valid values: 0: no. 1: yes.
   * 
   * @example
   * 0
   */
  ignoreDecimalScaleSuffixZero?: number;
  /**
   * @remarks
   * Specifies whether to ignore zero values for numeric types. Valid values: 0: no. 1: yes.
   * 
   * @example
   * 0
   */
  ignoreNumericZero?: number;
  /**
   * @remarks
   * Specifies whether to ignore empty strings and null for string types. Valid values: 0: no. 1: yes.
   * 
   * @example
   * 0
   */
  ignoreStringEmpty?: number;
  /**
   * @remarks
   * Specifies whether to enable count (data volume) check. Valid values: 0: no. 1: yes. Default value: 1.
   * 
   * @example
   * 1
   */
  isCountCheck?: number;
  /**
   * @remarks
   * The rule ID that uniquely identifies a check rule.
   * 
   * @example
   * 1001
   */
  ruleId?: string;
  /**
   * @remarks
   * The specific number of decimal places for DECIMAL type comparison.
   * 
   * @example
   * 2
   */
  setDecimalScale?: number;
  static names(): { [key: string]: string } {
    return {
      checkMethods: 'checkMethods',
      dataTypeClassify: 'dataTypeClassify',
      dataTypeGroup: 'dataTypeGroup',
      dataTypeList: 'dataTypeList',
      dataTypes: 'dataTypes',
      diffTolerateType: 'diffTolerateType',
      diffTolerateValues: 'diffTolerateValues',
      enableDecimalScale: 'enableDecimalScale',
      filterColumnName: 'filterColumnName',
      ignoreDecimalScaleSuffixZero: 'ignoreDecimalScaleSuffixZero',
      ignoreNumericZero: 'ignoreNumericZero',
      ignoreStringEmpty: 'ignoreStringEmpty',
      isCountCheck: 'isCountCheck',
      ruleId: 'ruleId',
      setDecimalScale: 'setDecimalScale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkMethods: 'string',
      dataTypeClassify: 'number',
      dataTypeGroup: 'number',
      dataTypeList: { 'type': 'array', 'itemType': 'string' },
      dataTypes: 'string',
      diffTolerateType: 'number',
      diffTolerateValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      enableDecimalScale: 'number',
      filterColumnName: 'string',
      ignoreDecimalScaleSuffixZero: 'number',
      ignoreNumericZero: 'number',
      ignoreStringEmpty: 'number',
      isCountCheck: 'number',
      ruleId: 'string',
      setDecimalScale: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataTypeList)) {
      $dara.Model.validateArray(this.dataTypeList);
    }
    if(this.diffTolerateValues) {
      $dara.Model.validateMap(this.diffTolerateValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCheckTemplateResponseBodyDataComplexMetricRules extends $dara.Model {
  /**
   * @remarks
   * The check methods (metric calculation methods). Multiple values are separated by commas, such as SUM,AVG,MIN,MAX. The values must be within the range allowed by the templatetype.
   * 
   * @example
   * SUM,AVG
   */
  checkMethods?: string;
  /**
   * @remarks
   * The data type category. Valid values: 0: primitive data type. 1: composite data type.
   * 
   * @example
   * 0
   */
  dataTypeClassify?: number;
  /**
   * @remarks
   * The data type group that identifies the data type category to which the check rule applies. The value is an integer from 0 to 7. For the meaning of each value, refer to the valid values.
   * 
   * @example
   * 0
   */
  dataTypeGroup?: number;
  /**
   * @remarks
   * The list of data types to which the check rule applies. Configure this field as needed.
   */
  dataTypeList?: string[];
  /**
   * @remarks
   * The data types. Configure this field as needed.
   * 
   * @example
   * BIGINT
   */
  dataTypes?: string;
  /**
   * @remarks
   * The difference tolerance rate type. Valid values: 0: unified. 1: custom. Default value: 0.
   * 
   * @example
   * 0
   */
  diffTolerateType?: number;
  /**
   * @remarks
   * The difference tolerance rate values. When the type is unified, one value is used. When the type is custom, values are set by the configured tolerance type, such as sum:33,avg:99.
   */
  diffTolerateValues?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to enable decimal scale control for DECIMAL type comparison. Valid values: 0: no. 1: yes.
   * 
   * @example
   * 0
   */
  enableDecimalScale?: number;
  /**
   * @remarks
   * The filter column names, separated by commas.
   * 
   * @example
   * col_a,col_b
   */
  filterColumnName?: string;
  /**
   * @remarks
   * Specifies whether to ignore trailing zeros in decimal places for DECIMAL type comparison. Valid values: 0: no. 1: yes.
   * 
   * @example
   * 0
   */
  ignoreDecimalScaleSuffixZero?: number;
  /**
   * @remarks
   * Specifies whether to ignore zero values for numeric types. Valid values: 0: no. 1: yes.
   * 
   * @example
   * 0
   */
  ignoreNumericZero?: number;
  /**
   * @remarks
   * Specifies whether to ignore empty strings and null for string types. Valid values: 0: no. 1: yes.
   * 
   * @example
   * 0
   */
  ignoreStringEmpty?: number;
  /**
   * @remarks
   * Specifies whether to enable count (data volume) check. Valid values: 0: no. 1: yes. Default value: 1.
   * 
   * @example
   * 1
   */
  isCountCheck?: number;
  /**
   * @remarks
   * The rule ID that uniquely identifies a check rule.
   * 
   * @example
   * 1001
   */
  ruleId?: string;
  /**
   * @remarks
   * The specific number of decimal places for DECIMAL type comparison.
   * 
   * @example
   * 2
   */
  setDecimalScale?: number;
  static names(): { [key: string]: string } {
    return {
      checkMethods: 'checkMethods',
      dataTypeClassify: 'dataTypeClassify',
      dataTypeGroup: 'dataTypeGroup',
      dataTypeList: 'dataTypeList',
      dataTypes: 'dataTypes',
      diffTolerateType: 'diffTolerateType',
      diffTolerateValues: 'diffTolerateValues',
      enableDecimalScale: 'enableDecimalScale',
      filterColumnName: 'filterColumnName',
      ignoreDecimalScaleSuffixZero: 'ignoreDecimalScaleSuffixZero',
      ignoreNumericZero: 'ignoreNumericZero',
      ignoreStringEmpty: 'ignoreStringEmpty',
      isCountCheck: 'isCountCheck',
      ruleId: 'ruleId',
      setDecimalScale: 'setDecimalScale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkMethods: 'string',
      dataTypeClassify: 'number',
      dataTypeGroup: 'number',
      dataTypeList: { 'type': 'array', 'itemType': 'string' },
      dataTypes: 'string',
      diffTolerateType: 'number',
      diffTolerateValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      enableDecimalScale: 'number',
      filterColumnName: 'string',
      ignoreDecimalScaleSuffixZero: 'number',
      ignoreNumericZero: 'number',
      ignoreStringEmpty: 'number',
      isCountCheck: 'number',
      ruleId: 'string',
      setDecimalScale: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataTypeList)) {
      $dara.Model.validateArray(this.dataTypeList);
    }
    if(this.diffTolerateValues) {
      $dara.Model.validateMap(this.diffTolerateValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCheckTemplateResponseBodyDataDsEngineRels extends $dara.Model {
  /**
   * @remarks
   * The data source type, such as Hive or MaxCompute.
   * 
   * @example
   * Hive
   */
  dsType?: string;
  /**
   * @remarks
   * The list of covered check engine types, such as Tez or MapReduce. When in string format, multiple values are separated by commas.
   */
  engineTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      dsType: 'dsType',
      engineTypes: 'engineTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsType: 'string',
      engineTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.engineTypes)) {
      $dara.Model.validateArray(this.engineTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCheckTemplateResponseBodyDataFulltextRule extends $dara.Model {
  /**
   * @remarks
   * The check mode. Valid values: 0: row-level overall comparison. 1: row-level column-by-column comparison. 2: both row-level overall comparison and row-level column-by-column comparison.
   * 
   * @example
   * 0
   */
  checkMode?: number;
  /**
   * @remarks
   * The equality comparison type for row-level column-by-column comparison. Valid values: 0: all field types. 1: primitive basic data types. 2: composite data types. 3: custom.
   * 
   * @example
   * 0
   */
  columnEqualCmpType?: number;
  /**
   * @remarks
   * The custom type list for equality comparison during row-level column-by-column comparison. Multiple values are separated by commas.
   * 
   * @example
   * ARRAY,MAP
   */
  columnEqualCmpValues?: string;
  /**
   * @remarks
   * Specifies whether to enable cosine similarity for row-level column-by-column comparison. Valid values: 0: no. 1: yes.
   * 
   * @example
   * 0
   */
  columnIsCosine?: number;
  /**
   * @remarks
   * Specifies whether to ignore differences between null values and empty strings during row-by-row and column-by-column comparison. Valid values: 0: No. 1: Yes.
   * 
   * @example
   * 0
   */
  columnIsIgnoreNull?: number;
  /**
   * @remarks
   * Specifies whether to ignore differences between null values and 0 values during row-by-row and column-by-column comparison. Valid values: 0: No. 1: Yes.
   * 
   * @example
   * 0
   */
  columnIsIgnoreZero?: number;
  /**
   * @remarks
   * Specifies whether to enable sampling during row-by-row and column-by-column comparison. Valid values: 0: No. 1: Yes.
   * 
   * @example
   * 0
   */
  columnIsSamples?: number;
  /**
   * @remarks
   * The sampling method during row-by-row and column-by-column comparison. Valid values: 0: by row. 1: by percentage.
   * 
   * @example
   * 0
   */
  columnSamplesType?: number;
  /**
   * @remarks
   * The sampling value during row-by-row and column-by-column comparison. The meaning depends on the sampling method. When sampling by row, this value represents the number of rows. When sampling by percentage, this value represents the percentage.
   * 
   * @example
   * 100
   */
  columnSamplesValue?: number;
  /**
   * @remarks
   * The size comparison type during row-by-row and column-by-column comparison. Valid values: 0: all composite data types. 1: custom.
   * 
   * @example
   * 0
   */
  columnSizeCmpType?: number;
  /**
   * @remarks
   * The custom type list for size comparison during row-by-row and column-by-column comparison. Multiple values are separated by commas (,).
   * 
   * @example
   * ARRAY,MAP
   */
  columnSizeCmpValues?: string;
  /**
   * @remarks
   * Specifies whether to enable the existence check for primary keys or composite primary keys. Valid values: 0: No. 1: Yes.
   * 
   * @example
   * 1
   */
  isPrimaryKeyCheck?: number;
  /**
   * @remarks
   * The row-by-row comparison method. Valid values: 0: md5. 1: crc32.
   * 
   * @example
   * 0
   */
  lineCheckType?: number;
  /**
   * @remarks
   * Specifies whether to print all columns in the difference details during row-by-row comparison. Valid values: 0: No. 1: Yes.
   * 
   * @example
   * 0
   */
  lineIsPrintAll?: number;
  /**
   * @remarks
   * Specifies whether to enable sampling during row-by-row comparison. Valid values: 0: No. 1: Yes.
   * 
   * @example
   * 0
   */
  lineIsSamples?: number;
  /**
   * @remarks
   * The sampling method during row-by-row comparison. Valid values: 0: by row. 1: by percentage.
   * 
   * @example
   * 0
   */
  lineSamplesType?: number;
  /**
   * @remarks
   * The sampling value during row-by-row comparison. The meaning depends on the sampling method. When sampling by row, this value represents the number of rows. When sampling by percentage, this value represents the percentage.
   * 
   * @example
   * 100
   */
  lineSamplesValue?: number;
  /**
   * @remarks
   * The rule ID that uniquely identifies a check rule.
   * 
   * @example
   * 1001
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      checkMode: 'checkMode',
      columnEqualCmpType: 'columnEqualCmpType',
      columnEqualCmpValues: 'columnEqualCmpValues',
      columnIsCosine: 'columnIsCosine',
      columnIsIgnoreNull: 'columnIsIgnoreNull',
      columnIsIgnoreZero: 'columnIsIgnoreZero',
      columnIsSamples: 'columnIsSamples',
      columnSamplesType: 'columnSamplesType',
      columnSamplesValue: 'columnSamplesValue',
      columnSizeCmpType: 'columnSizeCmpType',
      columnSizeCmpValues: 'columnSizeCmpValues',
      isPrimaryKeyCheck: 'isPrimaryKeyCheck',
      lineCheckType: 'lineCheckType',
      lineIsPrintAll: 'lineIsPrintAll',
      lineIsSamples: 'lineIsSamples',
      lineSamplesType: 'lineSamplesType',
      lineSamplesValue: 'lineSamplesValue',
      ruleId: 'ruleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkMode: 'number',
      columnEqualCmpType: 'number',
      columnEqualCmpValues: 'string',
      columnIsCosine: 'number',
      columnIsIgnoreNull: 'number',
      columnIsIgnoreZero: 'number',
      columnIsSamples: 'number',
      columnSamplesType: 'number',
      columnSamplesValue: 'number',
      columnSizeCmpType: 'number',
      columnSizeCmpValues: 'string',
      isPrimaryKeyCheck: 'number',
      lineCheckType: 'number',
      lineIsPrintAll: 'number',
      lineIsSamples: 'number',
      lineSamplesType: 'number',
      lineSamplesValue: 'number',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCheckTemplateResponseBodyDataMetricRules extends $dara.Model {
  /**
   * @remarks
   * The check methods (metric calculation methods). Multiple values are separated by commas (,), such as SUM,AVG,MIN,MAX. The values must be within the range allowed by the templatetype.
   * 
   * @example
   * SUM,AVG
   */
  checkMethods?: string;
  /**
   * @remarks
   * The data type category. Valid values: 0: primitive data type. 1: composite data type.
   * 
   * @example
   * 0
   */
  dataTypeClassify?: number;
  /**
   * @remarks
   * The data type group that identifies the data type category to which the check rule applies. The value is an integer from 0 to 7. For the meaning of each value, refer to the valid values.
   * 
   * @example
   * 0
   */
  dataTypeGroup?: number;
  /**
   * @remarks
   * The list of data types to which the check rule applies. Configure this field as needed.
   */
  dataTypeList?: string[];
  /**
   * @remarks
   * The data types. Configure this field as needed.
   * 
   * @example
   * BIGINT
   */
  dataTypes?: string;
  /**
   * @remarks
   * The difference tolerance rate type. Valid values: 0: unified. 1: custom. Default value: 0.
   * 
   * @example
   * 0
   */
  diffTolerateType?: number;
  /**
   * @remarks
   * The difference tolerance rate values. When the type is unified, one value is used. When the type is custom, values are set by the configured tolerance type, such as sum:33,avg:99.
   */
  diffTolerateValues?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to enable decimal scale control for DECIMAL type comparison. Valid values: 0: no. 1: yes.
   * 
   * @example
   * 0
   */
  enableDecimalScale?: number;
  /**
   * @remarks
   * The filter column names, separated by commas.
   * 
   * @example
   * col_a,col_b
   */
  filterColumnName?: string;
  /**
   * @remarks
   * Specifies whether to ignore trailing zeros in decimal places for DECIMAL type comparison. Valid values: 0: no. 1: yes.
   * 
   * @example
   * 0
   */
  ignoreDecimalScaleSuffixZero?: number;
  /**
   * @remarks
   * Specifies whether to ignore zero values for numeric types. Valid values: 0: no. 1: yes.
   * 
   * @example
   * 0
   */
  ignoreNumericZero?: number;
  /**
   * @remarks
   * Specifies whether to ignore empty strings and null for string types. Valid values: 0: no. 1: yes.
   * 
   * @example
   * 0
   */
  ignoreStringEmpty?: number;
  /**
   * @remarks
   * Specifies whether to enable count (data volume) check. Valid values: 0: no. 1: yes. Default value: 1.
   * 
   * @example
   * 1
   */
  isCountCheck?: number;
  /**
   * @remarks
   * The rule ID that uniquely identifies a check rule.
   * 
   * @example
   * 1001
   */
  ruleId?: string;
  /**
   * @remarks
   * The specific number of decimal places for DECIMAL type comparison.
   * 
   * @example
   * 2
   */
  setDecimalScale?: number;
  static names(): { [key: string]: string } {
    return {
      checkMethods: 'checkMethods',
      dataTypeClassify: 'dataTypeClassify',
      dataTypeGroup: 'dataTypeGroup',
      dataTypeList: 'dataTypeList',
      dataTypes: 'dataTypes',
      diffTolerateType: 'diffTolerateType',
      diffTolerateValues: 'diffTolerateValues',
      enableDecimalScale: 'enableDecimalScale',
      filterColumnName: 'filterColumnName',
      ignoreDecimalScaleSuffixZero: 'ignoreDecimalScaleSuffixZero',
      ignoreNumericZero: 'ignoreNumericZero',
      ignoreStringEmpty: 'ignoreStringEmpty',
      isCountCheck: 'isCountCheck',
      ruleId: 'ruleId',
      setDecimalScale: 'setDecimalScale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkMethods: 'string',
      dataTypeClassify: 'number',
      dataTypeGroup: 'number',
      dataTypeList: { 'type': 'array', 'itemType': 'string' },
      dataTypes: 'string',
      diffTolerateType: 'number',
      diffTolerateValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      enableDecimalScale: 'number',
      filterColumnName: 'string',
      ignoreDecimalScaleSuffixZero: 'number',
      ignoreNumericZero: 'number',
      ignoreStringEmpty: 'number',
      isCountCheck: 'number',
      ruleId: 'string',
      setDecimalScale: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataTypeList)) {
      $dara.Model.validateArray(this.dataTypeList);
    }
    if(this.diffTolerateValues) {
      $dara.Model.validateMap(this.diffTolerateValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCheckTemplateResponseBodyDataNullRules extends $dara.Model {
  /**
   * @remarks
   * The data type group that identifies the data type category to which the check rule applies. The value is an integer from 0 to 7. For the meaning of each value, refer to the valid values.
   * 
   * @example
   * 0
   */
  dataTypeGroup?: number;
  /**
   * @remarks
   * The null values, stored in JSON format.
   * 
   * @example
   * {}
   */
  nullValues?: string;
  /**
   * @remarks
   * The rule ID that uniquely identifies a check rule.
   * 
   * @example
   * 1001
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      dataTypeGroup: 'dataTypeGroup',
      nullValues: 'nullValues',
      ruleId: 'ruleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTypeGroup: 'number',
      nullValues: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCheckTemplateResponseBodyDataWeakContentRule extends $dara.Model {
  /**
   * @remarks
   * The filter column name expression.
   * 
   * @example
   * ^col_.*$
   */
  filterColumnExpression?: string;
  /**
   * @remarks
   * The filter column types, separated by vertical bars (|).
   */
  filterColumnTypes?: string[];
  /**
   * @remarks
   * The rule ID that uniquely identifies a check rule.
   * 
   * @example
   * 1001
   */
  ruleId?: string;
  /**
   * @remarks
   * The weak content algorithm name. Valid values: md5 and crc32.
   * 
   * @example
   * md5
   */
  weakContentAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      filterColumnExpression: 'filterColumnExpression',
      filterColumnTypes: 'filterColumnTypes',
      ruleId: 'ruleId',
      weakContentAlgorithm: 'weakContentAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterColumnExpression: 'string',
      filterColumnTypes: { 'type': 'array', 'itemType': 'string' },
      ruleId: 'string',
      weakContentAlgorithm: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filterColumnTypes)) {
      $dara.Model.validateArray(this.filterColumnTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCheckTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of check rules for basic data type metrics. This field is required when checkType is set to 1 (metric comparison).
   */
  basicMetricRules?: GetDataCheckTemplateResponseBodyDataBasicMetricRules[];
  /**
   * @remarks
   * The check rule type. Valid values: 0: data volume comparison. 1: metric comparison. 2: weak content comparison. 3: custom comparison. 4: full-text comparison. 5: null rate comparison.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The Chinese name of the check type (used in export report fields).
   * 
   * @example
   * 指标比对
   */
  checkTypeExport?: string;
  /**
   * @remarks
   * The check type name.
   * 
   * @example
   * 1
   */
  checkTypeName?: number;
  /**
   * @remarks
   * The list of check rules for composite data type metrics. This field is used when checkType is set to 1 (metric comparison).
   */
  complexMetricRules?: GetDataCheckTemplateResponseBodyDataComplexMetricRules[];
  /**
   * @remarks
   * The list of data source engine relationships (data source engines associated with the template).
   */
  dsEngineRels?: GetDataCheckTemplateResponseBodyDataDsEngineRels[];
  /**
   * @remarks
   * The full-text comparison rule. This field has a value when checkType is set to 4 (full-text comparison). For the field structure, refer to the child field descriptions below.
   */
  fulltextRule?: GetDataCheckTemplateResponseBodyDataFulltextRule;
  /**
   * @remarks
   * The list of metric check rules. This parameter has a value when checkType is set to 1 (metric comparison).
   */
  metricRules?: GetDataCheckTemplateResponseBodyDataMetricRules[];
  /**
   * @remarks
   * The list of null rate check rules. This parameter has a value when checkType is set to 5 (null rate comparison).
   */
  nullRules?: GetDataCheckTemplateResponseBodyDataNullRules[];
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * Description of the data volume check template
   */
  templateDesc?: string;
  /**
   * @remarks
   * The check template ID (logical foreign key) that uniquely identifies a check template.
   * 
   * @example
   * 1001
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the check template.
   * 
   * @example
   * Data volume check template
   */
  templateName?: string;
  /**
   * @remarks
   * The weak content check rule. This parameter has a value and is required when checkType is set to 2 (weak content comparison). For the field structure, see the child field descriptions.
   */
  weakContentRule?: GetDataCheckTemplateResponseBodyDataWeakContentRule;
  static names(): { [key: string]: string } {
    return {
      basicMetricRules: 'basicMetricRules',
      checkType: 'checkType',
      checkTypeExport: 'checkTypeExport',
      checkTypeName: 'checkTypeName',
      complexMetricRules: 'complexMetricRules',
      dsEngineRels: 'dsEngineRels',
      fulltextRule: 'fulltextRule',
      metricRules: 'metricRules',
      nullRules: 'nullRules',
      templateDesc: 'templateDesc',
      templateId: 'templateId',
      templateName: 'templateName',
      weakContentRule: 'weakContentRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicMetricRules: { 'type': 'array', 'itemType': GetDataCheckTemplateResponseBodyDataBasicMetricRules },
      checkType: 'number',
      checkTypeExport: 'string',
      checkTypeName: 'number',
      complexMetricRules: { 'type': 'array', 'itemType': GetDataCheckTemplateResponseBodyDataComplexMetricRules },
      dsEngineRels: { 'type': 'array', 'itemType': GetDataCheckTemplateResponseBodyDataDsEngineRels },
      fulltextRule: GetDataCheckTemplateResponseBodyDataFulltextRule,
      metricRules: { 'type': 'array', 'itemType': GetDataCheckTemplateResponseBodyDataMetricRules },
      nullRules: { 'type': 'array', 'itemType': GetDataCheckTemplateResponseBodyDataNullRules },
      templateDesc: 'string',
      templateId: 'string',
      templateName: 'string',
      weakContentRule: GetDataCheckTemplateResponseBodyDataWeakContentRule,
    };
  }

  validate() {
    if(Array.isArray(this.basicMetricRules)) {
      $dara.Model.validateArray(this.basicMetricRules);
    }
    if(Array.isArray(this.complexMetricRules)) {
      $dara.Model.validateArray(this.complexMetricRules);
    }
    if(Array.isArray(this.dsEngineRels)) {
      $dara.Model.validateArray(this.dsEngineRels);
    }
    if(this.fulltextRule && typeof (this.fulltextRule as any).validate === 'function') {
      (this.fulltextRule as any).validate();
    }
    if(Array.isArray(this.metricRules)) {
      $dara.Model.validateArray(this.metricRules);
    }
    if(Array.isArray(this.nullRules)) {
      $dara.Model.validateArray(this.nullRules);
    }
    if(this.weakContentRule && typeof (this.weakContentRule as any).validate === 'function') {
      (this.weakContentRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCheckTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data body returned by the operation. For the field structure, refer to the child field descriptions below.
   */
  data?: GetDataCheckTemplateResponseBodyData;
  /**
   * @remarks
   * The error code. An empty string is returned if the call is successful.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. An empty string is returned if the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values: true: The call is successful. false: The call failed. If the call failed, check errCode and errMessage for details.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDataCheckTemplateResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

