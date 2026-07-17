// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScriptFileNamesResponseBodyResult extends $dara.Model {
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
   * The name of the script file.
   * 
   * @example
   * my_cava_script.cava
   */
  fileName?: string;
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
   * The path of the script.
   * 
   * @example
   * src
   */
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      fileName: 'fileName',
      modifyTime: 'modifyTime',
      pathName: 'pathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      fileName: 'string',
      modifyTime: 'string',
      pathName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptFileNamesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * ABCDEFGH
   */
  requestId?: string;
  /**
   * @remarks
   * The list of scripts.
   */
  result?: GetScriptFileNamesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetScriptFileNamesResponseBodyResult },
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

