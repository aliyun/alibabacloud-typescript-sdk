// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListResponseBody extends $dara.Model {
  /**
   * @remarks
   * 自定义响应页面描述
   * 
   * @example
   * a custom list
   */
  description?: string;
  /**
   * @remarks
   * 自定义响应页面ID
   * 
   * @example
   * 40000001
   */
  id?: number;
  items?: string[];
  /**
   * @example
   * ip
   */
  kind?: string;
  /**
   * @remarks
   * 自定义响应页面名称
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
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

