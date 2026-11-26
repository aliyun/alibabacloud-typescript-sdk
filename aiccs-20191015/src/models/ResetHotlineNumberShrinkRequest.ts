// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetHotlineNumberShrinkRequest extends $dara.Model {
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
   * The satisfaction survey level. Valid values:
   * 
   * - **2**: level 2 (satisfied, dissatisfied)
   * - **3**: level 3 (satisfied, neutral, dissatisfied)
   * - **4**: level 4 (very satisfied, satisfied, neutral, dissatisfied)
   * - **5**: level 5 (very satisfied, satisfied, neutral, dissatisfied, very poor)
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
   * 0571********
   */
  hotlineNumber?: string;
  /**
   * @remarks
   * The ID of the inbound Interactive Voice Response (IVR) flow.
   * 
   * @example
   * 123456
   */
  inboundFlowId?: number;
  /**
   * @remarks
   * Instance ID of the Artificial Intelligence Cloud Call Service (AICCS) instance. You can obtain instance ID from the AICCS console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether outbound calls apply to all departments.
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
  outboundRangeListShrink?: string;
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
      outboundRangeListShrink: 'OutboundRangeList',
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
      outboundRangeListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

