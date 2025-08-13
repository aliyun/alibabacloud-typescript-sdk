// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVariableDetailResponseBodyResultObjectBaseInfo extends $dara.Model {
  /**
   * @remarks
   * Whether variable binding is allowed
   * 
   * @example
   * ENABLE
   */
  allowBind?: string;
  /**
   * @remarks
   * Charging mode
   * 
   * @example
   * FREE
   */
  chargingMode?: string;
  /**
   * @remarks
   * Charging mode description
   * 
   * @example
   * 免费
   */
  chargingModeDesc?: string;
  /**
   * @remarks
   * Creator.
   * 
   * @example
   * 176020
   */
  creator?: string;
  /**
   * @remarks
   * Data distribution display, in JSON format
   * 
   * @example
   * {}
   */
  dataDisplay?: string;
  /**
   * @remarks
   * Data valid range, left-closed and right-closed
   * 
   * @example
   * (0,10)
   */
  dataThreshold?: string;
  /**
   * @remarks
   * Deduction factor
   * 
   * @example
   * 10
   */
  deductionFactor?: number;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * Front-end binding allowed
   * 
   * @example
   * ENABLE
   */
  frontAllowBind?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1698143758000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 1698143758000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Primary key ID
   * 
   * @example
   * 3144
   */
  id?: number;
  /**
   * @remarks
   * Required parameters
   *      
   *      When inputRequired=__all__, it means all parameters are required
   *      When inputRequired=__one__, it means only one input is needed
   *      Required fields are separated by commas, e.g., mobile,ip,email
   * 
   * @example
   * __one__
   */
  inputRequired?: string;
  /**
   * @remarks
   * Input parameters.
   * 
   * @example
   * ip,age,mobile
   */
  inputs?: string;
  /**
   * @remarks
   * Input parameter description.
   * 
   * @example
   * ip,年龄,手机号
   */
  inputsDesc?: string;
  /**
   * @remarks
   * Invoke key
   * 
   * @example
   * onlineScamDetectionTags_v
   */
  invokeKey?: string;
  /**
   * @remarks
   * Invoke RT, unit: milliseconds
   * 
   * @example
   * 10
   */
  invokeRt?: number;
  /**
   * @remarks
   * Invocation success rate
   * 
   * @example
   * 100
   */
  invokeSuccessRate?: string;
  /**
   * @remarks
   * Number of invocations
   * 
   * @example
   * 100000
   */
  invokeTimes?: number;
  /**
   * @remarks
   * Last modifier.
   * 
   * @example
   * root
   */
  lastModifiedOperator?: string;
  /**
   * @remarks
   * Variable name
   * 
   * @example
   * __onlineScamDetectionTags__
   */
  name?: string;
  /**
   * @remarks
   * Output
   * 
   * @example
   * STRING
   */
  outputs?: string;
  /**
   * @remarks
   * Output description
   * 
   * @example
   * 字符串
   */
  outputsDesc?: string;
  /**
   * @remarks
   * Code of applicable scenarios
   */
  scene?: string[];
  /**
   * @remarks
   * Applicable scenario description
   */
  sceneDesc?: string[];
  /**
   * @remarks
   * Display order
   * 
   * @example
   * 10
   */
  showOrder?: string;
  /**
   * @remarks
   * Source
   * 
   * @example
   * SAF
   */
  source?: string;
  /**
   * @remarks
   * Source description
   * 
   * @example
   * 风险识别
   */
  sourceDesc?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * List of supported regions.
   */
  supportRegions?: string[];
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 诈骗引流识别_标签
   */
  title?: string;
  /**
   * @remarks
   * Type
   * 
   * @example
   * NATIVE
   */
  type?: string;
  /**
   * @remarks
   * Category description
   * 
   * @example
   * 事件字段
   */
  typeDesc?: string;
  /**
   * @remarks
   * X-axis label for data distribution display
   * 
   * @example
   * 10
   */
  xLabel?: string;
  /**
   * @remarks
   * Data distribution display y-axis label
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
   * Basic attributes.
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
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
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

