// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachRCInstancesResponseBodyResponses extends $dara.Model {
  code?: string;
  instanceId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachRCInstancesResponseBody extends $dara.Model {
  requestId?: string;
  responses?: AttachRCInstancesResponseBodyResponses[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responses: 'Responses',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responses: { 'type': 'array', 'itemType': AttachRCInstancesResponseBodyResponses },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.responses)) {
      $dara.Model.validateArray(this.responses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

