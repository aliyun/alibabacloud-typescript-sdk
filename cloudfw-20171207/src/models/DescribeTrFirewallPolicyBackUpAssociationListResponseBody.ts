// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTrFirewallPolicyBackUpAssociationListResponseBodyPolicyAssociationBackupConfigs } from "./DescribeTrFirewallPolicyBackUpAssociationListResponseBodyPolicyAssociationBackupConfigs";


export class DescribeTrFirewallPolicyBackUpAssociationListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The route tables.
   */
  policyAssociationBackupConfigs?: DescribeTrFirewallPolicyBackUpAssociationListResponseBodyPolicyAssociationBackupConfigs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C264A756-9B48-57E3-B312-716941E146C6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyAssociationBackupConfigs: 'PolicyAssociationBackupConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyAssociationBackupConfigs: { 'type': 'array', 'itemType': DescribeTrFirewallPolicyBackUpAssociationListResponseBodyPolicyAssociationBackupConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyAssociationBackupConfigs)) {
      $dara.Model.validateArray(this.policyAssociationBackupConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

