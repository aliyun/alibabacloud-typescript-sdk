// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnumItemsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The key of the enumeration.
   * 
   * @example
   * system_xxxxx_process_book
   */
  key?: string;
  /**
   * @remarks
   * The value of the enumeration.
   * 
   * @example
   * system_xxxxx_process_book
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnumItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The enumeration information.
   */
  data?: DescribeEnumItemsResponseBodyData[];
  /**
   * @remarks
   * The ID of the request. This ID is unique to each request. Use this ID to troubleshoot issues.
   * 
   * @example
   * E7698CFB-4E1C-5840-8EC9-691B86729E94
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeEnumItemsResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

