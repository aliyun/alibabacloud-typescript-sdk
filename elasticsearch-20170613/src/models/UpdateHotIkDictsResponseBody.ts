// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHotIkDictsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The size of the dictionary file. Unit: bytes.
   * 
   * @example
   * 6
   */
  fileSize?: number;
  /**
   * @remarks
   * The name of the dictionary file.
   * 
   * @example
   * deploy_0.dic
   */
  name?: string;
  /**
   * @remarks
   * The source type of the dictionary file. Valid values:
   * 
   * *   OSS
   * *   ORIGIN
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the dictionaries. Valid values:
   * 
   * *   MAIN: IK main dictionary
   * *   STOP: IK stopword list
   * 
   * @example
   * MAIN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
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

export class UpdateHotIkDictsResponseBody extends $dara.Model {
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
  result?: UpdateHotIkDictsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': UpdateHotIkDictsResponseBodyResult },
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

