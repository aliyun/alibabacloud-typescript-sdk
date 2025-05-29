// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRenderingInstanceGatewayResponseBodyGatewayConfigurationInfos } from "./ListRenderingInstanceGatewayResponseBodyGatewayConfigurationInfos";


export class ListRenderingInstanceGatewayResponseBody extends $dara.Model {
  gatewayConfigurationInfos?: ListRenderingInstanceGatewayResponseBodyGatewayConfigurationInfos[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayConfigurationInfos: 'GatewayConfigurationInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayConfigurationInfos: { 'type': 'array', 'itemType': ListRenderingInstanceGatewayResponseBodyGatewayConfigurationInfos },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gatewayConfigurationInfos)) {
      $dara.Model.validateArray(this.gatewayConfigurationInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

