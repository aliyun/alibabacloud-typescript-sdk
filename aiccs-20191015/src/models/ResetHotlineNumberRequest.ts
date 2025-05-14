// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResetHotlineNumberRequestOutboundRangeList } from "./ResetHotlineNumberRequestOutboundRangeList";


export class ResetHotlineNumberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableInbound?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableInboundEvaluation?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableOutbound?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableOutboundEvaluation?: boolean;
  /**
   * @example
   * 2
   */
  evaluationLevel?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0571********
   */
  hotlineNumber?: string;
  /**
   * @example
   * 123456
   */
  inboundFlowId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  outboundAllDepart?: boolean;
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

