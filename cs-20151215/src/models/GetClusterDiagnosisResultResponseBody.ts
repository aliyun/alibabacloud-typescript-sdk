// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterDiagnosisResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code that indicates the diagnostic result. Valid values:
   * 
   * *   0: the diagnostic is completed.
   * *   1: the diagnostic failed.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The time when the diagnostic is initiated.
   * 
   * @example
   * 2024-05-28T11:29Z
   */
  created?: string;
  /**
   * @remarks
   * The diagnostic ID.
   * 
   * @example
   * 6cf6b62e334e4583bdfd26707516****
   */
  diagnosisId?: string;
  /**
   * @remarks
   * The time when the diagnostic is completed.
   * 
   * @example
   * 2024-05-28T11:29Z
   */
  finished?: string;
  /**
   * @remarks
   * The diagnostic status information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The diagnostic result.
   * 
   * @example
   * {"phase":5,"version":"20240101"}
   */
  result?: string;
  /**
   * @remarks
   * The status of the diagnostic. Valid values:
   * 
   * *   0: The diagnostic is created.
   * *   1: The diagnostic is running.
   * *   2: The diagnostic is completed.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The diagnostic object.
   * 
   * @example
   * {"name":"cn-hongkong.10.0.0.246"}
   */
  target?: string;
  /**
   * @remarks
   * The type of the diagnostic.
   * 
   * Valid values:
   * 
   * *   node
   * *   ingress
   * *   cluster
   * *   memory
   * *   pod
   * *   service
   * *   network
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

