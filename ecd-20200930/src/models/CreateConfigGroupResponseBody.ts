// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration group.
   * 
   * @example
   * ccg-0ctwi5zbswtql****
   */
  groupId?: string;
  /**
   * @remarks
   * The creation result of the configuration group.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE9472BC-0B5D-5458-85CD-C52BDD******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

