// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAdvanceConfigDirResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The absolute path in which the file is stored.
   * 
   * @example
   * "/path/wpd/nae"
   */
  fullPathName?: string;
  /**
   * @remarks
   * Indicates whether the file is a directory. Valid values: true and false.
   * 
   * @example
   * true
   */
  isDir?: boolean;
  /**
   * @remarks
   * Indicates whether the file is a template. Valid values: **true** and **false**.
   * 
   * @example
   * true
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * file_name_1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      fullPathName: 'fullPathName',
      isDir: 'isDir',
      isTemplate: 'isTemplate',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullPathName: 'string',
      isDir: 'boolean',
      isTemplate: 'boolean',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdvanceConfigDirResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The advanced configuration files.
   */
  result?: ListAdvanceConfigDirResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAdvanceConfigDirResponseBodyResult },
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

