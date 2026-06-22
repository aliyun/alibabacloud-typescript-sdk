// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventMarkMissListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates that the first page is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The alert event name (child class).
   * 
   * @example
   * Login with unusual location
   */
  eventName?: string;
  /**
   * @remarks
   * The number of whitelist rules to display on each page in a paged query. Default value: **20**, which indicates that 20 whitelist rules are displayed on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The asset search keyword. You can enter the IP address, public IP address, private IP address, or asset name for fuzzy matching.
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

