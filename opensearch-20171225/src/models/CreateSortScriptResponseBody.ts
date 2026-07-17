// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSortScriptResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The applicable scope of the script.
   * 
   * @example
   * second_rank
   */
  scope?: string;
  /**
   * @remarks
   * The name of the script.
   * 
   * @example
   * rank_cava_20230606_v7
   */
  scriptName?: string;
  /**
   * @remarks
   * The type of the script.
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
   * The unique ID of the request.
   * 
   * @example
   * ABCDEFGH
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
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

