// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthorizationResourceInfo } from "./AuthorizationResourceInfo";


export class CreateConsumerAuthorizationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The list of resource authorization information.
   */
  authorizationResourceInfos?: AuthorizationResourceInfo[];
  /**
   * @remarks
   * The expiry mode. Valid values: LongTerm and ShortTerm.
   * 
   * @example
   * LongTerm
   */
  expireMode?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1750852089975
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The type of the parent resource.
   * 
   * @example
   * API
   */
  parentResourceType?: string;
  /**
   * @remarks
   * The resource type,
   * 
   * @example
   * API
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationResourceInfos: 'authorizationResourceInfos',
      expireMode: 'expireMode',
      expireTimestamp: 'expireTimestamp',
      parentResourceType: 'parentResourceType',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResourceInfos: { 'type': 'array', 'itemType': AuthorizationResourceInfo },
      expireMode: 'string',
      expireTimestamp: 'number',
      parentResourceType: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationResourceInfos)) {
      $dara.Model.validateArray(this.authorizationResourceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

