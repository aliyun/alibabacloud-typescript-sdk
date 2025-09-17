// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of a request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * cctest
   */
  resourceId?: string;
  /**
   * @remarks
   * The path of the resources. The relative resource ID. The resource path contains the complete resource location (parent resource/child resource).
   * 
   * @example
   * Instance/r-8vbf5abe31c9c4d4/Account/cctest
   */
  resourcePath?: string;
  /**
   * @remarks
   * The ID of the asynchronous task. If the operation is asynchronous, this field is returned. In this case, the HTTP status code 202 is returned.
   * 
   * @example
   * task-433aead756057fff8189a7ce5****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resourceId: 'resourceId',
      resourcePath: 'resourcePath',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
      resourcePath: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

