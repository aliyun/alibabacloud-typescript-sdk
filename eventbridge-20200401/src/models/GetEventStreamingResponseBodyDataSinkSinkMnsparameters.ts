// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataSinkSinkMNSParametersBody } from "./GetEventStreamingResponseBodyDataSinkSinkMnsparametersBody";
import { GetEventStreamingResponseBodyDataSinkSinkMNSParametersIsBase64Encode } from "./GetEventStreamingResponseBodyDataSinkSinkMnsparametersIsBase64encode";
import { GetEventStreamingResponseBodyDataSinkSinkMNSParametersQueueName } from "./GetEventStreamingResponseBodyDataSinkSinkMnsparametersQueueName";


export class GetEventStreamingResponseBodyDataSinkSinkMNSParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkMNSParametersBody;
  /**
   * @remarks
   * Indicates whether Base64 encoding is enabled.
   */
  isBase64Encode?: GetEventStreamingResponseBodyDataSinkSinkMNSParametersIsBase64Encode;
  /**
   * @remarks
   * The target service type is MNS.
   */
  queueName?: GetEventStreamingResponseBodyDataSinkSinkMNSParametersQueueName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      isBase64Encode: 'IsBase64Encode',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetEventStreamingResponseBodyDataSinkSinkMNSParametersBody,
      isBase64Encode: GetEventStreamingResponseBodyDataSinkSinkMNSParametersIsBase64Encode,
      queueName: GetEventStreamingResponseBodyDataSinkSinkMNSParametersQueueName,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.isBase64Encode && typeof (this.isBase64Encode as any).validate === 'function') {
      (this.isBase64Encode as any).validate();
    }
    if(this.queueName && typeof (this.queueName as any).validate === 'function') {
      (this.queueName as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

