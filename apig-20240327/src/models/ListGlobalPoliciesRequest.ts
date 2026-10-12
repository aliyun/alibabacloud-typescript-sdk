// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGlobalPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The attached resource type to filter by. This parameter takes effect only when globalPolicyType is set to BlackOrWhite. If this parameter is not specified, Gateway, Domain, and Route resources are queried.
   * 
   * @example
   * Gateway
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The policy class name. Separate multiple values with commas (server-side strings.Split).
   * 
   * @example
   * JWTAuth,OIDCAuth,ExternalZAuth
   */
  className?: string;
  /**
   * @remarks
   * The enabling status to filter by.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The environment ID to filter by.
   * 
   * @example
   * env-xxxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The gateway ID to filter by (attachment dimension).
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
   * The IP content to filter by. A LIKE match is performed on the config field.
   * 
   * @example
   * 1.2.3.4
   */
  ipAccessControlContent?: string;
  /**
   * @remarks
   * The protocol layer to filter by. L4 queries config entries that contain L4. L7 queries config entries that do not contain L4.
   * 
   * @example
   * L7
   */
  ipAccessControlProtocolLayer?: string;
  /**
   * @remarks
   * The resource name to filter by. A LIKE match is performed on the config field.
   * 
   * @example
   * my-route
   */
  ipAccessControlResourceName?: string;
  /**
   * @remarks
   * The IP access control type to filter by. A LIKE match is performed on the config field.
   * 
   * @example
   * White / Black
   */
  ipAccessControlType?: string;
  /**
   * @remarks
   * The exact policy name to filter by.
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

