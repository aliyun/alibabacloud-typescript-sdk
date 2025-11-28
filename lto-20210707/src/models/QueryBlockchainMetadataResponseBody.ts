// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBlockchainMetadataResponseBodyData extends $dara.Model {
  blockHash?: string;
  blockNumber?: string;
  iotId?: string;
  memberName?: string;
  productKey?: string;
  timestamp?: number;
  txHash?: string;
  static names(): { [key: string]: string } {
    return {
      blockHash: 'BlockHash',
      blockNumber: 'BlockNumber',
      iotId: 'IotId',
      memberName: 'MemberName',
      productKey: 'ProductKey',
      timestamp: 'Timestamp',
      txHash: 'TxHash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockHash: 'string',
      blockNumber: 'string',
      iotId: 'string',
      memberName: 'string',
      productKey: 'string',
      timestamp: 'number',
      txHash: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBlockchainMetadataResponseBody extends $dara.Model {
  code?: string;
  data?: QueryBlockchainMetadataResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryBlockchainMetadataResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

