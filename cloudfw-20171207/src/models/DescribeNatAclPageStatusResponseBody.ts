// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatAclPageStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Extra error information.
   * 
   * @example
   * proxy_not_exist
   */
  detail?: string;
  /**
   * @remarks
   * Indicates whether pagination for access control policies for NAT firewalls is supported.
   * 
   * @example
   * True
   */
  natAclPageEnable?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B97F9AD7-A2DB-5F8F-9206-DF89DE0AC9E8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      natAclPageEnable: 'NatAclPageEnable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      natAclPageEnable: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

