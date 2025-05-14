// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RealTimeDialogResponseBodyChoicesDelta extends $dara.Model {
  /**
   * @example
   * null
   */
  analysisProcess?: string;
  /**
   * @remarks
   * time
   * 
   * @example
   * null
   */
  callTime?: string;
  /**
   * @example
   * false
   */
  hangUpDialog?: boolean;
  /**
   * @example
   * 1853360771162058752
   */
  intentionCode?: string;
  intentionName?: string;
  intentionScript?: string;
  interrupt?: boolean;
  /**
   * @example
   * null
   */
  recommendIntention?: string;
  /**
   * @example
   * null
   */
  recommendScript?: string;
  selfDirectedScript?: string;
  selfDirectedScriptFullContent?: string;
  static names(): { [key: string]: string } {
    return {
      analysisProcess: 'analysisProcess',
      callTime: 'callTime',
      hangUpDialog: 'hangUpDialog',
      intentionCode: 'intentionCode',
      intentionName: 'intentionName',
      intentionScript: 'intentionScript',
      interrupt: 'interrupt',
      recommendIntention: 'recommendIntention',
      recommendScript: 'recommendScript',
      selfDirectedScript: 'selfDirectedScript',
      selfDirectedScriptFullContent: 'selfDirectedScriptFullContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisProcess: 'string',
      callTime: 'string',
      hangUpDialog: 'boolean',
      intentionCode: 'string',
      intentionName: 'string',
      intentionScript: 'string',
      interrupt: 'boolean',
      recommendIntention: 'string',
      recommendScript: 'string',
      selfDirectedScript: 'string',
      selfDirectedScriptFullContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

