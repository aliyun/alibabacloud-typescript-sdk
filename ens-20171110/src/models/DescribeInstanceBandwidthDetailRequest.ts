// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceBandwidthDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-01-11 30:00:00
   */
  endTime?: string;
  /**
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
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
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 200.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * vm
   */
  serviceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-01-11 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serviceType: 'ServiceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serviceType: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

