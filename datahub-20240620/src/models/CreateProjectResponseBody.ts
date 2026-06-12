// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2025112610124322c53d0b028e7fa9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

