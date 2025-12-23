// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSortScriptResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The sort phase to which the script applies.
   * 
   * @example
   * second_rank
   */
  scope?: string;
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * rank_cava_20230606_v7
   */
  scriptName?: string;
  /**
   * @remarks
   * The script type.
   * 
   * @example
   * cava_script
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'scope',
      scriptName: 'scriptName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
      scriptName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSortScriptResponseBody extends $dara.Model {
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
  result?: CreateSortScriptResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateSortScriptResponseBodyResult,
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

