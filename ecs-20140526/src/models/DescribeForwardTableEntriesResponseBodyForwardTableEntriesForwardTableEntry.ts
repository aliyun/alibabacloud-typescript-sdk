// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeForwardTableEntriesResponseBodyForwardTableEntriesForwardTableEntry extends $dara.Model {
  externalIp?: string;
  externalPort?: string;
  forwardEntryId?: string;
  forwardTableId?: string;
  internalIp?: string;
  internalPort?: string;
  ipProtocol?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      forwardEntryId: 'ForwardEntryId',
      forwardTableId: 'ForwardTableId',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      externalPort: 'string',
      forwardEntryId: 'string',
      forwardTableId: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
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

