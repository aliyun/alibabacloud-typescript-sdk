// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPoliciesResponseBodyPoliciesPolicy extends $dara.Model {
  attachmentCount?: number;
  createDate?: string;
  defaultVersion?: string;
  description?: string;
  policyName?: string;
  policyType?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'number',
      createDate: 'string',
      defaultVersion: 'string',
      description: 'string',
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

export class ListPoliciesResponseBodyPolicies extends $dara.Model {
  policy?: ListPoliciesResponseBodyPoliciesPolicy[];
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: { 'type': 'array', 'itemType': ListPoliciesResponseBodyPoliciesPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.policy)) {
      $dara.Model.validateArray(this.policy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  policies?: ListPoliciesResponseBodyPolicies;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policies: 'Policies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      policies: ListPoliciesResponseBodyPolicies,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.policies && typeof (this.policies as any).validate === 'function') {
      (this.policies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

