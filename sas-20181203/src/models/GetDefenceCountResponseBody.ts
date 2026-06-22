// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDefenceCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of alerts handled by accurate access control in the last 15 days.
   * 
   * @example
   * 1
   */
  defenceCount15Days?: number;
  /**
   * @remarks
   * The total number of alerts handled by accurate access control.
   * 
   * @example
   * 1
   */
  defenceCountTotal?: number;
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 89AD16CC-97EE-50F3-9B12-9E28E5C8****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of security alerts that have been handled in Security Center.
   * 
   * @example
   * 3
   */
  suspiciousDealtCount?: number;
  /**
   * @remarks
   * The number of alerting events handled by web tamper-proofing in the last 15 days.
   * 
   * @example
   * 2
   */
  tamperProof15Days?: number;
  /**
   * @remarks
   * The total number of alerting events handled by web tamper-proofing.
   * 
   * @example
   * 1
   */
  tamperProofTotal?: number;
  static names(): { [key: string]: string } {
    return {
      defenceCount15Days: 'DefenceCount15Days',
      defenceCountTotal: 'DefenceCountTotal',
      requestId: 'RequestId',
      suspiciousDealtCount: 'SuspiciousDealtCount',
      tamperProof15Days: 'TamperProof15Days',
      tamperProofTotal: 'TamperProofTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenceCount15Days: 'number',
      defenceCountTotal: 'number',
      requestId: 'string',
      suspiciousDealtCount: 'number',
      tamperProof15Days: 'number',
      tamperProofTotal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

