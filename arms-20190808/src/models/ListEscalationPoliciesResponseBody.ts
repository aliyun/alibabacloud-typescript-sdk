// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEscalationPoliciesResponseBodyPageBeanEscalationPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the escalation policy.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The name of the escalation policy.
   * 
   * @example
   * prod escalation policy
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPoliciesResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The list of escalation policies.
   */
  escalationPolicies?: ListEscalationPoliciesResponseBodyPageBeanEscalationPolicies[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      escalationPolicies: 'EscalationPolicies',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationPolicies: { 'type': 'array', 'itemType': ListEscalationPoliciesResponseBodyPageBeanEscalationPolicies },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.escalationPolicies)) {
      $dara.Model.validateArray(this.escalationPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEscalationPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned objects.
   */
  pageBean?: ListEscalationPoliciesResponseBodyPageBean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 78901766-3806-4E96-8E47-CFEF59E4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: ListEscalationPoliciesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

