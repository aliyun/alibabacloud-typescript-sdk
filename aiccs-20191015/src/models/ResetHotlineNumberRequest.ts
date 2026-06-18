// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetHotlineNumberRequestOutboundRangeList extends $dara.Model {
  /**
   * @remarks
   * Effective department ID.
   * 
   * @example
   * 123456
   */
  departmentId?: number;
  /**
   * @remarks
   * List of effective skill groups.
   * 
   * > If the skill group list is empty, the setting applies to the entire department. Otherwise, it applies only to the specified skill groups under the department.
   */
  groupIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      groupIdList: 'GroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      groupIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.groupIdList)) {
      $dara.Model.validateArray(this.groupIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetHotlineNumberRequest extends $dara.Model {
  /**
   * @remarks
   * Number description.
   * 
   * This parameter is required.
   * 
   * @example
   * 热线号码
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the number is used for inbound calls.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableInbound?: boolean;
  /**
   * @remarks
   * Whether inbound call satisfaction evaluation is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableInboundEvaluation?: boolean;
  /**
   * @remarks
   * Whether used for outbound calls.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableOutbound?: boolean;
  /**
   * @remarks
   * Indicates whether outbound satisfaction evaluation is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableOutboundEvaluation?: boolean;
  /**
   * @remarks
   * Satisfaction level. Valid values:
   * 
   * - **2**: Two-level (Satisfied, Not Satisfied)
   * - **3**: Three-level (Satisfied, Neutral, Not Satisfied)
   * - **4**: Four-level (Very Satisfied, Satisfied, Neutral, Not Satisfied)
   * - **5**: Five-level (Very Satisfied, Satisfied, Neutral, Not Satisfied, Very Poor)
   * 
   * @example
   * 2
   */
  evaluationLevel?: number;
  /**
   * @remarks
   * Hotline number.
   * 
   * This parameter is required.
   * 
   * @example
   * 0571********
   */
  hotlineNumber?: string;
  /**
   * @remarks
   * The IVR flow ID for inbound calls.
   * 
   * @example
   * 123456
   */
  inboundFlowId?: number;
  /**
   * @remarks
   * The Artificial Intelligence Cloud Call Service (AICCS) instance ID. You can obtain it from the console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether outbound calls apply to all departments.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  outboundAllDepart?: boolean;
  /**
   * @remarks
   * Outbound call effective scope.
   */
  outboundRangeList?: ResetHotlineNumberRequestOutboundRangeList[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enableInbound: 'EnableInbound',
      enableInboundEvaluation: 'EnableInboundEvaluation',
      enableOutbound: 'EnableOutbound',
      enableOutboundEvaluation: 'EnableOutboundEvaluation',
      evaluationLevel: 'EvaluationLevel',
      hotlineNumber: 'HotlineNumber',
      inboundFlowId: 'InboundFlowId',
      instanceId: 'InstanceId',
      outboundAllDepart: 'OutboundAllDepart',
      outboundRangeList: 'OutboundRangeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enableInbound: 'boolean',
      enableInboundEvaluation: 'boolean',
      enableOutbound: 'boolean',
      enableOutboundEvaluation: 'boolean',
      evaluationLevel: 'number',
      hotlineNumber: 'string',
      inboundFlowId: 'number',
      instanceId: 'string',
      outboundAllDepart: 'boolean',
      outboundRangeList: { 'type': 'array', 'itemType': ResetHotlineNumberRequestOutboundRangeList },
    };
  }

  validate() {
    if(Array.isArray(this.outboundRangeList)) {
      $dara.Model.validateArray(this.outboundRangeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

