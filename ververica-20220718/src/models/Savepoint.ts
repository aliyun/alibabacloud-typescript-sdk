// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SavepointStatus } from "./SavepointStatus";


export class Savepoint extends $dara.Model {
  /**
   * @remarks
   * The time when the savepoint was created.
   * 
   * @example
   * 1659066711
   */
  createdAt?: number;
  /**
   * @remarks
   * The deployment ID.
   * 
   * @example
   * 1d716b22-6aad-4be2-85c2-50cfc757****
   */
  deploymentId?: string;
  /**
   * @remarks
   * The description of the savepoint.
   */
  description?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 5af678c0-7db0-4650-94c2-d2604f0a****
   */
  jobId?: string;
  /**
   * @remarks
   * The time when the savepoint was last modified.
   * 
   * @example
   * 1659069473
   */
  modifiedAt?: number;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * namespacetest
   */
  namespace?: string;
  /**
   * @remarks
   * Specifies whether the savepoint is in native format.
   * 
   * @example
   * TRUE
   */
  nativeFormat?: boolean;
  /**
   * @remarks
   * The savepoint ID.
   * 
   * @example
   * 354dde66-a3ae-463e-967a-0b4107fd****
   */
  savepointId?: string;
  /**
   * @remarks
   * The storage URL of the savepoint.
   * 
   * @example
   * https://oss/bucket/flink/flink-jobs/namespaces/vvp-team/deployments/5a19a71b-1c42-4f34-94fd-86cf60782c81/checkpoints/sp-3285
   */
  savepointLocation?: string;
  /**
   * @remarks
   * The method that is used to create a savepoint.
   * 
   * *   `USER_REQUEST`: The savepoint is manually created.
   * *   `STOP_WITH_SAVEPOINT`: The savepoint is created when you cancel the deployment.
   * *   `RETAINED_CHECKPOINT`: The savepoint is created based on the returned checkpoint.
   * 
   * @example
   * USER_REQUEST
   */
  savepointOrigin?: string;
  /**
   * @remarks
   * The status of the savepoint.
   */
  status?: SavepointStatus;
  /**
   * @remarks
   * Specifies whether to use the stop-with-drain mode.
   * 
   * @example
   * TRUE
   */
  stopWithDrainEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      deploymentId: 'deploymentId',
      description: 'description',
      jobId: 'jobId',
      modifiedAt: 'modifiedAt',
      namespace: 'namespace',
      nativeFormat: 'nativeFormat',
      savepointId: 'savepointId',
      savepointLocation: 'savepointLocation',
      savepointOrigin: 'savepointOrigin',
      status: 'status',
      stopWithDrainEnabled: 'stopWithDrainEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      deploymentId: 'string',
      description: 'string',
      jobId: 'string',
      modifiedAt: 'number',
      namespace: 'string',
      nativeFormat: 'boolean',
      savepointId: 'string',
      savepointLocation: 'string',
      savepointOrigin: 'string',
      status: SavepointStatus,
      stopWithDrainEnabled: 'boolean',
    };
  }

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

