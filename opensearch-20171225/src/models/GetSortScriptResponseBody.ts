// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSortScriptResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the script was created.
   * 
   * @example
   * 2020-04-02 20:21:14
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the script was last modified.
   * 
   * @example
   * 2020-04-02 21:21:14
   */
  modifyTime?: string;
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
   * The name of the script.
   * 
   * @example
   * rank_cava_20230606_v7
   */
  scriptName?: string;
  /**
   * @remarks
   * The status of the script. For more information, see the description of the status response parameter in the ListSortScripts topic.
   * 
   * @example
   * released
   */
  status?: string;
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
      createTime: 'createTime',
      modifyTime: 'modifyTime',
      scope: 'scope',
      scriptName: 'scriptName',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifyTime: 'string',
      scope: 'string',
      scriptName: 'string',
      status: 'string',
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

export class GetSortScriptResponseBody extends $dara.Model {
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
   * The details of the script.
   */
  result?: GetSortScriptResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetSortScriptResponseBodyResult,
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

