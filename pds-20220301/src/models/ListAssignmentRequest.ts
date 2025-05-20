// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssignmentRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 1 to 100.
   * 
   * The number of returned results must be less than or equal to the specified number.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The ID of the managed resource, such as a group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 105***b82
   */
  manageResourceId?: string;
  /**
   * @remarks
   * The type of the managed resource. Set the value to RT_Group, which specifies that the administrators of a group are queried.
   * 
   * This parameter is required.
   * 
   * @example
   * RT_Group
   */
  manageResourceType?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker. By default, this parameter is empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      manageResourceId: 'manage_resource_id',
      manageResourceType: 'manage_resource_type',
      marker: 'marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      manageResourceId: 'string',
      manageResourceType: 'string',
      marker: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

