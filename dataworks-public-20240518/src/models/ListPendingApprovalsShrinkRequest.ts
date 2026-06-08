// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPendingApprovalsShrinkRequest extends $dara.Model {
  accessTypesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @example
   * 1779724799999
   */
  endTime?: number;
  granteeShrink?: string;
  /**
   * @example
   * eyJpZCI6MTIzfQ==
   */
  nextToken?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  resourceShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["table", "column"]
   */
  resourceTypeShrink?: string;
  /**
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

