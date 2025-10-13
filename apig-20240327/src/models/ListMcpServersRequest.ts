// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpServersRequest extends $dara.Model {
  /**
   * @example
   * ApiGatewayHttpToMCP
   */
  createFromTypes?: string;
  /**
   * @example
   * Deployed
   */
  deployStatuses?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gw-co370icmjeu****
   */
  gatewayId?: string;
  /**
   * @example
   * test
   */
  nameLike?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
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

