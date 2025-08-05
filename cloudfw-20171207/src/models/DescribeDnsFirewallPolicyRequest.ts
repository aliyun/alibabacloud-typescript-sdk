// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsFirewallPolicyRequest extends $dara.Model {
  /**
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @example
   * b6c8f905-2eb6-442a-ba35-9416e****
   */
  aclUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 10.2.XX.XX/24
   */
  destination?: string;
  /**
   * @example
   * 4
   */
  ipVersion?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * true
   */
  release?: string;
  /**
   * @example
   * 192.0.XX.XX/24
   */
  source?: string;
  /**
   * @example
   * 140.205.118.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      currentPage: 'CurrentPage',
      description: 'Description',
      destination: 'Destination',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      pageSize: 'PageSize',
      release: 'Release',
      source: 'Source',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      currentPage: 'string',
      description: 'string',
      destination: 'string',
      ipVersion: 'string',
      lang: 'string',
      pageSize: 'string',
      release: 'string',
      source: 'string',
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

