// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishFeatureViewTableResponseBody extends $dara.Model {
  /**
   * @example
   * 627B5776-4D06-5A49-8A04-508AA39653F4
   */
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

