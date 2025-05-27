// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventStreamingRequestSinkSinkMNSParametersBody } from "./CreateEventStreamingRequestSinkSinkMnsparametersBody";
import { CreateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode } from "./CreateEventStreamingRequestSinkSinkMnsparametersIsBase64encode";
import { CreateEventStreamingRequestSinkSinkMNSParametersQueueName } from "./CreateEventStreamingRequestSinkSinkMnsparametersQueueName";


export class CreateEventStreamingRequestSinkSinkMNSParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: CreateEventStreamingRequestSinkSinkMNSParametersBody;
  /**
   * @remarks
   * Specifies whether to enable Base64 encoding.
   */
  isBase64Encode?: CreateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode;
  /**
   * @remarks
   * The name of the MNS queue.
   */
  queueName?: CreateEventStreamingRequestSinkSinkMNSParametersQueueName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      isBase64Encode: 'IsBase64Encode',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateEventStreamingRequestSinkSinkMNSParametersBody,
      isBase64Encode: CreateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode,
      queueName: CreateEventStreamingRequestSinkSinkMNSParametersQueueName,
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

