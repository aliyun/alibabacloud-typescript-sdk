// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPendingApprovalsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The access types.
   */
  accessTypesShrink?: string;
  /**
   * @remarks
   * The resource schema type.
   * 
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * The end time of the query range, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1779724799999
   */
  endTime?: number;
  /**
   * @remarks
   * The grantee object used to filter results.
   */
  granteeShrink?: string;
  /**
   * @remarks
   * The token used to retrieve the next page of results.
   * 
   * @example
   * eyJpZCI6MTIzfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to return per page. Default: 10. Maximum: 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The criteria to filter resources.
   */
  resourceShrink?: string;
  /**
   * @remarks
   * The resource type, which corresponds to a leaf node name. You can specify multiple values. A business context can map to multiple leaf node names.
   * 
   * This parameter is required.
   * 
   * @example
   * ["table", "column"]
   */
  resourceTypeShrink?: string;
  /**
   * @remarks
   * The start time of the query range, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1771948800000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessTypesShrink: 'AccessTypes',
      defSchema: 'DefSchema',
      endTime: 'EndTime',
      granteeShrink: 'Grantee',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      resourceShrink: 'Resource',
      resourceTypeShrink: 'ResourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTypesShrink: 'string',
      defSchema: 'string',
      endTime: 'number',
      granteeShrink: 'string',
      nextToken: 'string',
      pageSize: 'number',
      resourceShrink: 'string',
      resourceTypeShrink: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

