// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEsExecuteDataResponseBodyContents extends $dara.Model {
  /**
   * @remarks
   * The time and column names in the table that shows the status of the script.
   */
  columns?: string[];
  /**
   * @remarks
   * The name of the table that shows the status of the script.
   * 
   * @example
   * Exception
   */
  name?: string;
  /**
   * @remarks
   * The list of timestamps and values in the corresponding columns of the table that shows the status of the script.
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

export class DescribeEsExecuteDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the script.
   */
  contents?: DescribeEsExecuteDataResponseBodyContents[];
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
      contents: { 'type': 'array', 'itemType': DescribeEsExecuteDataResponseBodyContents },
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

