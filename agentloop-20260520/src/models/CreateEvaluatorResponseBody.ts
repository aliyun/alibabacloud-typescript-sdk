// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEvaluatorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The evaluator name.
   * 
   * @example
   * trace_task_completion
   */
  name?: string;
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
   * The version number that is created.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      requestId: 'requestId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      requestId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

