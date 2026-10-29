// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgenticSecurityPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include archived policies in the query scope of user policies. Valid values:
   * - true: Includes archived policies.
   * - false: Does not include archived policies.
   * Default value: false. When querying archived policies, do not specify PolicyStatus. If ON or OFF is specified, only user policies in the corresponding state are returned. This parameter does not affect system default policies.
   */
  includeArchived?: boolean;
  /**
   * @remarks
   * The page number of the user policies to query. Pages start from 1. Default value: 1. Only user policies are paginated. System default policies are returned separately in each call.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The filter condition for the user policy status. Valid values: ON (enabled) and OFF (disabled). If this parameter is not specified or contains only whitespace characters, policies are not filtered by status. You cannot specify ARCHIVED. To query archived user policies, do not specify this parameter and set IncludeArchived to true. This parameter does not affect system default policies.
   * 
   * @example
   * ON
   */
  policyStatus?: string;
  /**
   * @remarks
   * The number of user policies to query on each page. Valid values: 1 to 100. Default value: 20. In addition, each call returns up to Size enabled system default policies. Therefore, the number of items in the returned Data may be greater than Size.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      includeArchived: 'IncludeArchived',
      page: 'Page',
      policyStatus: 'PolicyStatus',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeArchived: 'boolean',
      page: 'number',
      policyStatus: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

