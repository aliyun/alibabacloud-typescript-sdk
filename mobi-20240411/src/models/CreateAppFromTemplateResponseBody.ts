// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAppFromTemplateResponseBodyData extends $dara.Model {
  /**
   * @example
   * 172050620*****
   */
  appId?: string;
  description?: string;
  /**
   * @example
   * 2024-03-26T10:22Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-03-26T10:22Z
   */
  gmtModified?: string;
  /**
   * @example
   * -1
   */
  icon?: string;
  name?: string;
  /**
   * @example
   * 1731664463*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      icon: 'Icon',
      name: 'Name',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      icon: 'string',
      name: 'string',
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

export class CreateAppFromTemplateResponseBody extends $dara.Model {
  data?: CreateAppFromTemplateResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36F552F7-E61E-556A-9957-8284318D1B9C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateAppFromTemplateResponseBodyData,
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

