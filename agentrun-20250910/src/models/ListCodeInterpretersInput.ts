// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCodeInterpretersInput extends $dara.Model {
  /**
   * @remarks
   * 按代码解释器名称过滤
   */
  codeInterpreterName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      codeInterpreterName: 'codeInterpreterName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeInterpreterName: 'string',
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

