// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutesRequest extends $dara.Model {
  /**
   * @remarks
   * The network ID.
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
   * The ID of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The fields used for sorting. Fields such as TriggerTime and StartedTime are supported. The value of this parameter is in the Sort field + Sort by (Desc/Asc) format. By default, results are sorted in ascending order. Valid values:
   * 
   * *   Id (Desc/Asc): the route ID
   * *   DestinationCidr (Desc/Asc): the destination CIDR block of the route
   * *   CreateTime (Desc/Asc): the time when the route is created
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

