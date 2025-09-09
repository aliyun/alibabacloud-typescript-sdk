// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsSuperAccountInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the ApsaraDB RDS for MySQL instances. Default value: **RDS**.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
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
   * [\\"rm-*****************\\",\\"rm-*****************\\"]
   */
  rdsInstance?: string[];
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      drdsInstanceId: 'DrdsInstanceId',
      rdsInstance: 'RdsInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
      drdsInstanceId: 'string',
      rdsInstance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.rdsInstance)) {
      $dara.Model.validateArray(this.rdsInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

