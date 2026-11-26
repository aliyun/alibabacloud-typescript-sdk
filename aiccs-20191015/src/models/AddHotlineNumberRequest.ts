// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddHotlineNumberRequestOutboundRangeList extends $dara.Model {
  /**
   * @remarks
   * The ID of the effective department.
   * 
   * @example
   * 123456
   */
  departmentId?: number;
  /**
   * @remarks
   * The list of effective skill groups.
   * > If the skill group list is empty, the configuration applies to the entire department. Otherwise, it applies only to the specified skill groups under the department.
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

export class AddHotlineNumberRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the hotline number.
   * 
   * This parameter is required.
   * 
   * @example
   * Hotline number
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the hotline number is used for inbound calls.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableInbound?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the satisfaction survey for inbound calls.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableInboundEvaluation?: boolean;
  /**
   * @remarks
   * Specifies whether the hotline number is used for outbound calls.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableOutbound?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the satisfaction survey for outbound calls.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableOutboundEvaluation?: boolean;
  /**
   * @remarks
   * The satisfaction level. Valid values:
   * 
   * - **2**: Level 2 (Satisfied, Dissatisfied).
   * - **3**: Level 3 (Satisfied, Neutral, Dissatisfied).
   * - **4**: Level 4 (Very satisfied, Satisfied, Neutral, Dissatisfied).
   * - **5**: Level 5 (Very satisfied, Satisfied, Neutral, Dissatisfied, Very dissatisfied).
   * 
   * @example
   * 2
   */
  evaluationLevel?: number;
  /**
   * @remarks
   * The hotline number.
   * 
   * This parameter is required.
   * 
   * @example
   * 05710000****
   */
  hotlineNumber?: string;
  /**
   * @remarks
   * The ID of the inbound IVR flow. You can obtain the ID from the Hotline > Channel Access > IVR Flow Management page in the SaaS workspace.
   * 
   * @example
   * 123456
   */
  inboundFlowId?: number;
  /**
   * @remarks
   * The Artificial Intelligence Cloud Call Service instance ID. You can obtain the ID from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether outbound calls apply to all departments under the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  outboundAllDepart?: boolean;
  /**
   * @remarks
   * The effective scope of outbound calls.
   */
  outboundRangeList?: AddHotlineNumberRequestOutboundRangeList[];
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
      outboundRangeList: { 'type': 'array', 'itemType': AddHotlineNumberRequestOutboundRangeList },
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

