// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateMergedTableResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The tables on which the JOIN operation is performed.
   * 
   * @example
   * -
   */
  fromTable?: { [key: string]: any };
  /**
   * @remarks
   * The wide table that is generated after the JOIN operation is performed on multiple tables.
   * 
   * @example
   * -
   */
  mergeTable?: { [key: string]: any };
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * -
   */
  primaryKey?: string;
  static names(): { [key: string]: string } {
    return {
      fromTable: 'fromTable',
      mergeTable: 'mergeTable',
      primaryKey: 'primaryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTable: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mergeTable: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      primaryKey: 'string',
    };
  }

  validate() {
    if(this.fromTable) {
      $dara.Model.validateMap(this.fromTable);
    }
    if(this.mergeTable) {
      $dara.Model.validateMap(this.mergeTable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateMergedTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABCDEFGH
   */
  requestId?: string;
  /**
   * @remarks
   * The response parameters.
   */
  result?: GenerateMergedTableResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GenerateMergedTableResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

