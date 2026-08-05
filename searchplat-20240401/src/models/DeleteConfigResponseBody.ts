// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConfigResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The configuration type.
   * 
   * - prompt
   * 
   * - lark
   * 
   * @example
   * prompt
   */
  configType?: string;
  /**
   * @remarks
   * Indicates whether the configuration is deleted.
   * 
   * @example
   * true
   */
  deleted?: boolean;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * a1b2c3
   */
  id?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1200827
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'configType',
      deleted: 'deleted',
      id: 'id',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      deleted: 'boolean',
      id: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CC93E65-6734-5060-BEF7-0EB0A4862BCF
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: DeleteConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DeleteConfigResponseBodyResult,
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

