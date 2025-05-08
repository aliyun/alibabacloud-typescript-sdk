// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddGatewayAuthRequestAuthResourceListAuthResourceHeaderList } from "./AddGatewayAuthRequestAuthResourceListAuthResourceHeaderList";


export class AddGatewayAuthRequestAuthResourceList extends $dara.Model {
  authResourceHeaderList?: AddGatewayAuthRequestAuthResourceListAuthResourceHeaderList[];
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * 1
   */
  domainId?: number;
  /**
   * @example
   * true
   */
  ignoreCase?: boolean;
  /**
   * @example
   * EQUAL
   */
  matchType?: string;
  /**
   * @remarks
   * The request path.
   * 
   * @example
   * /test
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      authResourceHeaderList: 'AuthResourceHeaderList',
      domainId: 'DomainId',
      ignoreCase: 'IgnoreCase',
      matchType: 'MatchType',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authResourceHeaderList: { 'type': 'array', 'itemType': AddGatewayAuthRequestAuthResourceListAuthResourceHeaderList },
      domainId: 'number',
      ignoreCase: 'boolean',
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

