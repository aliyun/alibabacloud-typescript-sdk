// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddHotlineNumberShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Description of the number.
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
   * Whether inbound satisfaction evaluation is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableInboundEvaluation?: boolean;
  /**
   * @remarks
   * Whether it is used for outbound calls.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableOutbound?: boolean;
  /**
   * @remarks
   * Indicates whether outbound call satisfaction evaluation is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableOutboundEvaluation?: boolean;
  /**
   * @remarks
   * Satisfaction Level. Valid values:  
   * 
   * - **2**: Two-level (Satisfied, Not satisfied)  
   * - **3**: Three-level (Satisfied, Neutral, Not satisfied)  
   * - **4**: Four-level (Very satisfied, Satisfied, Neutral, Not satisfied)  
   * - **5**: Five-level (Very satisfied, Satisfied, Neutral, Not satisfied, Very poor)
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
   * 05710000****
   */
  hotlineNumber?: string;
  /**
   * @remarks
   * The IVR flow ID for inbound calls. You can obtain it on the SaaS Workbench > Channel Integration > IVR Flow Management page.
   * 
   * @example
   * 123456
   */
  inboundFlowId?: number;
  /**
   * @remarks
   * The Artificial Intelligence Cloud Call Service (AICCS) instance ID. You can obtain it in the Intelligent Contact Center console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * Whether outbound calls apply to all departments under the instance.
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

