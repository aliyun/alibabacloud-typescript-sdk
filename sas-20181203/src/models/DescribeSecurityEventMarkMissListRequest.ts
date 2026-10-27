// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventMarkMissListRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the alert event (subtype).
   * 
   * @example
   * Login with unusual location
   */
  eventName?: string;
  /**
   * @remarks
   * The number of whitelist rules to return on each page during paging. Default value: **20**, which indicates that 20 whitelist rules are returned on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The asset search criterion. You can specify the IP address, public IP address, private IP address, or name of an asset for fuzzy matching.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 125.210.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      eventName: 'EventName',
      pageSize: 'PageSize',
      remark: 'Remark',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      eventName: 'string',
      pageSize: 'number',
      remark: 'string',
      resourceOwnerId: 'number',
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

