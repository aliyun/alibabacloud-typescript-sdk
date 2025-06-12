// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPoliciesRequestTag } from "./ListPoliciesRequestTag";


export class ListPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The `marker`. If part of a previous response is truncated, you can use this parameter to obtain the truncated part.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The number of entries to return. If a response is truncated because it reaches the value of `MaxItems`, the value of `IsTruncated` will be `true`.
   * 
   * Valid values: 1 to 1000. Default value: 100.
   * 
   * @example
   * 100
   */
  maxItems?: number;
  /**
   * @remarks
   * The type of the policies. Valid values: `System` and `Custom`. If you do not specify the parameter, all policies are returned.``
   * 
   * @example
   * System
   */
  policyType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListPoliciesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
      policyType: 'PolicyType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
      policyType: 'string',
      tag: { 'type': 'array', 'itemType': ListPoliciesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

