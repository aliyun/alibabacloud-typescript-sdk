// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDbProxyInstanceSslRequest extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * normal
   */
  DBProxyEngineType?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n3axxxxx
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBProxyEngineType: 'DBProxyEngineType',
      dbInstanceId: 'DbInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyEngineType: 'string',
      dbInstanceId: 'string',
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

