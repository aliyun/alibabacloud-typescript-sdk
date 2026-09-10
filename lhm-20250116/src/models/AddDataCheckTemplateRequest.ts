// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddDataCheckTemplateRequestBasicMetricRules extends $dara.Model {
  /**
   * @remarks
   * The verification methods (metric calculation methods). Separate multiple values with commas (,), such as SUM,AVG,MIN,MAX. The values must be within the range allowed by the templatetype.
   * 
   * @example
   * SUM,AVG
   */
  checkMethods?: string;
  /**
   * @remarks
   * Specifies whether to control floating-point precision. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  controlFloatPrecision?: number;
  /**
   * @remarks
   * The data type category. Valid values: 0 (native data type) and 1 (composite data type).
   * 
   * @example
   * 0
   */
  dataTypeClassify?: number;
  /**
   * @remarks
   * The data type group that identifies the data type category to which the verification rule applies. Valid values: integers from 0 to 7. For the description of each value, see the enumeration values.
   * 
   * @example
   * 0
   */
  dataTypeGroup?: number;
  /**
   * @remarks
   * The list of data types to which the verification rule applies. Configure this field based on your requirements.
   */
  dataTypeList?: string[];
  /**
   * @remarks
   * The data types. Configure this field based on your requirements.
   * 
   * @example
   * BIGINT
   */
  dataTypes?: string;
  /**
   * @remarks
   * The difference tolerance rate type. Valid values: 0 (unified) and 1 (custom). Default value: 0.
   * 
   * @example
   * 0
   */
  diffTolerateType?: number;
  /**
   * @remarks
   * The difference tolerance rate values. For the unified type, specify one value, such as {"SAME": 0}. For the custom type, specify a value for each tolerance type, such as {"SUM": 0.01, "AVG": 0.001}.
   */
  diffTolerateValues?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to enable decimal scale control for DECIMAL type comparison. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  enableDecimalScale?: number;
  /**
   * @remarks
   * The filter field names, separated by commas (,).
   * 
   * @example
   * col_a,col_b
   */
  filterColumnName?: string;
  /**
   * @remarks
   * **[Deprecated]** Use the filterColumnName field instead. This field is retained for backward compatibility.
   * 
   * @example
   * col_a,col_b
   */
  filterColumns?: string;
  /**
   * @remarks
   * The number of decimal places for floating-point values.
   * 
   * @example
   * 2
   */
  floatPrecision?: number;
  /**
   * @remarks
   * Specifies whether to ignore trailing zero differences in decimal parts. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreDecimalDiff?: number;
  /**
   * @remarks
   * Specifies whether to ignore trailing zeros in the decimal scale for DECIMAL type comparison. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreDecimalScaleSuffixZero?: number;
  /**
   * @remarks
   * Specifies whether to ignore differences between null values and empty strings. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreEmptyDiff?: number;
  /**
   * @remarks
   * Specifies whether to ignore zero values for numeric types. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreNumericZero?: number;
  /**
   * @remarks
   * Specifies whether to ignore empty strings and null values for string types. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreStringEmpty?: number;
  /**
   * @remarks
   * Specifies whether to ignore differences between null values and zero values. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreZeroDiff?: number;
  /**
   * @remarks
   * Specifies whether to enable count (data volume) verification. Valid values: 0 (no) and 1 (yes). Default value: 1.
   * 
   * @example
   * 1
   */
  isCountCheck?: number;
  /**
   * @remarks
   * The rule ID that uniquely identifies a verification rule.
   * 
   * @example
   * 1001
   */
  ruleId?: string;
  /**
   * @remarks
   * The specific decimal scale value for DECIMAL type comparison.
   * 
   * @example
   * 2
   */
  setDecimalScale?: number;
  static names(): { [key: string]: string } {
    return {
      checkMethods: 'checkMethods',
      controlFloatPrecision: 'controlFloatPrecision',
      dataTypeClassify: 'dataTypeClassify',
      dataTypeGroup: 'dataTypeGroup',
      dataTypeList: 'dataTypeList',
      dataTypes: 'dataTypes',
      diffTolerateType: 'diffTolerateType',
      diffTolerateValues: 'diffTolerateValues',
      enableDecimalScale: 'enableDecimalScale',
      filterColumnName: 'filterColumnName',
      filterColumns: 'filterColumns',
      floatPrecision: 'floatPrecision',
      ignoreDecimalDiff: 'ignoreDecimalDiff',
      ignoreDecimalScaleSuffixZero: 'ignoreDecimalScaleSuffixZero',
      ignoreEmptyDiff: 'ignoreEmptyDiff',
      ignoreNumericZero: 'ignoreNumericZero',
      ignoreStringEmpty: 'ignoreStringEmpty',
      ignoreZeroDiff: 'ignoreZeroDiff',
      isCountCheck: 'isCountCheck',
      ruleId: 'ruleId',
      setDecimalScale: 'setDecimalScale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkMethods: 'string',
      controlFloatPrecision: 'number',
      dataTypeClassify: 'number',
      dataTypeGroup: 'number',
      dataTypeList: { 'type': 'array', 'itemType': 'string' },
      dataTypes: 'string',
      diffTolerateType: 'number',
      diffTolerateValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      enableDecimalScale: 'number',
      filterColumnName: 'string',
      filterColumns: 'string',
      floatPrecision: 'number',
      ignoreDecimalDiff: 'number',
      ignoreDecimalScaleSuffixZero: 'number',
      ignoreEmptyDiff: 'number',
      ignoreNumericZero: 'number',
      ignoreStringEmpty: 'number',
      ignoreZeroDiff: 'number',
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

export class AddDataCheckTemplateRequestComplexMetricRules extends $dara.Model {
  /**
   * @remarks
   * The check methods (metric calculation methods). Separate multiple values with commas, such as SUM,AVG,MIN,MAX. The values must be within the range allowed by the templatetype.
   * 
   * @example
   * SUM,AVG
   */
  checkMethods?: string;
  /**
   * @remarks
   * Specifies whether to control floating-point precision. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  controlFloatPrecision?: number;
  /**
   * @remarks
   * The data type category. Valid values: 0 (native data type) and 1 (composite data type).
   * 
   * @example
   * 0
   */
  dataTypeClassify?: number;
  /**
   * @remarks
   * The data type group that identifies the data type category to which the verification rule applies. Valid values: integers from 0 to 7. For the description of each value, see the enumeration values.
   * 
   * @example
   * 0
   */
  dataTypeGroup?: number;
  /**
   * @remarks
   * The list of data types to which the verification rule applies. Configure this field based on your requirements.
   */
  dataTypeList?: string[];
  /**
   * @remarks
   * The data types. Configure this field based on your requirements.
   * 
   * @example
   * BIGINT
   */
  dataTypes?: string;
  /**
   * @remarks
   * The difference tolerance rate type. Valid values: 0 (unified) and 1 (custom). Default value: 0.
   * 
   * @example
   * 0
   */
  diffTolerateType?: number;
  /**
   * @remarks
   * The difference tolerance rate values. For the unified type, specify one value, such as {"SAME": 0}. For the custom type, specify a value for each tolerance type, such as {"SUM": 0.01, "AVG": 0.001}.
   */
  diffTolerateValues?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to enable decimal scale control for DECIMAL type comparison. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  enableDecimalScale?: number;
  /**
   * @remarks
   * The filter field names, separated by commas (,).
   * 
   * @example
   * col_a,col_b
   */
  filterColumnName?: string;
  /**
   * @remarks
   * **[Deprecated]** Use the filterColumnName field instead. This field is retained for backward compatibility.
   * 
   * @example
   * col_a,col_b
   */
  filterColumns?: string;
  /**
   * @remarks
   * The number of decimal places for floating-point values.
   * 
   * @example
   * 2
   */
  floatPrecision?: number;
  /**
   * @remarks
   * Specifies whether to ignore trailing zero differences in decimal parts. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreDecimalDiff?: number;
  /**
   * @remarks
   * Specifies whether to ignore trailing zeros in the decimal scale for DECIMAL type comparison. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreDecimalScaleSuffixZero?: number;
  /**
   * @remarks
   * Specifies whether to ignore differences between null values and empty strings. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreEmptyDiff?: number;
  /**
   * @remarks
   * Specifies whether to ignore zero values for numeric types. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreNumericZero?: number;
  /**
   * @remarks
   * Specifies whether to ignore empty strings and null values for string types. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreStringEmpty?: number;
  /**
   * @remarks
   * Specifies whether to ignore differences between null values and zero values. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreZeroDiff?: number;
  /**
   * @remarks
   * Specifies whether to enable count (data volume) verification. Valid values: 0 (no) and 1 (yes). Default value: 1.
   * 
   * @example
   * 1
   */
  isCountCheck?: number;
  /**
   * @remarks
   * The rule ID that uniquely identifies a verification rule.
   * 
   * @example
   * 1001
   */
  ruleId?: string;
  /**
   * @remarks
   * The specific decimal scale value for DECIMAL type comparison.
   * 
   * @example
   * 2
   */
  setDecimalScale?: number;
  static names(): { [key: string]: string } {
    return {
      checkMethods: 'checkMethods',
      controlFloatPrecision: 'controlFloatPrecision',
      dataTypeClassify: 'dataTypeClassify',
      dataTypeGroup: 'dataTypeGroup',
      dataTypeList: 'dataTypeList',
      dataTypes: 'dataTypes',
      diffTolerateType: 'diffTolerateType',
      diffTolerateValues: 'diffTolerateValues',
      enableDecimalScale: 'enableDecimalScale',
      filterColumnName: 'filterColumnName',
      filterColumns: 'filterColumns',
      floatPrecision: 'floatPrecision',
      ignoreDecimalDiff: 'ignoreDecimalDiff',
      ignoreDecimalScaleSuffixZero: 'ignoreDecimalScaleSuffixZero',
      ignoreEmptyDiff: 'ignoreEmptyDiff',
      ignoreNumericZero: 'ignoreNumericZero',
      ignoreStringEmpty: 'ignoreStringEmpty',
      ignoreZeroDiff: 'ignoreZeroDiff',
      isCountCheck: 'isCountCheck',
      ruleId: 'ruleId',
      setDecimalScale: 'setDecimalScale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkMethods: 'string',
      controlFloatPrecision: 'number',
      dataTypeClassify: 'number',
      dataTypeGroup: 'number',
      dataTypeList: { 'type': 'array', 'itemType': 'string' },
      dataTypes: 'string',
      diffTolerateType: 'number',
      diffTolerateValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      enableDecimalScale: 'number',
      filterColumnName: 'string',
      filterColumns: 'string',
      floatPrecision: 'number',
      ignoreDecimalDiff: 'number',
      ignoreDecimalScaleSuffixZero: 'number',
      ignoreEmptyDiff: 'number',
      ignoreNumericZero: 'number',
      ignoreStringEmpty: 'number',
      ignoreZeroDiff: 'number',
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

export class AddDataCheckTemplateRequestDsEngineRels extends $dara.Model {
  /**
   * @remarks
   * The ID of the datasource engine configuration.
   * 
   * @example
   * 1001
   */
  dsEngineId?: string;
  /**
   * @remarks
   * The datasource type, such as Hive or MaxCompute.
   * 
   * @example
   * Hive
   */
  dsType?: string;
  /**
   * @remarks
   * The list of covered check engine types, such as Tez or MapReduce. When specified as a string, separate multiple values with commas.
   */
  engineTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      dsEngineId: 'dsEngineId',
      dsType: 'dsType',
      engineTypes: 'engineTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsEngineId: 'string',
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

export class AddDataCheckTemplateRequestFulltextRule extends $dara.Model {
  /**
   * @remarks
   * The check mode. Valid values:
   * - 0: row-by-row overall comparison.
   * - 1: row-by-row column-by-column comparison.
   * - 2: both row-by-row overall comparison and row-by-row column-by-column comparison.
   * 
   * @example
   * 0
   */
  checkMode?: number;
  /**
   * @remarks
   * The equality comparison type for row-by-row column-by-column comparison. Valid values:
   * - 0: all field types.
   * - 1: native primitive data types.
   * - 2: complex data types.
   * - 3: custom.
   * 
   * @example
   * 0
   */
  columnEqualCmpType?: number;
  /**
   * @remarks
   * The custom type list for equality comparison during row-by-row column-by-column comparison. Separate multiple values with commas.
   * 
   * @example
   * ARRAY,MAP
   */
  columnEqualCmpValues?: string;
  /**
   * @remarks
   * Specifies whether to enable cosine similarity during row-by-row column-by-column comparison. Valid values:
   * - 0: Disabled.
   * - 1: Enabled.
   * 
   * @example
   * 0
   */
  columnIsCosine?: number;
  /**
   * @remarks
   * Specifies whether to ignore differences between null values and empty strings during row-by-row column-by-column comparison. Valid values:
   * - 0: Not ignored.
   * - 1: Ignored.
   * 
   * @example
   * 0
   */
  columnIsIgnoreNull?: number;
  /**
   * @remarks
   * Specifies whether to ignore differences between null values and 0 values during row-by-row column-by-column comparison. Valid values:
   * - 0: Not ignored.
   * - 1: Ignored.
   * 
   * @example
   * 0
   */
  columnIsIgnoreZero?: number;
  /**
   * @remarks
   * Specifies whether to enable sampling during row-by-row column-by-column comparison. Valid values:
   * - 0: Disabled.
   * - 1: Enabled.
   * 
   * @example
   * 0
   */
  columnIsSamples?: number;
  /**
   * @remarks
   * The sampling method for row-by-row column-by-column comparison. Valid values:
   * - 0: by row.
   * - 1: by percentage.
   * 
   * @example
   * 0
   */
  columnSamplesType?: number;
  /**
   * @remarks
   * The sampling value for row-by-row column-by-column comparison. The meaning depends on the sampling method: the number of rows when sampling by row, or the percentage value when sampling by percentage.
   * 
   * @example
   * 100
   */
  columnSamplesValue?: number;
  /**
   * @remarks
   * The size comparison type for row-by-row column-by-column comparison. Valid values:
   * - 0: all complex data types.
   * - 1: custom.
   * 
   * @example
   * 0
   */
  columnSizeCmpType?: number;
  /**
   * @remarks
   * The custom type list for size comparison during row-by-row column-by-column comparison. Separate multiple values with commas.
   * 
   * @example
   * ARRAY,MAP
   */
  columnSizeCmpValues?: string;
  /**
   * @remarks
   * Specifies whether to enable primary key or composite primary key existence check. Valid values:
   * - 0: Disabled.
   * - 1: Enabled.
   * 
   * @example
   * 1
   */
  isPrimaryKeyCheck?: number;
  /**
   * @remarks
   * The row-by-row comparison method. Valid values:
   * - 0: md5.
   * - 1: crc32.
   * 
   * @example
   * 0
   */
  lineCheckType?: number;
  /**
   * @remarks
   * Specifies whether to print all columns in the difference details during row-by-row comparison. Valid values:
   * - 0: Not printed.
   * - 1: Printed.
   * 
   * @example
   * 0
   */
  lineIsPrintAll?: number;
  /**
   * @remarks
   * Specifies whether to enable sampling during row-by-row comparison. Valid values:
   * - 0: Disabled.
   * - 1: Enabled.
   * 
   * @example
   * 0
   */
  lineIsSamples?: number;
  /**
   * @remarks
   * The sampling method for row-by-row comparison. Valid values:
   * - 0: by row.
   * - 1: by percentage.
   * 
   * @example
   * 0
   */
  lineSamplesType?: number;
  /**
   * @remarks
   * The sampling value for row-by-row comparison. The meaning depends on the sampling method: the number of rows when sampling by row, or the percentage value when sampling by percentage.
   * 
   * @example
   * 100
   */
  lineSamplesValue?: number;
  /**
   * @remarks
   * The rule ID that uniquely identifies a verification rule.
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

export class AddDataCheckTemplateRequestMetricRules extends $dara.Model {
  /**
   * @remarks
   * The check methods (metric calculation methods). Separate multiple values with commas, such as SUM,AVG,MIN,MAX. The values must be within the range allowed by the templatetype.
   * 
   * @example
   * SUM,AVG
   */
  checkMethods?: string;
  /**
   * @remarks
   * Specifies whether to control floating-point precision. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  controlFloatPrecision?: number;
  /**
   * @remarks
   * The data type category. Valid values: 0 (native data type) and 1 (composite data type).
   * 
   * @example
   * 0
   */
  dataTypeClassify?: number;
  /**
   * @remarks
   * The data type group that identifies the data type category to which the verification rule applies. Valid values: integers from 0 to 7. For the description of each value, see the enumeration values.
   * 
   * @example
   * 0
   */
  dataTypeGroup?: number;
  /**
   * @remarks
   * The list of data types to which the verification rule applies. Configure this field based on your requirements.
   */
  dataTypeList?: string[];
  /**
   * @remarks
   * The data types. Configure this field based on your requirements.
   * 
   * @example
   * BIGINT
   */
  dataTypes?: string;
  /**
   * @remarks
   * The difference tolerance rate type. Valid values: 0 (unified) and 1 (custom). Default value: 0.
   * 
   * @example
   * 0
   */
  diffTolerateType?: number;
  /**
   * @remarks
   * The difference tolerance rate values. For the unified type, specify one value, such as {"SAME": 0}. For the custom type, specify a value for each tolerance type, such as {"SUM": 0.01, "AVG": 0.001}.
   */
  diffTolerateValues?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to enable decimal scale control for DECIMAL type comparison. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  enableDecimalScale?: number;
  /**
   * @remarks
   * The filter field names, separated by commas (,).
   * 
   * @example
   * col_a,col_b
   */
  filterColumnName?: string;
  /**
   * @remarks
   * **[Deprecated]** Use the filterColumnName field instead. This field is retained for backward compatibility.
   * 
   * @example
   * col_a,col_b
   */
  filterColumns?: string;
  /**
   * @remarks
   * The number of decimal places for floating-point values.
   * 
   * @example
   * 2
   */
  floatPrecision?: number;
  /**
   * @remarks
   * Specifies whether to ignore trailing zero differences in decimal parts. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreDecimalDiff?: number;
  /**
   * @remarks
   * Specifies whether to ignore trailing zeros in the decimal scale for DECIMAL type comparison. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreDecimalScaleSuffixZero?: number;
  /**
   * @remarks
   * Specifies whether to ignore differences between null values and empty strings. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreEmptyDiff?: number;
  /**
   * @remarks
   * Specifies whether to ignore zero values for numeric types. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreNumericZero?: number;
  /**
   * @remarks
   * Specifies whether to ignore empty strings and null values for string types. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreStringEmpty?: number;
  /**
   * @remarks
   * Specifies whether to ignore differences between null values and zero values. Valid values: 0 (no) and 1 (yes).
   * 
   * @example
   * 0
   */
  ignoreZeroDiff?: number;
  /**
   * @remarks
   * Specifies whether to enable count (data volume) verification. Valid values: 0 (no) and 1 (yes). Default value: 1.
   * 
   * @example
   * 1
   */
  isCountCheck?: number;
  /**
   * @remarks
   * The rule ID that uniquely identifies a verification rule.
   * 
   * @example
   * 1001
   */
  ruleId?: string;
  /**
   * @remarks
   * The specific decimal scale value for DECIMAL type comparison.
   * 
   * @example
   * 2
   */
  setDecimalScale?: number;
  static names(): { [key: string]: string } {
    return {
      checkMethods: 'checkMethods',
      controlFloatPrecision: 'controlFloatPrecision',
      dataTypeClassify: 'dataTypeClassify',
      dataTypeGroup: 'dataTypeGroup',
      dataTypeList: 'dataTypeList',
      dataTypes: 'dataTypes',
      diffTolerateType: 'diffTolerateType',
      diffTolerateValues: 'diffTolerateValues',
      enableDecimalScale: 'enableDecimalScale',
      filterColumnName: 'filterColumnName',
      filterColumns: 'filterColumns',
      floatPrecision: 'floatPrecision',
      ignoreDecimalDiff: 'ignoreDecimalDiff',
      ignoreDecimalScaleSuffixZero: 'ignoreDecimalScaleSuffixZero',
      ignoreEmptyDiff: 'ignoreEmptyDiff',
      ignoreNumericZero: 'ignoreNumericZero',
      ignoreStringEmpty: 'ignoreStringEmpty',
      ignoreZeroDiff: 'ignoreZeroDiff',
      isCountCheck: 'isCountCheck',
      ruleId: 'ruleId',
      setDecimalScale: 'setDecimalScale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkMethods: 'string',
      controlFloatPrecision: 'number',
      dataTypeClassify: 'number',
      dataTypeGroup: 'number',
      dataTypeList: { 'type': 'array', 'itemType': 'string' },
      dataTypes: 'string',
      diffTolerateType: 'number',
      diffTolerateValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      enableDecimalScale: 'number',
      filterColumnName: 'string',
      filterColumns: 'string',
      floatPrecision: 'number',
      ignoreDecimalDiff: 'number',
      ignoreDecimalScaleSuffixZero: 'number',
      ignoreEmptyDiff: 'number',
      ignoreNumericZero: 'number',
      ignoreStringEmpty: 'number',
      ignoreZeroDiff: 'number',
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

export class AddDataCheckTemplateRequestNullRules extends $dara.Model {
  /**
   * @remarks
   * The data type group that identifies the data type category to which the verification rule applies. Valid values: integers from 0 to 7. For the description of each value, see the enumeration values.
   * 
   * @example
   * 0
   */
  dataTypeGroup?: number;
  /**
   * @remarks
   * The null value definitions, stored in JSON format.
   * 
   * @example
   * {}
   */
  nullValues?: string;
  /**
   * @remarks
   * The rule ID that uniquely identifies a verification rule.
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

export class AddDataCheckTemplateRequestWeakContentRule extends $dara.Model {
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
   * The rule ID that uniquely identifies a verification rule.
   * 
   * @example
   * 1001
   */
  ruleId?: string;
  /**
   * @remarks
   * The weak content algorithm name: md5 or crc32.
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

export class AddDataCheckTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The list of metric verification rules for basic data types. This field is required when checkType is set to 1 (metric comparison).
   */
  basicMetricRules?: AddDataCheckTemplateRequestBasicMetricRules[];
  /**
   * @remarks
   * The verification rule type. Valid values:
   * - 0: data volume comparison.
   * - 1: metric comparison.
   * - 2: weak content comparison.
   * - 3: custom comparison.
   * - 4: full-text comparison.
   * - 5: null rate comparison.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The list of check rules for complex data type metrics. Used when checkType is set to 1 (metric comparison).
   */
  complexMetricRules?: AddDataCheckTemplateRequestComplexMetricRules[];
  /**
   * @remarks
   * The list of datasource engine relationships (datasource engines associated with the template).
   */
  dsEngineRels?: AddDataCheckTemplateRequestDsEngineRels[];
  /**
   * @remarks
   * The full-text comparison rule. This parameter has a value when checkType is set to 4 (full-text comparison). For the field structure, see the child field descriptions.
   */
  fulltextRule?: AddDataCheckTemplateRequestFulltextRule;
  /**
   * @remarks
   * The list of metric check rules. This parameter has a value when checkType is set to 1 (metric comparison).
   */
  metricRules?: AddDataCheckTemplateRequestMetricRules[];
  /**
   * @remarks
   * The list of null value rate check rules. This parameter has a value when checkType is set to 5 (null value rate comparison).
   */
  nullRules?: AddDataCheckTemplateRequestNullRules[];
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues of this call.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
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
   * The name of the check template.
   * 
   * @example
   * Data volume check template
   */
  templateName?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10001
   */
  tenantId?: string;
  /**
   * @remarks
   * The weak content check rule. This parameter has a value and is required when checkType is set to 2 (weak content comparison). For the field structure, refer to the child field descriptions below.
   */
  weakContentRule?: AddDataCheckTemplateRequestWeakContentRule;
  static names(): { [key: string]: string } {
    return {
      basicMetricRules: 'basicMetricRules',
      checkType: 'checkType',
      complexMetricRules: 'complexMetricRules',
      dsEngineRels: 'dsEngineRels',
      fulltextRule: 'fulltextRule',
      metricRules: 'metricRules',
      nullRules: 'nullRules',
      requestId: 'requestId',
      templateDesc: 'templateDesc',
      templateName: 'templateName',
      tenantId: 'tenantId',
      weakContentRule: 'weakContentRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicMetricRules: { 'type': 'array', 'itemType': AddDataCheckTemplateRequestBasicMetricRules },
      checkType: 'number',
      complexMetricRules: { 'type': 'array', 'itemType': AddDataCheckTemplateRequestComplexMetricRules },
      dsEngineRels: { 'type': 'array', 'itemType': AddDataCheckTemplateRequestDsEngineRels },
      fulltextRule: AddDataCheckTemplateRequestFulltextRule,
      metricRules: { 'type': 'array', 'itemType': AddDataCheckTemplateRequestMetricRules },
      nullRules: { 'type': 'array', 'itemType': AddDataCheckTemplateRequestNullRules },
      requestId: 'string',
      templateDesc: 'string',
      templateName: 'string',
      tenantId: 'string',
      weakContentRule: AddDataCheckTemplateRequestWeakContentRule,
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

