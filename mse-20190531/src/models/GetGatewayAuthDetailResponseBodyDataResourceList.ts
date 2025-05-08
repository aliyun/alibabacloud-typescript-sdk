// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGatewayAuthDetailResponseBodyDataResourceListAuthResourceHeaderList } from "./GetGatewayAuthDetailResponseBodyDataResourceListAuthResourceHeaderList";


export class GetGatewayAuthDetailResponseBodyDataResourceList extends $dara.Model {
  /**
   * @example
   * 2274
   */
  authId?: number;
  authResourceHeaderList?: GetGatewayAuthDetailResponseBodyDataResourceListAuthResourceHeaderList[];
  /**
   * @example
   * 1765
   */
  domainId?: number;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 2274
   */
  gatewayId?: number;
  /**
   * @example
   * gw-6f0dbd108a0249d2b675b3ef50b*****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * 2024-02-19T03:32:38.000+0000
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-02-19T03:32:38.000+0000
   */
  gmtModified?: string;
  /**
   * @example
   * 1303
   */
  id?: number;
  /**
   * @example
   * true
   */
  ignoreCase?: boolean;
  /**
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @example
   * EQUAL
   */
  matchType?: string;
  /**
   * @example
   * /test
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      authId: 'AuthId',
      authResourceHeaderList: 'AuthResourceHeaderList',
      domainId: 'DomainId',
      domainName: 'DomainName',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      ignoreCase: 'IgnoreCase',
      isWhite: 'IsWhite',
      matchType: 'MatchType',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'number',
      authResourceHeaderList: { 'type': 'array', 'itemType': GetGatewayAuthDetailResponseBodyDataResourceListAuthResourceHeaderList },
      domainId: 'number',
      domainName: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      ignoreCase: 'boolean',
      isWhite: 'boolean',
      matchType: 'string',
      path: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authResourceHeaderList)) {
      $dara.Model.validateArray(this.authResourceHeaderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

