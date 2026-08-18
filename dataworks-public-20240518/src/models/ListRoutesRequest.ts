// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network resource.
   * 
   * @example
   * 1000
   */
  networkId?: number;
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
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the general quota.
   * 
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of sort fields. Fields such as scheduled time and start time are supported. The format is "sort field + sort order (Desc/Asc)" (Asc is the default if omitted). Valid values:
   * 
   * - Id (Desc/Asc): route ID
   * - DestinationCidr (Desc/Asc): destination CIDR
   * - CreateTime (Desc/Asc): creation time
   * 
   * Default value: CreateTime Asc.
   * 
   * @example
   * CreateTime Asc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      networkId: 'NetworkId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkId: 'number',
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

