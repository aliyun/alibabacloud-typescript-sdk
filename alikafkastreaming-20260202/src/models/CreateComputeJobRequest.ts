// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComputeJobRequest extends $dara.Model {
  clientToken?: string;
  cuLimit?: number;
  cuReserved?: number;
  draftSql?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  jobConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  jobName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  remark?: string;
  upgradeMode?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      cuLimit: 'CuLimit',
      cuReserved: 'CuReserved',
      draftSql: 'DraftSql',
      instanceId: 'InstanceId',
      jobConfig: 'JobConfig',
      jobName: 'JobName',
      regionId: 'RegionId',
      remark: 'Remark',
      upgradeMode: 'UpgradeMode',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      cuLimit: 'number',
      cuReserved: 'number',
      draftSql: 'string',
      instanceId: 'string',
      jobConfig: 'string',
      jobName: 'string',
      regionId: 'string',
      remark: 'string',
      upgradeMode: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

