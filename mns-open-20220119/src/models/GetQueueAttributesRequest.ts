// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueueAttributesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the queue.
   * 
   * This parameter is required.
   * 
   * @example
   * demo-queue
   */
  queueName?: string;
  /**
   * @remarks
   * The list of resource tags.
   */
  tag?: GetQueueAttributesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      queueName: 'QueueName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueName: 'string',
      tag: { 'type': 'array', 'itemType': GetQueueAttributesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

