// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsResourceGroupsResponseBodyDataResourceGroups extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the resource group is available. Valid values:
   * 
   * - **True**
   * 
   * - **False**
   * 
   * @example
   * True
   */
  available?: boolean;
  /**
   * @remarks
   * The resource gradient values.
   */
  cuOptions?: number[];
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * - **Interactive**
   * 
   * - **Job**
   * 
   * > For more information about resource groups in Data Lakehouse Edition, see [Resource groups](https://help.aliyun.com/document_detail/428610.html).
   * 
   * @example
   * Job
   */
  groupType?: string;
  /**
   * @remarks
   * The remaining computing resources, in ACU.
   * 
   * @example
   * 512
   */
  leftComputeResource?: number;
  /**
   * @remarks
   * The maximum reserved computing resources, in ACU.
   * 
   * - If GroupType is **Interactive**, the maximum reserved computing resources are the current unallocated resources of the cluster, and the step size is 16 ACU.
   * 
   * - If GroupType is **Job**, the maximum reserved computing resources are the current unallocated resources of the cluster, and the step size is 8 ACU.
   * 
   * @example
   * 512
   */
  maxComputeResource?: number;
  /**
   * @remarks
   * The minimum reserved computing resources, in ACU.
   * 
   * - If GroupType is **Interactive**, the minimum reserved computing resources are 16 ACU.
   * 
   * - If GroupType is **Job**, the minimum reserved computing resources are 0 ACU.
   * 
   * @example
   * 0
   */
  minComputeResource?: number;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      cuOptions: 'CuOptions',
      groupName: 'GroupName',
      groupType: 'GroupType',
      leftComputeResource: 'LeftComputeResource',
      maxComputeResource: 'MaxComputeResource',
      minComputeResource: 'MinComputeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'boolean',
      cuOptions: { 'type': 'array', 'itemType': 'number' },
      groupName: 'string',
      groupType: 'string',
      leftComputeResource: 'number',
      maxComputeResource: 'number',
      minComputeResource: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cuOptions)) {
      $dara.Model.validateArray(this.cuOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsResourceGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The resource groups.
   */
  resourceGroups?: DescribeApsResourceGroupsResponseBodyDataResourceGroups[];
  /**
   * @remarks
   * The step size of the resource group, in ACU.
   * 
   * - If GroupType is **Interactive**, the step size is 16 ACU.
   * 
   * - If GroupType is **Job**, the step size is 8 ACU.
   * 
   * @example
   * 8
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      resourceGroups: 'ResourceGroups',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroups: { 'type': 'array', 'itemType': DescribeApsResourceGroupsResponseBodyDataResourceGroups },
      step: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroups)) {
      $dara.Model.validateArray(this.resourceGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsResourceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the resource groups.
   */
  data?: DescribeApsResourceGroupsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Additional information about the call. Valid values:
   * 
   * - Success is returned if the request is successful.
   * 
   * - An error code is returned if the request fails.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6FC370D7-1D4C-5A8E-805E-F73366382C66
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **True**
   * 
   * - **False**
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeApsResourceGroupsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

