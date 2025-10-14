// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNASAvailableResourceInfoResponseBodyNasAvailableResourceInfo extends $dara.Model {
  /**
   * @remarks
   * The product supported by the edge node.
   */
  ability?: string[];
  /**
   * @remarks
   * The region to which the ENS node belongs.
   * 
   * @example
   * SouthWestChina
   */
  area?: string;
  /**
   * @remarks
   * The English name.
   * 
   * @example
   * cn-chenzhou-telecom_unicom_cmcc
   */
  enName?: string;
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-chenzhou-telecom_unicom_cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The name of the ENS node.
   */
  ensRegionName?: string;
  /**
   * @remarks
   * the number of available NAS resources.
   * 
   * @example
   * 1
   */
  nasAvailableAmount?: number;
  /**
   * @remarks
   * The types of available NAS resources.
   * 
   * @example
   * capacity
   */
  nasAvailableStorgeType?: string;
  /**
   * @remarks
   * The province to which the ENS node belongs.
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      ability: 'Ability',
      area: 'Area',
      enName: 'EnName',
      ensRegionId: 'EnsRegionId',
      ensRegionName: 'EnsRegionName',
      nasAvailableAmount: 'NasAvailableAmount',
      nasAvailableStorgeType: 'NasAvailableStorgeType',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ability: { 'type': 'array', 'itemType': 'string' },
      area: 'string',
      enName: 'string',
      ensRegionId: 'string',
      ensRegionName: 'string',
      nasAvailableAmount: 'number',
      nasAvailableStorgeType: 'string',
      province: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ability)) {
      $dara.Model.validateArray(this.ability);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASAvailableResourceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned service code. A value of 0 indicates that the operation was successful.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * you are not authorized to this workspace, or workspace not exists.
   */
  message?: string;
  /**
   * @remarks
   * The information of available NAS resources.
   */
  nasAvailableResourceInfo?: DescribeNASAvailableResourceInfoResponseBodyNasAvailableResourceInfo[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * AAE90880-4970-4D81-A534-A6C0F3631F74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nasAvailableResourceInfo: 'NasAvailableResourceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nasAvailableResourceInfo: { 'type': 'array', 'itemType': DescribeNASAvailableResourceInfoResponseBodyNasAvailableResourceInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nasAvailableResourceInfo)) {
      $dara.Model.validateArray(this.nasAvailableResourceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

