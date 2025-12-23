// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSortScriptsResponseBodyResult extends $dara.Model {
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
   * test
   */
  scriptName?: string;
  /**
   * @remarks
   * The status of the script. Valid values:
   * 
   * *   configurable: The script is created, but no script files are uploaded.
   * *   not compiled: The script is not compiled.
   * *   compile failed: The compilation of the script failed.
   * *   compile successful: The script is compiled.
   * *   released: The script is published.
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

export class ListSortScriptsResponseBody extends $dara.Model {
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
   * The scripts.
   */
  result?: ListSortScriptsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSortScriptsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

