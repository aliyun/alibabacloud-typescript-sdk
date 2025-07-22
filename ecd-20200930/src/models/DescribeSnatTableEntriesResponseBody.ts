// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnatTableEntriesResponseBodySnatTableEntries extends $dara.Model {
  eipAffinity?: string;
  natGatewayId?: string;
  snatEntryId?: string;
  snatEntryName?: string;
  snatIp?: string;
  snatTableId?: string;
  sourceCIDR?: string;
  sourceVSwitchId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      eipAffinity: 'EipAffinity',
      natGatewayId: 'NatGatewayId',
      snatEntryId: 'SnatEntryId',
      snatEntryName: 'SnatEntryName',
      snatIp: 'SnatIp',
      snatTableId: 'SnatTableId',
      sourceCIDR: 'SourceCIDR',
      sourceVSwitchId: 'SourceVSwitchId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAffinity: 'string',
      natGatewayId: 'string',
      snatEntryId: 'string',
      snatEntryName: 'string',
      snatIp: 'string',
      snatTableId: 'string',
      sourceCIDR: 'string',
      sourceVSwitchId: 'string',
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

export class DescribeSnatTableEntriesResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  snatTableEntries?: DescribeSnatTableEntriesResponseBodySnatTableEntries[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      snatTableEntries: 'SnatTableEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      snatTableEntries: { 'type': 'array', 'itemType': DescribeSnatTableEntriesResponseBodySnatTableEntries },
    };
  }

  validate() {
    if(Array.isArray(this.snatTableEntries)) {
      $dara.Model.validateArray(this.snatTableEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

