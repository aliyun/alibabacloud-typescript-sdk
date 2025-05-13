// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDefaultWorkspaceResponseBodyConditions extends $dara.Model {
  /**
   * @remarks
   * The returned status code. HTTP status code 200 indicates that the request was successful. Other HTTP status codes indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message. If the returned status code is 200, this parameter is empty.
   * 
   * @example
   * Create Failed
   */
  message?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   CREATING: The workspace is being created.
   * *   WORKSPACE_CREATED: The workspace is created.
   * *   MEMBERS_ADDED: The member is added.
   * *   ENABLED: The workspace is created and the member is added.
   * 
   * @example
   * CREATING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

