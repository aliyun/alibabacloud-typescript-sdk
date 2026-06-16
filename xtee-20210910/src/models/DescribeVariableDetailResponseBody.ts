// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVariableDetailResponseBodyResultObjectBaseInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether variable binding is allowed. Valid values:
   * - **DISABLE**: unavailable
   * - **ALL**: all
   * - **ENABLE**: available
   * - **PART_ENABLE**: partially available.
   * 
   * @example
   * ENABLE
   */
  allowBind?: string;
  /**
   * @remarks
   * The billing mode. Valid values:
   * - **PAY_PER_VIEW**: paid
   * - **FREE**: free.
   * 
   * @example
   * FREE
   */
  chargingMode?: string;
  /**
   * @remarks
   * The billing mode description.
   * 
   * @example
   * 免费
   */
  chargingModeDesc?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 176020
   */
  creator?: string;
  /**
   * @remarks
   * The data distribution display in JSON format.
   * 
   * @example
   * {}
   */
  dataDisplay?: string;
  /**
   * @remarks
   * The valid data range, inclusive on both ends.
   * 
   * @example
   * (0,10)
   */
  dataThreshold?: string;
  /**
   * @remarks
   * The deduction coefficient.
   * 
   * @example
   * 10
   */
  deductionFactor?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether front-end binding is allowed. Valid values:
   * - **DISABLE**: not allowed
   * - **ENABLE**: allowed.
   * 
   * @example
   * ENABLE
   */
  frontAllowBind?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1698143758000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1698143758000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 3144
   */
  id?: number;
  /**
   * @remarks
   * The required parameters.
   *      
   * When inputRequired is set to __all__, all parameters are required.
   * When inputRequired is set to __one__, only one input parameter is required.
   * Required fields are separated by commas, such as mobile,ip,email.
   * 
   * @example
   * __one__
   */
  inputRequired?: string;
  /**
   * @remarks
   * The input parameters.
   * 
   * @example
   * ip,age,mobile
   */
  inputs?: string;
  /**
   * @remarks
   * The input parameter description.
   * 
   * @example
   * ip,年龄,手机号
   */
  inputsDesc?: string;
  /**
   * @remarks
   * The invocation key.
   * 
   * @example
   * onlineScamDetectionTags_v
   */
  invokeKey?: string;
  /**
   * @remarks
   * The invocation response time, in milliseconds.
   * 
   * @example
   * 10
   */
  invokeRt?: number;
  /**
   * @remarks
   * The invocation success rate.
   * 
   * @example
   * 100
   */
  invokeSuccessRate?: string;
  /**
   * @remarks
   * The number of invocations.
   * 
   * @example
   * 100000
   */
  invokeTimes?: number;
  /**
   * @remarks
   * The last modifier.
   * 
   * @example
   * root
   */
  lastModifiedOperator?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * __onlineScamDetectionTags__
   */
  name?: string;
  /**
   * @remarks
   * The outputs.
   * 
   * @example
   * STRING
   */
  outputs?: string;
  /**
   * @remarks
   * The output description.
   * 
   * @example
   * 字符串
   */
  outputsDesc?: string;
  /**
   * @remarks
   * The applicable scenario code.
   */
  scene?: string[];
  /**
   * @remarks
   * The applicable scenario description.
   */
  sceneDesc?: string[];
  /**
   * @remarks
   * The display order.
   * 
   * @example
   * 10
   */
  showOrder?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * SAF
   */
  source?: string;
  /**
   * @remarks
   * The source description.
   * 
   * @example
   * 风险识别
   */
  sourceDesc?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The list of supported regions.
   */
  supportRegions?: string[];
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 诈骗引流识别_标签
   */
  title?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * NATIVE
   */
  type?: string;
  /**
   * @remarks
   * The category description.
   * 
   * @example
   * 事件字段
   */
  typeDesc?: string;
  /**
   * @remarks
   * The X-axis label for the data distribution chart.
   * 
   * @example
   * 10
   */
  xLabel?: string;
  /**
   * @remarks
   * The Y-axis label for the data distribution chart.
   * 
   * @example
   * 10
   */
  yLabel?: string;
  static names(): { [key: string]: string } {
    return {
      allowBind: 'allowBind',
      chargingMode: 'chargingMode',
      chargingModeDesc: 'chargingModeDesc',
      creator: 'creator',
      dataDisplay: 'dataDisplay',
      dataThreshold: 'dataThreshold',
      deductionFactor: 'deductionFactor',
      description: 'description',
      frontAllowBind: 'frontAllowBind',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      inputRequired: 'inputRequired',
      inputs: 'inputs',
      inputsDesc: 'inputsDesc',
      invokeKey: 'invokeKey',
      invokeRt: 'invokeRt',
      invokeSuccessRate: 'invokeSuccessRate',
      invokeTimes: 'invokeTimes',
      lastModifiedOperator: 'lastModifiedOperator',
      name: 'name',
      outputs: 'outputs',
      outputsDesc: 'outputsDesc',
      scene: 'scene',
      sceneDesc: 'sceneDesc',
      showOrder: 'showOrder',
      source: 'source',
      sourceDesc: 'sourceDesc',
      status: 'status',
      supportRegions: 'supportRegions',
      title: 'title',
      type: 'type',
      typeDesc: 'typeDesc',
      xLabel: 'xLabel',
      yLabel: 'yLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowBind: 'string',
      chargingMode: 'string',
      chargingModeDesc: 'string',
      creator: 'string',
      dataDisplay: 'string',
      dataThreshold: 'string',
      deductionFactor: 'number',
      description: 'string',
      frontAllowBind: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      inputRequired: 'string',
      inputs: 'string',
      inputsDesc: 'string',
      invokeKey: 'string',
      invokeRt: 'number',
      invokeSuccessRate: 'string',
      invokeTimes: 'number',
      lastModifiedOperator: 'string',
      name: 'string',
      outputs: 'string',
      outputsDesc: 'string',
      scene: { 'type': 'array', 'itemType': 'string' },
      sceneDesc: { 'type': 'array', 'itemType': 'string' },
      showOrder: 'string',
      source: 'string',
      sourceDesc: 'string',
      status: 'string',
      supportRegions: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      type: 'string',
      typeDesc: 'string',
      xLabel: 'string',
      yLabel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scene)) {
      $dara.Model.validateArray(this.scene);
    }
    if(Array.isArray(this.sceneDesc)) {
      $dara.Model.validateArray(this.sceneDesc);
    }
    if(Array.isArray(this.supportRegions)) {
      $dara.Model.validateArray(this.supportRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVariableDetailResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The basic properties.
   */
  baseInfo?: DescribeVariableDetailResponseBodyResultObjectBaseInfo;
  static names(): { [key: string]: string } {
    return {
      baseInfo: 'baseInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseInfo: DescribeVariableDetailResponseBodyResultObjectBaseInfo,
    };
  }

  validate() {
    if(this.baseInfo && typeof (this.baseInfo as any).validate === 'function') {
      (this.baseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVariableDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeVariableDetailResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeVariableDetailResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

