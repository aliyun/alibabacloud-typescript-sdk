// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceBandwidthDetailResponseBodyBandwidths extends $dara.Model {
  /**
   * @example
   * 1972653484384661
   */
  aliUid?: number;
  /**
   * @example
   * 2024-01-11 00:00:00
   */
  bizTime?: string;
  /**
   * @example
   * cn-yichang-2
   */
  ensRegionId?: string;
  /**
   * @example
   * 1
   */
  flowType?: number;
  /**
   * @example
   * i-6ecpqvkicnchxccozrpxxxx
   */
  instanceId?: string;
  /**
   * @example
   * vm
   */
  instanceType?: string;
  /**
   * @example
   * 203.107.***
   */
  ip?: string;
  /**
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @example
   * 43795230
   */
  rxBw?: number;
  /**
   * @example
   * vm
   */
  serviceType?: string;
  /**
   * @example
   * 25415638
   */
  txBw?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bizTime: 'BizTime',
      ensRegionId: 'EnsRegionId',
      flowType: 'FlowType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ip: 'Ip',
      isp: 'Isp',
      rxBw: 'RxBw',
      serviceType: 'ServiceType',
      txBw: 'TxBw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      bizTime: 'string',
      ensRegionId: 'string',
      flowType: 'number',
      instanceId: 'string',
      instanceType: 'string',
      ip: 'string',
      isp: 'string',
      rxBw: 'number',
      serviceType: 'string',
      txBw: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

