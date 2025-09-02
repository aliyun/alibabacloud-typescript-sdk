// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBaselinesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the baseline. Valid values: DAILY and HOURLY. You can specify multiple types. Separate multiple types with commas (,).
   * 
   * @example
   * DAILY
   */
  baselineTypes?: string;
  /**
   * @remarks
   * Specifies whether to enable the baseline. Valid values: true and false.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * 3726346****
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1. Maximum value: 30.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The priority of the baseline. Valid values: {1,3,5,7,8}.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  projectId?: number;
  /**
   * @remarks
   * The keyword in the baseline name, which is used to search for the baseline.
   * 
   * @example
   * baselineName
   */
  searchText?: string;
  static names(): { [key: string]: string } {
    return {
      baselineTypes: 'BaselineTypes',
      enable: 'Enable',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      priority: 'Priority',
      projectId: 'ProjectId',
      searchText: 'SearchText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineTypes: 'string',
      enable: 'boolean',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      priority: 'string',
      projectId: 'number',
      searchText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

