// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsPerformanceSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of a DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-*****************
   */
  rdsInstanceId?: string[];
  /**
   * @remarks
   * The ID of the region where the streaming domain resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      rdsInstanceId: 'RdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      rdsInstanceId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rdsInstanceId)) {
      $dara.Model.validateArray(this.rdsInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

