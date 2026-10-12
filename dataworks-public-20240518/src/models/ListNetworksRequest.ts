// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworksRequest extends $dara.Model {
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
  /**
   * @remarks
   * The unique identifier of the general resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The sort fields. Supports fields such as scheduled time and start time. The format is sort field + sort order (Desc/Asc), where Asc can be omitted. Valid values for sort fields:
   * 
   * - Id (Desc/Asc): Network ID
   * - Status (Desc/Asc): Network status
   * - CreateUser (Desc/Asc): Creator
   * - CreateTime (Desc/Asc): Creation time
   * 
   * Default value: CreateTime Asc.
   * 
   * @example
   * CreateTime Asc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

