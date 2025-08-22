// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnFullDomainsBlockIPHistoryResponseBodyIPBlockInfo extends $dara.Model {
  /**
   * @remarks
   * The blocked IP address or CIDR block.
   * 
   * @example
   * 1.XXX.XXX.0~1.XXX.XXX.255
   */
  blockIP?: string;
  blockInterval?: string;
  /**
   * @remarks
   * The delivery time.
   * 
   * @example
   * 2023-04-24 18:49:37
   */
  deliverTime?: string;
  operationType?: string;
  /**
   * @remarks
   * The delivery status.
   * 
   * *   Success
   * *   Failed
   * 
   * @example
   * Success
   */
  status?: string;
  updateType?: string;
  static names(): { [key: string]: string } {
    return {
      blockIP: 'BlockIP',
      blockInterval: 'BlockInterval',
      deliverTime: 'DeliverTime',
      operationType: 'OperationType',
      status: 'Status',
      updateType: 'UpdateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockIP: 'string',
      blockInterval: 'string',
      deliverTime: 'string',
      operationType: 'string',
      status: 'string',
      updateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnFullDomainsBlockIPHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * The value of Code is not 0 in the following scenarios:
   * 
   * *   The format of the IP address is invalid.
   * *   The format of the time is invalid.
   * *   Other abnormal scenarios
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The description of the status returned.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The result of the operation.
   */
  IPBlockInfo?: DescribeDcdnFullDomainsBlockIPHistoryResponseBodyIPBlockInfo[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 13A2B792-9212-1CC9-8525-59EBEF3FFE01
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      IPBlockInfo: 'IPBlockInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      description: 'string',
      IPBlockInfo: { 'type': 'array', 'itemType': DescribeDcdnFullDomainsBlockIPHistoryResponseBodyIPBlockInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.IPBlockInfo)) {
      $dara.Model.validateArray(this.IPBlockInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

