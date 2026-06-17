// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventTopAttackAssetResponseBodyAssets extends $dara.Model {
  /**
   * @remarks
   * The number of attacks.
   * 
   * @example
   * 12
   */
  attackCnt?: number;
  /**
   * @remarks
   * The number of dropped attempts.
   * 
   * @example
   * 8
   */
  dropCnt?: number;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 10.3.54.XXX
   */
  ip?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-chengdu
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the asset instance.
   * 
   * @example
   * i-8vbdrjrxzt78****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The name of the resource instance.
   * 
   * @example
   * test_resource
   */
  resourceInstanceName?: string;
  /**
   * @remarks
   * The type of the resource instance.
   * 
   * @example
   * EcsPublicIP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      attackCnt: 'AttackCnt',
      dropCnt: 'DropCnt',
      ip: 'Ip',
      regionNo: 'RegionNo',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceName: 'ResourceInstanceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackCnt: 'number',
      dropCnt: 'number',
      ip: 'string',
      regionNo: 'string',
      resourceInstanceId: 'string',
      resourceInstanceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventTopAttackAssetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics of the assets.
   */
  assets?: DescribeRiskEventTopAttackAssetResponseBodyAssets[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B9BF7C33-9A23-5096-8568-A3DACAF0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assets: 'Assets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assets: { 'type': 'array', 'itemType': DescribeRiskEventTopAttackAssetResponseBodyAssets },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assets)) {
      $dara.Model.validateArray(this.assets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

