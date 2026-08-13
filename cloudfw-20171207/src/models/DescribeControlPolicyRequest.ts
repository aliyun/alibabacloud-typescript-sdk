// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The action that Cloud Firewall performs on the traffic in the access control policy. Valid values:
   * 
   * @example
   * accept
   */
  aclAction?: string;
  /**
   * @remarks
   * The unique ID of the access control policy. You must specify at least one of AclUuid and Direction. If AclUuid is specified, you can query the policy by its ID.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221a****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The page number of the current page displayed in a paging query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The description of the access control policy. Fuzzy queries are supported.
   * 
   * @example
   * Allow access to office network segment
   */
  description?: string;
  /**
   * @remarks
   * The destination address in the access control policy. Fuzzy queries are supported. The value varies depending on the DestinationType (destination type).
   * 
   * @example
   * 192.0.XX.XX
   */
  destination?: string;
  /**
   * @remarks
   * The traffic direction controlled by the access control policy. Valid values: in (inbound) or out (outbound). You must specify at least one of Direction and AclUuid. If AclUuid is not specified, you must specify a non-empty Direction. Otherwise, the ErrorParametersDirection error is returned.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The supported IP address version. Valid values:
   * 
   * @example
   * 6
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language type for receiving messages. Valid values:
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries per page displayed in a paging query.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The protocol type of the traffic in the access control policy. Valid values:
   * 
   * @example
   * TCP
   */
  proto?: string;
  /**
   * @remarks
   * The enabled status of the access control policy. Valid values:
   * 
   * @example
   * true
   */
  release?: string;
  /**
   * @remarks
   * The recurrence type of the policy validity period for the access control policy. Valid values:
   * 
   * @example
   * Permanent
   */
  repeatType?: string;
  /**
   * @remarks
   * The source address in the access control policy. Fuzzy queries are supported. The value varies depending on the SourceType (source type).
   * 
   * @example
   * 192.0.XX.XX
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      aclAction: 'AclAction',
      aclUuid: 'AclUuid',
      currentPage: 'CurrentPage',
      description: 'Description',
      destination: 'Destination',
      direction: 'Direction',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      pageSize: 'PageSize',
      proto: 'Proto',
      release: 'Release',
      repeatType: 'RepeatType',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclAction: 'string',
      aclUuid: 'string',
      currentPage: 'string',
      description: 'string',
      destination: 'string',
      direction: 'string',
      ipVersion: 'string',
      lang: 'string',
      pageSize: 'string',
      proto: 'string',
      release: 'string',
      repeatType: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

