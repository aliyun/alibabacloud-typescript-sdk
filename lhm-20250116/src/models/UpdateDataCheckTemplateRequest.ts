// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataCheckTemplateRequestBasicMetricRules extends $dara.Model {
  /**
   * @example
   * SUM,AVG
   */
  checkMethods?: string;
  /**
   * @example
   * 0
   */
  controlFloatPrecision?: number;
  /**
   * @example
   * 0
   */
  dataTypeClassify?: number;
  /**
   * @example
   * 0
   */
  dataTypeGroup?: number;
  dataTypeList?: string[];
  /**
   * @example
   * BIGINT
   */
  dataTypes?: string;
  /**
   * @example
   * 0
   */
  diffTolerateType?: number;
  diffTolerateValues?: { [key: string]: any };
  /**
   * @example
   * 0
   */
  enableDecimalScale?: number;
  /**
   * @example
   * col_a,col_b
   */
  filterColumnName?: string;
  /**
   * @example
   * col_a,col_b
   */
  filterColumns?: string;
  /**
   * @example
   * 2
   */
  floatPrecision?: number;
  /**
   * @example
   * 0
   */
  ignoreDecimalDiff?: number;
  /**
   * @example
   * 0
   */
  ignoreDecimalScaleSuffixZero?: number;
  /**
   * @example
   * 0
   */
  ignoreEmptyDiff?: number;
  /**
   * @example
   * 0
   */
  ignoreNumericZero?: number;
  /**
   * @example
   * 0
   */
  ignoreStringEmpty?: number;
  /**
   * @example
   * 0
   */
  ignoreZeroDiff?: number;
  /**
   * @example
   * 1
   */
  isCountCheck?: number;
  /**
   * @example
   * 1001
   */
  ruleId?: string;
  /**
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

export class UpdateDataCheckTemplateRequestComplexMetricRules extends $dara.Model {
  /**
   * @example
   * SUM,AVG
   */
  checkMethods?: string;
  /**
   * @example
   * 0
   */
  controlFloatPrecision?: number;
  /**
   * @example
   * 0
   */
  dataTypeClassify?: number;
  /**
   * @example
   * 0
   */
  dataTypeGroup?: number;
  dataTypeList?: string[];
  /**
   * @example
   * BIGINT
   */
  dataTypes?: string;
  /**
   * @example
   * 0
   */
  diffTolerateType?: number;
  diffTolerateValues?: { [key: string]: any };
  /**
   * @example
   * 0
   */
  enableDecimalScale?: number;
  /**
   * @example
   * col_a,col_b
   */
  filterColumnName?: string;
  /**
   * @example
   * col_a,col_b
   */
  filterColumns?: string;
  /**
   * @example
   * 2
   */
  floatPrecision?: number;
  /**
   * @example
   * 0
   */
  ignoreDecimalDiff?: number;
  /**
   * @example
   * 0
   */
  ignoreDecimalScaleSuffixZero?: number;
  /**
   * @example
   * 0
   */
  ignoreEmptyDiff?: number;
  /**
   * @example
   * 0
   */
  ignoreNumericZero?: number;
  /**
   * @example
   * 0
   */
  ignoreStringEmpty?: number;
  /**
   * @example
   * 0
   */
  ignoreZeroDiff?: number;
  /**
   * @example
   * 1
   */
  isCountCheck?: number;
  /**
   * @example
   * 1001
   */
  ruleId?: string;
  /**
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

export class UpdateDataCheckTemplateRequestDsEngineRels extends $dara.Model {
  /**
   * @example
   * 1001
   */
  dsEngineId?: string;
  /**
   * @example
   * Hive
   */
  dsType?: string;
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

