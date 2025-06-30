// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDocTypesResponseBodyDocTypeList } from "./DescribeDocTypesResponseBodyDocTypeList";


export class DescribeDocTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of OSS object types.
   */
  docTypeList?: DescribeDocTypesResponseBodyDocTypeList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-4******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      docTypeList: 'DocTypeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docTypeList: { 'type': 'array', 'itemType': DescribeDocTypesResponseBodyDocTypeList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docTypeList)) {
      $dara.Model.validateArray(this.docTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

