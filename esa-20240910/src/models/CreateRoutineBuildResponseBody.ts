// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineBuildResponseBody extends $dara.Model {
  /**
   * @remarks
   * The build ID in Apsara Devops.
   * 
   * @example
   * 1
   */
  pipeLineRunId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * The ER build task ID.
   * 
   * @example
   * 159782040838348
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

