// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCasesResponseBodyDataList extends $dara.Model {
  abandonPhase?: string;
  /**
   * @example
   * NA
   */
  abandonType?: string;
  /**
   * @example
   * 1
   */
  attemptCount?: number;
  /**
   * @example
   * 60ecb1a2-4480-4d01-bede-c5b7655bfadf
   */
  caseId?: string;
  customVariables?: string;
  failureReason?: string;
  /**
   * @example
   * 1888888****
   */
  phoneNumber?: string;
  /**
   * @example
   * Connected
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      abandonPhase: 'AbandonPhase',
      abandonType: 'AbandonType',
      attemptCount: 'AttemptCount',
      caseId: 'CaseId',
      customVariables: 'CustomVariables',
      failureReason: 'FailureReason',
      phoneNumber: 'PhoneNumber',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonPhase: 'string',
      abandonType: 'string',
      attemptCount: 'number',
      caseId: 'string',
      customVariables: 'string',
      failureReason: 'string',
      phoneNumber: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

