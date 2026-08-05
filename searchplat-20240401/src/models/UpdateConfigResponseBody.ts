// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The configuration content.
   */
  configData?: { [key: string]: any };
  /**
   * @remarks
   * The configuration category.
   * 
   * @example
   * prompt
   */
  configType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-06-18T07:04:42.877040
   */
  createdAt?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-06-18T07:04:42.877040
   */
  updatedAt?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-001
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      configData: 'configData',
      configType: 'configType',
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      configType: 'string',
      createdAt: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.configData) {
      $dara.Model.validateMap(this.configData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAD430CC-D016-10BF-B837-8DA1EED87E94
   */
  requestId?: string;
  /**
   * @remarks
   * The result object.
   */
  result?: UpdateConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateConfigResponseBodyResult,
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

