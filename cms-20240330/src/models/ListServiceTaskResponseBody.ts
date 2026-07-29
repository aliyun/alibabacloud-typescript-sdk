// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceTaskResponseBody extends $dara.Model {
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
   * A1B2C3D4-E5F6-7890-ABCD-EF1234567890
   */
  requestId?: string;
  /**
   * @example
   * [{"taskId":"a1b2c3d4-e5f6-7890-abcd-ef1234567890","taskType":"live_debug_log_probe"}]
   */
  serviceTasks?: { [key: string]: any }[];
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      serviceTasks: 'serviceTasks',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceTasks: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.serviceTasks)) {
      $dara.Model.validateArray(this.serviceTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

