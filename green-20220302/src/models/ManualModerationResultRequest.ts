// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManualModerationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The set of parameters required by the service, in JSON string format.
   * - taskId: The task ID returned when the task was submitted.
   * 
   * @example
   * \\"taskId\\":\\"m_tx_8oaprwnGUKuuLYNwV21JRf-VQjzQX3\\"
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

