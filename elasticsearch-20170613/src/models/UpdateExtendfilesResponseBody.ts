// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExtendfilesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The size of the extension file. Unit: bytes.
   * 
   * @example
   * 1853083
   */
  fileSize?: number;
  /**
   * @remarks
   * The name of the extension file.
   * 
   * @example
   * mysql-connector-java-6.0.2.jar
   */
  name?: string;
  /**
   * @remarks
   * The source of the extension file. Only ORIGIN (retained original extension file) is supported.
   * 
   * @example
   * ORIGIN
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExtendfilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: UpdateExtendfilesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': UpdateExtendfilesResponseBodyResult },
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

