// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDnsFirewallPolicyRequest extends $dara.Model {
  /**
   * @example
   * log
   */
  aclAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df22****
   */
  aclUuid?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * db_group
   */
  destination?: string;
  /**
   * @example
   * net
   */
  destinationType?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 1
   */
  priority?: string;
  /**
   * @example
   * true
   */
  release?: string;
  source?: string;
  /**
   * @example
   * 192.0.XX.XX
   */
  sourceIp?: string;
  /**
   * @example
   * net
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      description: 'Description',
      destination: 'Destination',
      destinationType: 'DestinationType',
      lang: 'Lang',
      priority: 'Priority',
      release: 'Release',
      source: 'Source',
      sourceIp: 'SourceIp',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      description: 'string',
      destination: 'string',
      destinationType: 'string',
      lang: 'string',
      priority: 'string',
      release: 'string',
      source: 'string',
      sourceIp: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

