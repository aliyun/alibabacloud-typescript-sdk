// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthorizationResourceInfo } from "./AuthorizationResourceInfo";


export class CreateConsumerAuthorizationRuleRequest extends $dara.Model {
  authorizationResourceInfos?: AuthorizationResourceInfo[];
  /**
   * @example
   * LongTerm
   */
  expireMode?: string;
  /**
   * @example
   * 1750852089975
   */
  expireTimestamp?: number;
  /**
   * @example
   * API
   */
  parentResourceType?: string;
  /**
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

