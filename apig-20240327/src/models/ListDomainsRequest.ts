// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainsRequest extends $dara.Model {
  /**
   * @example
   * Serverless
   */
  domainScope?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-xxxxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The gateway type used for filtering. Valid values: **AI** and **API**.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The domain name. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  nameLike?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek27lpqyiie6qy
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domainScope: 'domainScope',
      gatewayId: 'gatewayId',
      gatewayType: 'gatewayType',
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainScope: 'string',
      gatewayId: 'string',
      gatewayType: 'string',
      nameLike: 'string',
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

