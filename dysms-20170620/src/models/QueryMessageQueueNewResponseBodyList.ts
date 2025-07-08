// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMessageQueueNewResponseBodyList extends $dara.Model {
  isCreated?: boolean;
  queueName?: string;
  queueType?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      isCreated: 'IsCreated',
      queueName: 'QueueName',
      queueType: 'QueueType',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isCreated: 'boolean',
      queueName: 'string',
      queueType: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

