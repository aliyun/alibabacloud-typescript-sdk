// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeForwardTableEntriesResponseBodyForwardTableEntriesForwardTableEntry extends $dara.Model {
  externalIp?: string;
  externalPort?: string;
  forwardEntryId?: string;
  forwardEntryName?: string;
  forwardTableId?: string;
  internalIp?: string;
  internalPort?: string;
  ipProtocol?: string;
  natGatewayId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      forwardEntryId: 'ForwardEntryId',
      forwardEntryName: 'ForwardEntryName',
      forwardTableId: 'ForwardTableId',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      natGatewayId: 'NatGatewayId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      externalPort: 'string',
      forwardEntryId: 'string',
      forwardEntryName: 'string',
      forwardTableId: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      natGatewayId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForwardTableEntriesResponseBodyForwardTableEntries extends $dara.Model {
  forwardTableEntry?: DescribeForwardTableEntriesResponseBodyForwardTableEntriesForwardTableEntry[];
  static names(): { [key: string]: string } {
    return {
      forwardTableEntry: 'ForwardTableEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableEntry: { 'type': 'array', 'itemType': DescribeForwardTableEntriesResponseBodyForwardTableEntriesForwardTableEntry },
    };
  }

  validate() {
    if(Array.isArray(this.forwardTableEntry)) {
      $dara.Model.validateArray(this.forwardTableEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForwardTableEntriesResponseBody extends $dara.Model {
  forwardTableEntries?: DescribeForwardTableEntriesResponseBodyForwardTableEntries;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A6C4A8B1-7561-4509-949C-20DEB40D71E6
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      forwardTableEntries: 'ForwardTableEntries',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableEntries: DescribeForwardTableEntriesResponseBodyForwardTableEntries,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.forwardTableEntries && typeof (this.forwardTableEntries as any).validate === 'function') {
      (this.forwardTableEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

