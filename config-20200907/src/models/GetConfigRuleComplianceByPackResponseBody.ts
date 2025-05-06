// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult } from "./GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult";


export class GetConfigRuleComplianceByPackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the compliance evaluation results returned.
   */
  configRuleComplianceResult?: GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleComplianceResult: 'ConfigRuleComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleComplianceResult: GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.configRuleComplianceResult && typeof (this.configRuleComplianceResult as any).validate === 'function') {
      (this.configRuleComplianceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

