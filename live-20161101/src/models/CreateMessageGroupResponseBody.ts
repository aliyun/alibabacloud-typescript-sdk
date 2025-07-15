// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMessageGroupResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The extended field.
   * 
   * @example
   * test001
   */
  extension?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the message group.
   * 
   * @example
   * AE35-****-T95F
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      groupId: 'string',
    };
  }

  validate() {
    if(this.extension) {
      $dara.Model.validateMap(this.extension);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMessageGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-****-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: CreateMessageGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateMessageGroupResponseBodyResult,
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

