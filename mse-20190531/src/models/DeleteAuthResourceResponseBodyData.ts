// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAuthResourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The authentication ID.
   * 
   * @example
   * 253
   */
  authId?: number;
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * 235
   */
  domainId?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * name
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * gw-7ea3da97b96543e19f6c597cd4a9****
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-7ea3da97b96543e19f6c597cd4a9****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the primary key.
   * 
   * @example
   * 12
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the whitelist mode is enabled.
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /zookeeper
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      authId: 'AuthId',
      domainId: 'DomainId',
      domainName: 'DomainName',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      isWhite: 'IsWhite',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'number',
      domainId: 'number',
      domainName: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      isWhite: 'boolean',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

