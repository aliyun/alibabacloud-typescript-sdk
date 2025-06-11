// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectStepsResponseBodyDataExtraInfoErrorDetails extends $dara.Model {
  /**
   * @example
   * CM-RESOAT1111
   */
  code?: string;
  extraContext?: { [key: string]: any };
  /**
   * @example
   * ERROR
   */
  level?: string;
  /**
   * @example
   * A system error occurred.
   */
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  /**
   * @example
   * null
   */
  messageMcmsKey?: string;
  /**
   * @example
   * null
   */
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  /**
   * @example
   * null
   */
  proposalMcmsKey?: string;
  /**
   * @example
   * null
   */
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  /**
   * @example
   * null
   */
  reasonMcmsKey?: string;
  /**
   * @example
   * null
   */
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  validate() {
    if(this.extraContext) {
      $dara.Model.validateMap(this.extraContext);
    }
    if(this.messageMcmsContext) {
      $dara.Model.validateMap(this.messageMcmsContext);
    }
    if(this.proposalMcmsContext) {
      $dara.Model.validateMap(this.proposalMcmsContext);
    }
    if(this.reasonMcmsContext) {
      $dara.Model.validateMap(this.reasonMcmsContext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

