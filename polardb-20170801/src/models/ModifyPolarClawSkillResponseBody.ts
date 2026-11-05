// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolarClawSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The evaluation status.
   * 
   * @example
   * 2
   */
  evaluateStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 925B84D9-CA72-432C-95CF-738C22******
   */
  requestId?: string;
  /**
   * @remarks
   * The baseline risk details.
   * 
   * @example
   * riskDetail
   */
  riskDetail?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      evaluateStatus: 'EvaluateStatus',
      requestId: 'RequestId',
      riskDetail: 'RiskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      evaluateStatus: 'string',
      requestId: 'string',
      riskDetail: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

