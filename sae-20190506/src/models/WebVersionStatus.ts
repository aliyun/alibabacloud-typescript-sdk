// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebVersionStatus extends $dara.Model {
  /**
   * @remarks
   * The error message of the application execution. If the execution is successful, a null value is returned.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The state of the application execution. Valid values:
   * 
   * *   **Completed**: The execution is successful.
   * *   **Updating**:The instance is being updated.
   * *   **Updating**:The execution failed and a non-null error message is returned.
   * 
   * @example
   * Completed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

