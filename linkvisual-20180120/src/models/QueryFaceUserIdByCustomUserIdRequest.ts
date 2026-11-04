// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceUserIdByCustomUserIdRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID in the caller system.
   * 
   * This parameter is required.
   * 
   * @example
   * TestCustomUserId
   */
  customUserId?: string;
  /**
   * @remarks
   * The isolation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * TestIsolationId
   */
  isolationId?: string;
  static names(): { [key: string]: string } {
    return {
      customUserId: 'CustomUserId',
      isolationId: 'IsolationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUserId: 'string',
      isolationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

