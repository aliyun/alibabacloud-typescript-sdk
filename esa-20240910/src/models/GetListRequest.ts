// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom list, which can be obtained by calling the [ListLists](https://help.aliyun.com/document_detail/2850217.html) operation.
   * 
   * @example
   * 40000001
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

