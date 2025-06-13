// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityPolicyRelationsRequest extends $dara.Model {
  /**
   * @remarks
   * The security policy IDs. You can specify up to five IDs.
   * 
   * This parameter is required.
   */
  securityPolicyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      securityPolicyIds: 'SecurityPolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityPolicyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityPolicyIds)) {
      $dara.Model.validateArray(this.securityPolicyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

