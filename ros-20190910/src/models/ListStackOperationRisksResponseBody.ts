// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStackOperationRisksResponseBodyRiskResources } from "./ListStackOperationRisksResponseBodyRiskResources";


export class ListStackOperationRisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operations on which the permissions are not granted to the Alibaba Cloud account of the caller.
   */
  missingPolicyActions?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 72108E7A-E874-4A5E-B22C-A61E94AD12CD
   */
  requestId?: string;
  /**
   * @remarks
   * The resources that are at risk.
   */
  riskResources?: ListStackOperationRisksResponseBodyRiskResources[];
  static names(): { [key: string]: string } {
    return {
      missingPolicyActions: 'MissingPolicyActions',
      requestId: 'RequestId',
      riskResources: 'RiskResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      missingPolicyActions: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      riskResources: { 'type': 'array', 'itemType': ListStackOperationRisksResponseBodyRiskResources },
    };
  }

  validate() {
    if(Array.isArray(this.missingPolicyActions)) {
      $dara.Model.validateArray(this.missingPolicyActions);
    }
    if(Array.isArray(this.riskResources)) {
      $dara.Model.validateArray(this.riskResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

