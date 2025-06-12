// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPoliciesResponseBodyPolicies } from "./ListPoliciesResponseBodyPolicies";


export class ListPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the response is truncated.
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The marker. This parameter is returned only if the value of `IsTruncated` is `true`. If the parameter is returned, you can call this operation again and set `Marker` to obtain the truncated part.``
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The information about the policies.
   */
  policies?: ListPoliciesResponseBodyPolicies;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      marker: 'string',
      policies: ListPoliciesResponseBodyPolicies,
      requestId: 'string',
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

