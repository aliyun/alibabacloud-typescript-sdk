// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutWebtrackingRequest extends $dara.Model {
  /**
   * @remarks
   * The logs. Each element is a JSON object that indicates a log.
   * 
   * >  **Note**: The time in a log that is collected by using the web tracking feature is the time at which Simple Log Service receives the log. You do not need to configure the __time__ field for each log. If this field exists, it is overwritten by the time at which Simple Log Service receives the log.
   * 
   * This parameter is required.
   */
  logs?: { [key: string]: string }[];
  /**
   * @remarks
   * The source of the logs.
   * 
   * This parameter is required.
   * 
   * @example
   * source
   */
  source?: string;
  /**
   * @remarks
   * The tags of the logs.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The topic of the logs.
   * 
   * @example
   * topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      logs: '__logs__',
      source: '__source__',
      tags: '__tags__',
      topic: '__topic__',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      source: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      topic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

