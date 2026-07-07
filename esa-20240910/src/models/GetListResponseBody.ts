// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the custom list.
   * 
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @remarks
   * The ID of the custom list. You can obtain the ID by calling the [ListLists](https://help.aliyun.com/document_detail/2850217.html) operation.
   * 
   * @example
   * 40000001
   */
  id?: number;
  /**
   * @remarks
   * The items of the custom list, displayed as an array.
   */
  items?: string[];
  /**
   * @remarks
   * The kind of the custom list.
   * 
   * @example
   * ip
   */
  kind?: string;
  /**
   * @remarks
   * The name of the custom list.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * The last update time of the custom list.
   * 
   * Format: RFC 3339 / ISO 8601, UTC time zone (ending with Z).
   * 
   * Example: 2026-06-10T14:23:45Z
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      items: 'Items',
      kind: 'Kind',
      name: 'Name',
      requestId: 'RequestId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      items: { 'type': 'array', 'itemType': 'string' },
      kind: 'string',
      name: 'string',
      requestId: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

