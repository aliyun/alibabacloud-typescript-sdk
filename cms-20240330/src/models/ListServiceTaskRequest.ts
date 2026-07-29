// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceTaskRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * d23d8f3f0f0cd1984566b1986c9343122fa0385a05c09694c17fe87709f3eb56d1a7ead56b4a2536
   */
  nextToken?: string;
  /**
   * @example
   * {"ip":"10.0.0.1"}
   */
  searchCondition?: string;
  /**
   * @example
   * live_debug_log_probe
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      searchCondition: 'searchCondition',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      searchCondition: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

