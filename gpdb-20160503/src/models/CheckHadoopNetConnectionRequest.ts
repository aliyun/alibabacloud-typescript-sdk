// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckHadoopNetConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * 1. Either DataSourceId or EmrInstanceId must be specified as input, otherwise an error will occur.
   * 2. If both of the above parameters are specified, EmrInstanceId will be used preferentially.
   * 3. If the data source specified by DataSourceId is a self-built Hadoop cluster, an error will occur directly.
   * 
   * @example
   * 126
   */
  dataSourceId?: string;
  /**
   * @remarks
   * EMR instance ID.
   * 
   * @example
   * c-xxx
   */
  emrInstanceId?: string;
  /**
   * @remarks
   * Region ID.
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

