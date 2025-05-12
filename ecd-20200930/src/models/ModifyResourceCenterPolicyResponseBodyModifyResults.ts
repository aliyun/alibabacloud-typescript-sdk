// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyResourceCenterPolicyResponseBodyModifyResults extends $dara.Model {
  /**
   * @remarks
   * The verification result.
   * 
   * @example
   * true
   */
  checkResult?: boolean;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * ecd-e254cpyt9bb*****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'CheckResult',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: 'boolean',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

