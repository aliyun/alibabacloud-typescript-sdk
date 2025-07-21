// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetadataAmountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of created exchanges on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * 7
   */
  currentExchanges?: number;
  /**
   * @remarks
   * The number of created queues on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * 1
   */
  currentQueues?: number;
  /**
   * @remarks
   * The number of created vhosts on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * 1
   */
  currentVirtualHosts?: number;
  /**
   * @remarks
   * The maximum number of exchanges that can be created on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * 20
   */
  maxExchanges?: number;
  /**
   * @remarks
   * The maximum number of queues that can be created on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * 20
   */
  maxQueues?: number;
  /**
   * @remarks
   * The maximum number of vhosts that can be created on the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * 10
   */
  maxVirtualHosts?: number;
  static names(): { [key: string]: string } {
    return {
      currentExchanges: 'CurrentExchanges',
      currentQueues: 'CurrentQueues',
      currentVirtualHosts: 'CurrentVirtualHosts',
      maxExchanges: 'MaxExchanges',
      maxQueues: 'MaxQueues',
      maxVirtualHosts: 'MaxVirtualHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentExchanges: 'number',
      currentQueues: 'number',
      currentVirtualHosts: 'number',
      maxExchanges: 'number',
      maxQueues: 'number',
      maxVirtualHosts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetadataAmountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetMetadataAmountResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B75ACF23-2BEB-44AC-A0B6-AE14EDCA***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetadataAmountResponseBodyData,
      requestId: 'string',
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

