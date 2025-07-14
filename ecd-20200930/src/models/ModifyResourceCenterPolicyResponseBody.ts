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

export class ModifyResourceCenterPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The modification results.
   */
  modifyResults?: ModifyResourceCenterPolicyResponseBodyModifyResults[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51592A88-0F2C-55E6-AD2C-2AD9C10D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modifyResults: 'ModifyResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyResults: { 'type': 'array', 'itemType': ModifyResourceCenterPolicyResponseBodyModifyResults },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modifyResults)) {
      $dara.Model.validateArray(this.modifyResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

