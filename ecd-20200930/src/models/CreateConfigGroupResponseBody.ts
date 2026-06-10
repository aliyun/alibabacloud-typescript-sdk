// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Configuration group ID.
   * 
   * @example
   * ccg-0ctwi5zbswtql****
   */
  groupId?: string;
  /**
   * @remarks
   * Result message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
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

