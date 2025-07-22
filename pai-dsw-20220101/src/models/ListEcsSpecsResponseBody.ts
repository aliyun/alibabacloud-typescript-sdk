// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEcsSpecsResponseBodyEcsSpecsLabels extends $dara.Model {
  /**
   * @remarks
   * The label key added to the ECS specification.
   * 
   * @example
   * SupportResourcePackDeduction
   */
  key?: string;
  /**
   * @remarks
   * The label value added to the ECS specification.
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsResponseBodyEcsSpecs extends $dara.Model {
  /**
   * @remarks
   * The accelerator type.
   * 
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 32
   */
  CPU?: number;
  /**
   * @remarks
   * The currency unit.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 4
   */
  GPU?: number;
  GPUMemorySize?: number;
  /**
   * @remarks
   * The GPU type. Valid values:
   * 
   * *   V100
   * *   A100
   * *   A10
   * *   T4
   * *   P100
   * 
   * @example
   * v100
   */
  GPUType?: string;
  /**
   * @remarks
   * The inbound bandwidth of the instance.
   * 
   * @example
   * 5120000
   */
  instanceBandwidthRx?: number;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.gn5-c28g1.7xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether the resource was available.
   * 
   * @example
   * True
   */
  isAvailable?: boolean;
  /**
   * @remarks
   * The labels of the ECS specification.
   * 
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: ListEcsSpecsResponseBodyEcsSpecsLabels[];
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 32
   */
  memory?: number;
  /**
   * @remarks
   * The price.
   * 
   * @example
   * 22.8
   */
  price?: number;
  spotStockStatus?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GB.
   * 
   * @example
   * 500
   */
  systemDiskCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      CPU: 'CPU',
      currency: 'Currency',
      GPU: 'GPU',
      GPUMemorySize: 'GPUMemorySize',
      GPUType: 'GPUType',
      instanceBandwidthRx: 'InstanceBandwidthRx',
      instanceType: 'InstanceType',
      isAvailable: 'IsAvailable',
      labels: 'Labels',
      memory: 'Memory',
      price: 'Price',
      spotStockStatus: 'SpotStockStatus',
      systemDiskCapacity: 'SystemDiskCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      CPU: 'number',
      currency: 'string',
      GPU: 'number',
      GPUMemorySize: 'number',
      GPUType: 'string',
      instanceBandwidthRx: 'number',
      instanceType: 'string',
      isAvailable: 'boolean',
      labels: { 'type': 'array', 'itemType': ListEcsSpecsResponseBodyEcsSpecsLabels },
      memory: 'number',
      price: 'number',
      spotStockStatus: 'string',
      systemDiskCapacity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: an internal error. All errors, except for parameter validation errors, are classified as internal errors.
   * *   ValidationError: a parameter validation error.
   * 
   * @example
   * null
   */
  code?: string;
  /**
   * @remarks
   * The specifications of the ECS instances returned on this page.
   */
  ecsSpecs?: ListEcsSpecsResponseBodyEcsSpecs[];
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   400
   * *   404
   * 
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of ECS instances.
   * 
   * @example
   * 35
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ecsSpecs: 'EcsSpecs',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      ecsSpecs: { 'type': 'array', 'itemType': ListEcsSpecsResponseBodyEcsSpecs },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ecsSpecs)) {
      $dara.Model.validateArray(this.ecsSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

