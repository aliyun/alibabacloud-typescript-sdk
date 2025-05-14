// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceResponseBody extends $dara.Model {
  /**
   * @example
   * 知识库描述
   */
  description?: string;
  /**
   * @example
   * 知识库
   */
  name?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * https://xxx/workspaceId
   */
  url?: string;
  /**
   * @example
   * YRBGvyxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      requestId: 'requestId',
      url: 'url',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      requestId: 'string',
      url: 'string',
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

