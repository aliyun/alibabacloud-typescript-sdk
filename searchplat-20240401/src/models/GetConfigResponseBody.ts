// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The configuration content.
   */
  configData?: { [key: string]: any };
  /**
   * @remarks
   * The configuration type.
   * 
   * - prompt
   * 
   * - lark
   * 
   * @example
   * lark
   */
  configType?: string;
  /**
   * @remarks
   * The time when the configuration was created.
   * 
   * @example
   * 2026-06-18T07:04:42.877040
   */
  createdAt?: number;
  /**
   * @remarks
   * The time when the configuration was last updated.
   * 
   * @example
   * 2026-06-18T07:04:42.877040
   */
  updatedAt?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1201721
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
      createdAt: 'number',
      updatedAt: 'number',
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

export class GetConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7CC54C38-D721-4C55-A410-2A94B5A6BE0F
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: GetConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetConfigResponseBodyResult,
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

