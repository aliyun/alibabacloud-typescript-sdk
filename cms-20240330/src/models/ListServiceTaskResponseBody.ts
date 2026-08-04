// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maxResults value of the current request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. An encrypted hexadecimal string is returned when a next page exists. An empty value or absence of this field indicates no more data. Pass this value as-is in the nextToken parameter for the next page request.
   * 
   * @example
   * d23d8f3f0f0cd1984566b1986c9343122fa0385a05c09694c17fe87709f3eb56d1a7ead56b4a2536
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-7890-ABCD-EF1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tasks.
   * 
   * @example
   * [{"taskId":"a1b2c3d4-e5f6-7890-abcd-ef1234567890","taskType":"live_debug_log_probe"}]
   */
  serviceTasks?: { [key: string]: any }[];
  /**
   * @remarks
   * The total number of entries that match the conditions.
   * 
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

