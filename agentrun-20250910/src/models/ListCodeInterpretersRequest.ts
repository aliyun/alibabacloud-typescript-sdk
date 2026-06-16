// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCodeInterpretersRequest extends $dara.Model {
  /**
   * @remarks
   * Filter by code interpreter name
   * 
   * @example
   * code
   */
  codeInterpreterName?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
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

