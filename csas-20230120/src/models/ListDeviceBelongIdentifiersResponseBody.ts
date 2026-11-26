// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceBelongIdentifiersResponseBodyIdentifiers extends $dara.Model {
  /**
   * @remarks
   * The time when the record was created. The time is in RFC 3339 format and includes time zone information.
   * 
   * @example
   * 2026-11-24T10:30:00+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the identifier record, returned as a decimal string. You can use the ID to query or remove the record.
   * 
   * @example
   * 482731
   */
  identifierId?: string;
  /**
   * @remarks
   * The identifier type. MAC indicates the MAC address of the network interface controller (NIC), SystemSN indicates the system serial number, and BIOSSN indicates the BIOS serial number.
   * 
   * @example
   * MAC
   */
  identifierType?: string;
  /**
   * @remarks
   * The identifier value in the record. MAC addresses are in the lowercase colon-separated format. System serial numbers and BIOS serial numbers are returned as recorded.
   * 
   * @example
   * 02:00:00:00:00:01
   */
  identifierValue?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      identifierId: 'IdentifierId',
      identifierType: 'IdentifierType',
      identifierValue: 'IdentifierValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      identifierId: 'string',
      identifierType: 'string',
      identifierValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBelongIdentifiersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The device ownership identifier records on the current page. An empty list is returned if no matching records are found.
   */
  identifiers?: ListDeviceBelongIdentifiersResponseBodyIdentifiers[];
  /**
   * @remarks
   * A reserved pagination field. No valid value is returned in the current version.
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * A reserved pagination cursor. No valid value is returned in the current version.
   * 
   * @example
   * d9fbd0d1ac24be90
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7A92B549-EC82-5F79-8301-63711AFC9DCE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that match the filter conditions for the current tenant.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      identifiers: 'Identifiers',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifiers: { 'type': 'array', 'itemType': ListDeviceBelongIdentifiersResponseBodyIdentifiers },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.identifiers)) {
      $dara.Model.validateArray(this.identifiers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

