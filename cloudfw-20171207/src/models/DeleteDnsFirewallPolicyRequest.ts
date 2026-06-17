// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDnsFirewallPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 498946f4-c98a-45c0-9038-635c******
   */
  aclUuid?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values: **zh** for Chinese and **en** for English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 140.210.39.***
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

