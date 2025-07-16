// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEsExceptionDataResponseBodyContents extends $dara.Model {
  /**
   * @remarks
   * Information about the time column and the error column name.
   */
  columns?: string[];
  /**
   * @remarks
   * The name of the table that shows the errors of the script.
   * 
   * @example
   * 401
   */
  name?: string;
  /**
   * @remarks
   * The time columns and error column names.
   */
  points?: string[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      name: 'Name',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      points: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.points)) {
      $dara.Model.validateArray(this.points);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEsExceptionDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the script for which an error was reported.
   */
  contents?: DescribeEsExceptionDataResponseBodyContents[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 99D61AB3-6164-4CF2-A0DE-129C9B07618B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': DescribeEsExceptionDataResponseBodyContents },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

