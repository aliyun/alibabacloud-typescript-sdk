// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartComputeJobRequest extends $dara.Model {
  clientToken?: string;
  cuLimit?: number;
  cuReserved?: number;
  draftSql?: string;
  draftSqlStart?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  jobName?: string;
  recoveryMode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      cuLimit: 'CuLimit',
      cuReserved: 'CuReserved',
      draftSql: 'DraftSql',
      draftSqlStart: 'DraftSqlStart',
      instanceId: 'InstanceId',
      jobName: 'JobName',
      recoveryMode: 'RecoveryMode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      cuLimit: 'number',
      cuReserved: 'number',
      draftSql: 'string',
      draftSqlStart: 'boolean',
      instanceId: 'string',
      jobName: 'string',
      recoveryMode: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

