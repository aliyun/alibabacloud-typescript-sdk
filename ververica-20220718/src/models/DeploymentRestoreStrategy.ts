// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeploymentRestoreStrategy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow specific operator states to be skipped. This parameter is required only when a Python deployment or a JAR deployment is resumed with state data.
   * 
   * @example
   * TRUE
   */
  allowNonRestoredState?: boolean;
  /**
   * @remarks
   * The time point at which the deployment is started without states. You must enter a 13-digit timestamp. If you set the kind parameter to NONE, you can configure this parameter to allow all source tables for which the startTime parameter is configured to read data from the specified time point.
   * 
   * @example
   * 1660293803155
   */
  jobStartTimeInMs?: number;
  /**
   * @remarks
   * The type of the start offset. Valid values:
   * 
   * *   NONE: The deployment is started without states.
   * *   LATEST_SAVEPOINT: The deployment is started from the latest savepoint.
   * *   FROM_SAVEPOINT: The deployment is started from the specified savepoint.
   * *   LATEST_STATE: The deployment is started from the latest state of the deployment.
   * 
   * @example
   * LATEST_STATE
   */
  kind?: string;
  /**
   * @remarks
   * The ID of the savepoint for starting the deployment. This parameter is required when the kind parameter is set to FROM_SAVEPOINT.
   * 
   * @example
   * 354dde66-a3ae-463e-967a-0b4107fd****
   */
  savepointId?: string;
  static names(): { [key: string]: string } {
    return {
      allowNonRestoredState: 'allowNonRestoredState',
      jobStartTimeInMs: 'jobStartTimeInMs',
      kind: 'kind',
      savepointId: 'savepointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowNonRestoredState: 'boolean',
      jobStartTimeInMs: 'number',
      kind: 'string',
      savepointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

