// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListControlPoliciesResponseBodyControlPoliciesControlPolicy extends $dara.Model {
  attachmentCount?: string;
  createDate?: string;
  description?: string;
  effectScope?: string;
  policyId?: string;
  policyName?: string;
  policyType?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      description: 'Description',
      effectScope: 'EffectScope',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'string',
      createDate: 'string',
      description: 'string',
      effectScope: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPoliciesResponseBodyControlPolicies extends $dara.Model {
  controlPolicy?: ListControlPoliciesResponseBodyControlPoliciesControlPolicy[];
  static names(): { [key: string]: string } {
    return {
      controlPolicy: 'ControlPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicy: { 'type': 'array', 'itemType': ListControlPoliciesResponseBodyControlPoliciesControlPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.controlPolicy)) {
      $dara.Model.validateArray(this.controlPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPoliciesResponseBody extends $dara.Model {
  controlPolicies?: ListControlPoliciesResponseBodyControlPolicies;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9424A34C-3471-45AD-B6AB-924BBDFE42F9
   */
  requestId?: string;
  /**
   * @remarks
   * The number of access control policies.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      controlPolicies: 'ControlPolicies',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicies: ListControlPoliciesResponseBodyControlPolicies,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.controlPolicies && typeof (this.controlPolicies as any).validate === 'function') {
      (this.controlPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

