// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewaysShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Retrieve the list of created cloud-native gateways
   * 
   * @example
   * gw-cpv4sqdl****
   */
  gatewayId?: string;
  /**
   * @remarks
   * The search keyword. A full match is performed. The search is case-insensitive.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The instance name. If you specify a name, an exact search is performed.
   * 
   * @example
   * dev
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
  /**
   * @remarks
   * The instance ID. If you specify an ID, an exact search is performed.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * rg-aekz3wes3hnre5a
   * 
   * @example
   * rg-aekzq6bzz5uyg2q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags that you want to use for the search.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      gatewayType: 'gatewayType',
      keyword: 'keyword',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      tagShrink: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      gatewayType: 'string',
      keyword: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

