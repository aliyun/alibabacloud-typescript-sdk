// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConversationsRequest extends $dara.Model {
  /**
   * @example
   * 1582183381000
   */
  beginTimeLeftRange?: number;
  /**
   * @example
   * 1582356181000
   */
  beginTimeRightRange?: number;
  /**
   * @example
   * 02811111111
   */
  callingNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12f407b22cbe4890ac595f09985848d5
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      beginTimeLeftRange: 'BeginTimeLeftRange',
      beginTimeRightRange: 'BeginTimeRightRange',
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimeLeftRange: 'number',
      beginTimeRightRange: 'number',
      callingNumber: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

