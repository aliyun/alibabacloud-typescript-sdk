// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExtendfilesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The path of the driver file.
   */
  filePath?: string;
  /**
   * @remarks
   * The size of the driver file.
   * 
   * @example
   * 968668
   */
  fileSize?: number;
  /**
   * @remarks
   * The name of the driver file.
   * 
   * @example
   * mysql-connector-java-5.1.35.jar
   */
  name?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * ORIGIN
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'filePath',
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
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

export class ListExtendfilesResponseBody extends $dara.Model {
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
  result?: ListExtendfilesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListExtendfilesResponseBodyResult },
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

