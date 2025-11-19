// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryResponseBodyData extends $dara.Model {
  /**
   * @example
   * default_workspace
   */
  cmsWorkspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      cmsWorkspaceName: 'cmsWorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmsWorkspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemoryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  data?: CreateMemoryResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0FB1162C-D50B-5DA7-AD04-3417ABBF133A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateMemoryResponseBodyData,
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

