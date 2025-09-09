// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDrdsDbRdsRelationInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the storage instance.
   * 
   * @example
   * rm-bp16ad920ndxxxx02
   */
  rdsInstanceId?: string;
  /**
   * @remarks
   * The IDs of the read-only storage instances.
   */
  readOnlyInstanceInfo?: string[];
  /**
   * @remarks
   * The ID of the storage instance that is in use. If the specified instance in the request is a primary DRDS instance, the value of this parameter is the ID of the primary storage instance. If the specified instance in the request is a read-only DRDS instance, the value of this parameter is the ID of the secondary storage instance.
   * 
   * @example
   * rm-bp1l8xi1dd9xxxxbj
   */
  usedInstanceId?: string;
  /**
   * @remarks
   * The type of the storage instance that is in use.
   * 
   * @example
   * RDS
   */
  usedInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      rdsInstanceId: 'RdsInstanceId',
      readOnlyInstanceInfo: 'ReadOnlyInstanceInfo',
      usedInstanceId: 'UsedInstanceId',
      usedInstanceType: 'UsedInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsInstanceId: 'string',
      readOnlyInstanceInfo: { 'type': 'array', 'itemType': 'string' },
      usedInstanceId: 'string',
      usedInstanceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.readOnlyInstanceInfo)) {
      $dara.Model.validateArray(this.readOnlyInstanceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDrdsDbRdsRelationInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The structure information about the storage instances of the DRDS database. Each entry corresponds to a primary storage instance.
   */
  data?: GetDrdsDbRdsRelationInfoResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 82FD0D9B-9A65-40D3-B1D9-8851B1D4AF75
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetDrdsDbRdsRelationInfoResponseBodyData },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

