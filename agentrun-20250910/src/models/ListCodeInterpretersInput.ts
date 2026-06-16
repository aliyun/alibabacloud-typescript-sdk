// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCodeInterpretersInput extends $dara.Model {
  /**
   * @remarks
   * Filters results by code interpreter name.
   */
  codeInterpreterName?: string;
  /**
   * @remarks
   * The page number of the results to return. Default: 1.
   */
  pageNumber?: number;
  /**
   * @remarks
   * Maximum number of results to return per page. Valid values: 1 to 100. Default: 20.
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

