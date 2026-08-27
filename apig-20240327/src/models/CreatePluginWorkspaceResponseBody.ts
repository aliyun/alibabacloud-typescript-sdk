// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePluginWorkspaceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 12345678
   */
  repoId?: string;
  /**
   * @example
   * plw-xxxxxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      repoId: 'repoId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repoId: 'string',
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

export class CreatePluginWorkspaceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CreatePluginWorkspaceResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 01A02219-8028-57D8-9D60-2D167FF9118E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreatePluginWorkspaceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

