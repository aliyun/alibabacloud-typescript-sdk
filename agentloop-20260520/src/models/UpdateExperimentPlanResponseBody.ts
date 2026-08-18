// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExperimentPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * Experiment plan updated successfully.
   */
  message?: string;
  /**
   * @remarks
   * The experiment plan ID.
   * 
   * @example
   * exp-plan-e95bff54685a4ae29ff3a834c1008a71
   */
  planId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3FE4CD1E-FF41-56BE-B590-7A021D9C1524
   */
  requestId?: string;
  /**
   * @remarks
   * The update result. The value is updated if the operation is successful.
   * 
   * @example
   * updated
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      planId: 'planId',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      planId: 'string',
      requestId: 'string',
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

