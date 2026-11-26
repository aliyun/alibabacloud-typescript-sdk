// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceBelongIdentifiersRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number. Valid values: 1 to 2147483647.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of record IDs to query. You can specify 1 to 100 positive integer decimal strings at a time. If this parameter is specified along with other filter parameters, the records that meet all the conditions are returned.
   */
  identifierIds?: string[];
  /**
   * @remarks
   * The identifier type. MAC indicates the MAC address of the network interface controller (NIC), SystemSN indicates the system serial number, and BIOSSN indicates the BIOS serial number. This parameter is required when IdentifierValues is specified.
   * 
   * @example
   * MAC
   */
  identifierType?: string;
  /**
   * @remarks
   * The list of identifier values for exact match. You can specify 1 to 100 items at a time, and each item can contain 1 to 128 characters. You must specify IdentifierType at the same time. Records that match any value in the array are returned. MAC addresses are uniformly converted to the lowercase colon-separated format. System serial numbers and BIOS serial numbers are case-sensitive and space-sensitive.
   */
  identifierValues?: string[];
  /**
   * @remarks
   * A reserved pagination parameter. This value is not used in the current version. Use PageSize to specify the number of entries per page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * A reserved pagination cursor. This value is not used in the current version. Use CurrentPage to specify the page number.
   * 
   * @example
   * d9fbd0d1ac24be90
   */
  nextToken?: string;
  /**
   * @remarks
   * The maximum number of records to return per page. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      identifierIds: 'IdentifierIds',
      identifierType: 'IdentifierType',
      identifierValues: 'IdentifierValues',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      identifierIds: { 'type': 'array', 'itemType': 'string' },
      identifierType: 'string',
      identifierValues: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.identifierIds)) {
      $dara.Model.validateArray(this.identifierIds);
    }
    if(Array.isArray(this.identifierValues)) {
      $dara.Model.validateArray(this.identifierValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

