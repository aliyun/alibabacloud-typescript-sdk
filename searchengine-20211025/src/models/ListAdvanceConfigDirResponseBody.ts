// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAdvanceConfigDirResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The full path.
   * 
   * @example
   * /path/wpd/nae
   */
  fullPathName?: string;
  /**
   * @remarks
   * Indicates whether the entry is a directory. Valid values: - true: The entry is a directory. - false: The entry is not a directory.
   * 
   * @example
   * true
   */
  isDir?: boolean;
  /**
   * @remarks
   * Indicates whether the entry is a template. Valid values: - **true**: The entry is a template. - **false**: The entry is not a template.
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
   * hz_pre_vpc_domain_1
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
   * The request ID.
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
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

