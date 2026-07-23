// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReDoRoutineBuildResponseBody extends $dara.Model {
  /**
   * @remarks
   * The workflow execution ID.
   * 
   * @example
   * 70
   */
  pipeLineRunId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8AA0364-0FDB-4AD5-AC74-D69FAB8924ED
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the ER build task.
   * 
   * @example
   * 156773519472872
   */
  routineBuildId?: number;
  static names(): { [key: string]: string } {
    return {
      pipeLineRunId: 'PipeLineRunId',
      requestId: 'RequestId',
      routineBuildId: 'RoutineBuildId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeLineRunId: 'number',
      requestId: 'string',
      routineBuildId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

