// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSheetResponseBody extends $dara.Model {
  /**
   * @example
   * 20
   */
  columnCount?: number;
  /**
   * @example
   * stxxxx
   */
  id?: string;
  /**
   * @example
   * 1
   */
  lastNonEmptyColumn?: number;
  /**
   * @example
   * 2
   */
  lastNonEmptyRow?: number;
  /**
   * @example
   * Sheet1
   */
  name?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  rowCount?: number;
  /**
   * @example
   * visible
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      columnCount: 'columnCount',
      id: 'id',
      lastNonEmptyColumn: 'lastNonEmptyColumn',
      lastNonEmptyRow: 'lastNonEmptyRow',
      name: 'name',
      requestId: 'requestId',
      rowCount: 'rowCount',
      visibility: 'visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnCount: 'number',
      id: 'string',
      lastNonEmptyColumn: 'number',
      lastNonEmptyRow: 'number',
      name: 'string',
      requestId: 'string',
      rowCount: 'number',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

