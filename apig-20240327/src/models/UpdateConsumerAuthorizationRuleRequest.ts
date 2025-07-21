// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthorizationResourceInfo } from "./AuthorizationResourceInfo";


export class UpdateConsumerAuthorizationRuleRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      authorizationResourceInfos: 'authorizationResourceInfos',
      expireMode: 'expireMode',
      expireTimestamp: 'expireTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResourceInfos: { 'type': 'array', 'itemType': AuthorizationResourceInfo },
      expireMode: 'string',
      expireTimestamp: 'number',
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

