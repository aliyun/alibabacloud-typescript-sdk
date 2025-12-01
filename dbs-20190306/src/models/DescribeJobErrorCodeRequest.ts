// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobErrorCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the error message. Valid values:
   * 
   * *   **en** (default): English
   * *   **cn**: Chinese
   * 
   * @example
   * en
   */
  language?: string;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the full backup or restore task.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi0****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      language: 'Language',
      ownerId: 'OwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      language: 'string',
      ownerId: 'string',
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

