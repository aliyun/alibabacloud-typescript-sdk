// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterDiagnosisResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The diagnosis result code. Valid values:
   * - 0: diagnosis completed.
   * - 1: diagnosis failed.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The time when the diagnosis was initiated.
   * 
   * @example
   * 2024-05-28T11:29Z
   */
  created?: string;
  /**
   * @remarks
   * The diagnosis ID.
   * 
   * @example
   * 6cf6b62e334e4583bdfd26707516****
   */
  diagnosisId?: string;
  /**
   * @remarks
   * The time when the diagnosis was completed.
   * 
   * @example
   * 2024-05-28T11:29Z
   */
  finished?: string;
  /**
   * @remarks
   * The diagnosis status message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The diagnosis result.
   * 
   * @example
   * {"phase":5,"version":"20240101"}
   */
  result?: string;
  /**
   * @remarks
   * The diagnosis status. Valid values:
   * - 0: diagnosis created.
   * - 1: diagnosis running.
   * - 2: diagnosis completed.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The diagnosis target.
   * 
   * @example
   * {"name":"cn-hongkong.10.0.0.246"}
   */
  target?: string;
  /**
   * @remarks
   * The diagnosis type.
   * 
   * @example
   * Node
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      created: 'created',
      diagnosisId: 'diagnosis_id',
      finished: 'finished',
      message: 'message',
      result: 'result',
      status: 'status',
      target: 'target',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      created: 'string',
      diagnosisId: 'string',
      finished: 'string',
      message: 'string',
      result: 'string',
      status: 'number',
      target: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

