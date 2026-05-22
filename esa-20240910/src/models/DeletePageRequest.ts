// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom error page, which can be obtained by calling the [ListPages](https://help.aliyun.com/document_detail/2850223.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 50000001
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

