// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGlobalPoliciesRequest extends $dara.Model {
  /**
   * @example
   * Gateway
   */
  attachResourceType?: string;
  /**
   * @example
   * JWTAuth,OIDCAuth,ExternalZAuth
   */
  className?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * env-xxxx
   */
  environmentId?: string;
  /**
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @example
   * GlobalAuth
   */
  globalPolicyType?: string;
  /**
   * @example
   * 1.2.3.4
   */
  ipAccessControlContent?: string;
  /**
   * @example
   * L7
   */
  ipAccessControlProtocolLayer?: string;
  /**
   * @example
   * my-route
   */
  ipAccessControlResourceName?: string;
  /**
   * @example
   * White / Black
   */
  ipAccessControlType?: string;
  /**
   * @example
   * my-jwt-auth
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      attachResourceType: 'attachResourceType',
      className: 'className',
      enable: 'enable',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      globalPolicyType: 'globalPolicyType',
      ipAccessControlContent: 'ipAccessControlContent',
      ipAccessControlProtocolLayer: 'ipAccessControlProtocolLayer',
      ipAccessControlResourceName: 'ipAccessControlResourceName',
      ipAccessControlType: 'ipAccessControlType',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceType: 'string',
      className: 'string',
      enable: 'boolean',
      environmentId: 'string',
      gatewayId: 'string',
      globalPolicyType: 'string',
      ipAccessControlContent: 'string',
      ipAccessControlProtocolLayer: 'string',
      ipAccessControlResourceName: 'string',
      ipAccessControlType: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

