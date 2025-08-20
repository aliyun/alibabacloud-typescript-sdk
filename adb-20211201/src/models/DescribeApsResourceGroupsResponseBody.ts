// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsResourceGroupsResponseBodyDataResourceGroups extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the resource group is available. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * True
   */
  available?: boolean;
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
   * *   **Interactive**
   * *   **Job**
   * 
   * >  For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/428610.html).
   * 
   * @example
   * Job
   */
  groupType?: string;
  /**
   * @remarks
   * The amount of remaining computing resources. Unit: ACUs.
   * 
   * @example
   * 512
   */
  leftComputeResource?: number;
  /**
   * @remarks
   * The maximum amount of reserved computing resources. Unit: ACUs.
   * 
   * *   If the value of GroupType is **Interactive**, the amount of reserved computing resources that are not allocated in the cluster is returned in increments of 16 ACUs.
   * *   If the value of GroupType is **Job**, the amount of reserved computing resources that are not allocated in the cluster is returned in increments of 8 ACUs.
   * 
   * @example
   * 512
   */
  maxComputeResource?: number;
  /**
   * @remarks
   * The minimum amount of reserved computing resources. Unit: ACUs.
   * 
   * *   If the value of GroupType is **Interactive**, 16 is returned.
   * *   If the value of GroupType is **Job**, 0 is returned.
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
   * The queried resource groups.
   */
  resourceGroups?: DescribeApsResourceGroupsResponseBodyDataResourceGroups[];
  /**
   * @remarks
   * The step size of resources. Unit: AnalyticDB compute units (ACUs).
   * 
   * *   If the value of GroupType is **Interactive**, 16 is returned.
   * *   If the value of GroupType is **Job**, 8 is returned.
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
   * The queried resource groups.
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
   * The returned message.
   * 
   * *   If the request was successful, a success message is returned.
   * *   If the request failed, an error message is returned.
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
   * *   **true**
   * *   **false**
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

