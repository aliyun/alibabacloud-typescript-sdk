// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryResponseBodyData extends $dara.Model {
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

export class UpdateMemoryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  data?: UpdateMemoryResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C0595DB0-D1EE-55C3-8DDD-790872C7EC2F
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
      data: UpdateMemoryResponseBodyData,
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

