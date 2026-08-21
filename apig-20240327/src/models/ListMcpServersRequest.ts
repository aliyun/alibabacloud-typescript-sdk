// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpServersRequest extends $dara.Model {
  /**
   * @remarks
   * The creation source type.
   * 
   * @example
   * ApiGatewayHttpToMCP
   */
  createFromTypes?: string;
  /**
   * @remarks
   * The deployment status of the MCP server.
   * 
   * @example
   * Deployed
   */
  deployStatuses?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-co370icmjeu****
   */
  gatewayId?: string;
  /**
   * @remarks
   * Fuzzy searches for MCP servers by API name.
   * 
   * @example
   * test
   */
  nameLike?: string;
  /**
   * @remarks
   * The page number, starting from 1. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The MCP server type.
   * 
   * @example
   * RealMCP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createFromTypes: 'createFromTypes',
      deployStatuses: 'deployStatuses',
      gatewayId: 'gatewayId',
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createFromTypes: 'string',
      deployStatuses: 'string',
      gatewayId: 'string',
      nameLike: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

