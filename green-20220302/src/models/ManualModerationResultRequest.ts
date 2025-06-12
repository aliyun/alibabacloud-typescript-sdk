// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManualModerationResultRequest extends $dara.Model {
  /**
   * @remarks
   * Set of parameters required by the service, in JSON string format.
   * - TaskId: The task ID returned when the task was submitted.
   * 
   * @example
   * {\\"TaskId\\":\\"e5f2d886-4c23-440d-999c-bd98acde11b6\\"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

