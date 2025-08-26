// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeTableResponseBodyDataTablesTableRowsTableColumns extends $dara.Model {
  /**
   * @example
   * 4
   */
  endColumn?: number;
  /**
   * @example
   * 1
   */
  endRow?: number;
  /**
   * @example
   * 0
   */
  height?: number;
  /**
   * @example
   * 1
   */
  startColumn?: number;
  /**
   * @example
   * 0
   */
  startRow?: number;
  texts?: string[];
  /**
   * @example
   * 0
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      endColumn: 'EndColumn',
      endRow: 'EndRow',
      height: 'Height',
      startColumn: 'StartColumn',
      startRow: 'StartRow',
      texts: 'Texts',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endColumn: 'number',
      endRow: 'number',
      height: 'number',
      startColumn: 'number',
      startRow: 'number',
      texts: { 'type': 'array', 'itemType': 'string' },
      width: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableResponseBodyDataTablesTableRows extends $dara.Model {
  tableColumns?: RecognizeTableResponseBodyDataTablesTableRowsTableColumns[];
  static names(): { [key: string]: string } {
    return {
      tableColumns: 'TableColumns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableColumns: { 'type': 'array', 'itemType': RecognizeTableResponseBodyDataTablesTableRowsTableColumns },
    };
  }

  validate() {
    if(Array.isArray(this.tableColumns)) {
      $dara.Model.validateArray(this.tableColumns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableResponseBodyDataTables extends $dara.Model {
  head?: string[];
  tableRows?: RecognizeTableResponseBodyDataTablesTableRows[];
  tail?: string[];
  static names(): { [key: string]: string } {
    return {
      head: 'Head',
      tableRows: 'TableRows',
      tail: 'Tail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      head: { 'type': 'array', 'itemType': 'string' },
      tableRows: { 'type': 'array', 'itemType': RecognizeTableResponseBodyDataTablesTableRows },
      tail: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.head)) {
      $dara.Model.validateArray(this.head);
    }
    if(Array.isArray(this.tableRows)) {
      $dara.Model.validateArray(this.tableRows);
    }
    if(Array.isArray(this.tail)) {
      $dara.Model.validateArray(this.tail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableResponseBodyData extends $dara.Model {
  /**
   * @example
   * UEsDBBQAAAAIAAAAIQBukMk4WAIAA****
   */
  fileContent?: string;
  tables?: RecognizeTableResponseBodyDataTables[];
  static names(): { [key: string]: string } {
    return {
      fileContent: 'FileContent',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContent: 'string',
      tables: { 'type': 'array', 'itemType': RecognizeTableResponseBodyDataTables },
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTableResponseBody extends $dara.Model {
  data?: RecognizeTableResponseBodyData;
  /**
   * @example
   * CBC36BE6-2A18-5256-82BD-8B5477E5D058
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
      data: RecognizeTableResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

