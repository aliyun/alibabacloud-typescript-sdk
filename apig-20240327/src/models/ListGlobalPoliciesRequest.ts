// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGlobalPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by mounted resource type. This parameter takes effect only for the BlackOrWhite policy type. By default, the Gateway, Domain, and Route types are queried.
   * 
   * @example
   * Gateway
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The policy class name. You can specify multiple values separated by commas.
   * 
   * @example
   * JWTAuth,OIDCAuth,ExternalZAuth
   */
  className?: string;
  /**
   * @remarks
   * Filters by enabling status.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Filters by environment ID.
   * 
   * @example
   * env-xxxx
   */
  environmentId?: string;
  /**
   * @remarks
   * Filters by gateway ID at the attachment level.
   * 
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The global policy type.
   * 
   * @example
   * GlobalAuth
   */
  globalPolicyType?: string;
  /**
   * @remarks
   * Filters by IP content by performing a LIKE query on the configuration.
   * 
   * @example
   * 1.2.3.4
   */
  ipAccessControlContent?: string;
  /**
   * @remarks
   * Filters by protocol layer. If you specify L4, configurations containing L4 are queried. If you specify L7, configurations that do not contain L4 are queried.
   * 
   * @example
   * L7
   */
  ipAccessControlProtocolLayer?: string;
  /**
   * @remarks
   * Filters by resource name by performing a LIKE query on the configuration.
   * 
   * @example
   * my-route
   */
  ipAccessControlResourceName?: string;
  /**
   * @remarks
   * Filters by IP access control type by performing a LIKE query on the configuration.
   * 
   * @example
   * White / Black
   */
  ipAccessControlType?: string;
  /**
   * @remarks
   * Filters by exact policy name.
   * 
   * @example
   * my-jwt-auth
   */
  name?: string;
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
   * The number of entries per page.
   * 
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

