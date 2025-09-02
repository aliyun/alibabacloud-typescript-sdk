// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaselineConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the baseline. Valid values: DAILY and HOURLY. Separate multiple baseline types with commas (,).
   * 
   * @example
   * DAILY,HOURLY
   */
  baselineTypes?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the baseline owner.
   * 
   * @example
   * 95279527****
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Valid values: 1 to 30. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The priority of the baseline. Valid values: {1,3,5,7,8}. Separate multiple priorities with commas (,).
   * 
   * @example
   * 1,3,5,7,8
   */
  priority?: string;
  /**
   * @remarks
   * The workspace ID. You can call the ListProjects operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @remarks
   * The keyword in the baseline name, which is used to search for the baseline.
   * 
   * @example
   * Baseline name search keywords
   */
  searchText?: string;
  /**
   * @remarks
   * Specifies whether to enable the baseline. Valid values: true and false.
   * 
   * @example
   * true
   */
  useflag?: boolean;
  static names(): { [key: string]: string } {
    return {
      baselineTypes: 'BaselineTypes',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      priority: 'Priority',
      projectId: 'ProjectId',
      searchText: 'SearchText',
      useflag: 'Useflag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineTypes: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      priority: 'string',
      projectId: 'number',
      searchText: 'string',
      useflag: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

