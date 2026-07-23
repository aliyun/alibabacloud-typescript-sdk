// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExperimentPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The experiment plan ID.
   * 
   * @example
   * exp-plan-aa1a66b074bc42aa8696c73c7dc9b718
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
   * The deletion result. The value is deleted if the operation is successful.
   * 
   * @example
   * deleted
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'planId',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

