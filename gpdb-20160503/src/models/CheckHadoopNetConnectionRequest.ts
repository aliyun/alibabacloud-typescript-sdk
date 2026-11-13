// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckHadoopNetConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * 1. You must specify either DataSourceId or EmrInstanceId as input. Otherwise, an error is returned.
   * 2. If both parameters are specified, EmrInstanceId takes precedence.
   * 3. If the data source specified by DataSourceId is a self-managed Hadoop cluster, an error is returned.
   * 
   * @example
   * 126
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The EMR instance ID.
   * 
   * @example
   * c-xxx
   */
  emrInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dataSourceId: 'DataSourceId',
      emrInstanceId: 'EmrInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dataSourceId: 'string',
      emrInstanceId: 'string',
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

