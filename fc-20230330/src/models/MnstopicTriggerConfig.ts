// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MNSTopicTriggerConfig extends $dara.Model {
  /**
   * @example
   * serverless
   */
  filterTag?: string;
  /**
   * @example
   * JSON
   */
  notifyContentFormat?: string;
  /**
   * @example
   * BACKOFF_RETRY
   */
  notifyStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      filterTag: 'filterTag',
      notifyContentFormat: 'notifyContentFormat',
      notifyStrategy: 'notifyStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterTag: 'string',
      notifyContentFormat: 'string',
      notifyStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