export class UpdateDataCheckTemplateRequestFulltextRule extends $dara.Model {
  /**
   * @example
   * 0
   */
  checkMode?: number;
  /**
   * @example
   * 0
   */
  columnEqualCmpType?: number;
  /**
   * @example
   * ARRAY,MAP
   */
  columnEqualCmpValues?: string;
  /**
   * @example
   * 0
   */
  columnIsCosine?: number;
  /**
   * @example
   * 0
   */
  columnIsIgnoreNull?: number;
  /**
   * @example
   * 0
   */
  columnIsIgnoreZero?: number;
  /**
   * @example
   * 0
   */
  columnIsSamples?: number;
  /**
   * @example
   * 0
   */
  columnSamplesType?: number;
  /**
   * @example
   * 100
   */
  columnSamplesValue?: number;
  /**
   * @example
   * 0
   */
  columnSizeCmpType?: number;
  /**
   * @example
   * ARRAY,MAP
   */
  columnSizeCmpValues?: string;
  /**
   * @example
   * 1
   */
  isPrimaryKeyCheck?: number;
  /**
   * @example
   * 0
   */
  lineCheckType?: number;
  /**
   * @example
   * 0
   */
  lineIsPrintAll?: number;
  /**
   * @example
   * 0
   */
  lineIsSamples?: number;
  /**
   * @example
   * 0
   */
  lineSamplesType?: number;
  /**
   * @example
   * 100
   */
  lineSamplesValue?: number;
  /**
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

export class UpdateDataCheckTemplateRequestMetricRules extends $dara.Model {
  /**
   * @example
   * SUM,AVG
   */
  checkMethods?: string;
  /**
   * @example
   * 0
   */
  controlFloatPrecision?: number;
  /**
   * @example
   * 0
   */
  dataTypeClassify?: number;
  /**
   * @example
   * 0
   */
  dataTypeGroup?: number;
  dataTypeList?: string[];
  /**
   * @example
   * BIGINT
   */
  dataTypes?: string;
  /**
   * @example
   * 0
   */
  diffTolerateType?: number;
  diffTolerateValues?: { [key: string]: any };
  /**
   * @example
   * 0
   */
  enableDecimalScale?: number;
  /**
   * @example
   * col_a,col_b
   */
  filterColumnName?: string;
  /**
   * @example
   * col_a,col_b
   */
  filterColumns?: string;
  /**
   * @example
   * 2
   */
  floatPrecision?: number;
  /**
   * @example
   * 0
   */
  ignoreDecimalDiff?: number;
  /**
   * @example
   * 0
   */
  ignoreDecimalScaleSuffixZero?: number;
  /**
   * @example
   * 0
   */
  ignoreEmptyDiff?: number;
  /**
   * @example
   * 0
   */
  ignoreNumericZero?: number;
  /**
   * @example
   * 0
   */
  ignoreStringEmpty?: number;
  /**
   * @example
   * 0
   */
  ignoreZeroDiff?: number;
  /**
   * @example
   * 1
   */
  isCountCheck?: number;
  /**
   * @example
   * 1001
   */
  ruleId?: string;
  /**
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

export class UpdateDataCheckTemplateRequestNullRules extends $dara.Model {
  /**
   * @example
   * 0
   */
  dataTypeGroup?: number;
  /**
   * @example
   * {}
   */
  nullValues?: string;
  /**
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

export class UpdateDataCheckTemplateRequestWeakContentRule extends $dara.Model {
  /**
   * @example
   * ^col_.*$
   */
  filterColumnExpression?: string;
  filterColumnTypes?: string[];
  /**
   * @example
   * 1001
   */
  ruleId?: string;
  /**
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

export class UpdateDataCheckTemplateRequest extends $dara.Model {
  basicMetricRules?: UpdateDataCheckTemplateRequestBasicMetricRules[];
  /**
   * @example
   * 1
   */
  checkType?: number;
  complexMetricRules?: UpdateDataCheckTemplateRequestComplexMetricRules[];
  dsEngineRels?: UpdateDataCheckTemplateRequestDsEngineRels[];
  fulltextRule?: UpdateDataCheckTemplateRequestFulltextRule;
  metricRules?: UpdateDataCheckTemplateRequestMetricRules[];
  nullRules?: UpdateDataCheckTemplateRequestNullRules[];
  /**
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @example
   * 数据量校验模板描述
   */
  templateDesc?: string;
  /**
   * @example
   * 1001
   */
  templateId?: string;
  /**
   * @example
   * 数据量校验模板
   */
  templateName?: string;
  weakContentRule?: UpdateDataCheckTemplateRequestWeakContentRule;
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
      templateId: 'templateId',
      templateName: 'templateName',
      weakContentRule: 'weakContentRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicMetricRules: { 'type': 'array', 'itemType': UpdateDataCheckTemplateRequestBasicMetricRules },
      checkType: 'number',
      complexMetricRules: { 'type': 'array', 'itemType': UpdateDataCheckTemplateRequestComplexMetricRules },
      dsEngineRels: { 'type': 'array', 'itemType': UpdateDataCheckTemplateRequestDsEngineRels },
      fulltextRule: UpdateDataCheckTemplateRequestFulltextRule,
      metricRules: { 'type': 'array', 'itemType': UpdateDataCheckTemplateRequestMetricRules },
      nullRules: { 'type': 'array', 'itemType': UpdateDataCheckTemplateRequestNullRules },
      requestId: 'string',
      templateDesc: 'string',
      templateId: 'string',
      templateName: 'string',
      weakContentRule: UpdateDataCheckTemplateRequestWeakContentRule,
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

