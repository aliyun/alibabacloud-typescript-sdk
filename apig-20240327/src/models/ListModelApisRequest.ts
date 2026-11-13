// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelApisRequest extends $dara.Model {
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  /**
   * @remarks
   * Specifies whether to return legacy model APIs created by scenario. If this parameter is omitted or set to false, only APIs created by selecting a model are returned. If this parameter is set to true, APIs created by both methods are returned on the same page, excluding common HTTP, MCP, or Agent APIs.
   */
  includeLegacy?: boolean;
  /**
   * @remarks
   * The search keyword. Supports fuzzy search by API name or exact search by API ID.
   * 
   * @example
   * beta
   */
  keyword?: string;
  /**
   * @remarks
   * The name for exact search.
   * 
   * @example
   * beta-model-api
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group used to filter results.
   * 
   * @example
   * rg-acf0000000000000000
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      includeLegacy: 'includeLegacy',
      keyword: 'keyword',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      includeLegacy: 'boolean',
      keyword: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

