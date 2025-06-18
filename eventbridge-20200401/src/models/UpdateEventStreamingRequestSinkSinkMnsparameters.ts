// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkMNSParametersBody } from "./UpdateEventStreamingRequestSinkSinkMnsparametersBody";
import { UpdateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode } from "./UpdateEventStreamingRequestSinkSinkMnsparametersIsBase64encode";
import { UpdateEventStreamingRequestSinkSinkMNSParametersQueueName } from "./UpdateEventStreamingRequestSinkSinkMnsparametersQueueName";


export class UpdateEventStreamingRequestSinkSinkMNSParameters extends $dara.Model {
  /**
   * @remarks
   * The message body.
   */
  body?: UpdateEventStreamingRequestSinkSinkMNSParametersBody;
  /**
   * @remarks
   * Specifies whether to enable Base64 encoding.
   */
  isBase64Encode?: UpdateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode;
  /**
   * @remarks
   * The name of the SMQ queue.
   */
  queueName?: UpdateEventStreamingRequestSinkSinkMNSParametersQueueName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      isBase64Encode: 'IsBase64Encode',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateEventStreamingRequestSinkSinkMNSParametersBody,
      isBase64Encode: UpdateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode,
      queueName: UpdateEventStreamingRequestSinkSinkMNSParametersQueueName,
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

