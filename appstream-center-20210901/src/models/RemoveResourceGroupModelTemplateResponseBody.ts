// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveResourceGroupModelTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the operation fails.
   * 
   * @example
   * InvalidParameter.resourceGroupIds
   */
  code?: string;
  /**
   * @remarks
   * The error message returned if the operation fails.
   * 
   * @example
   * The parameter resourceGroupIds is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      resourceGroupId: 'ResourceGroupId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      resourceGroupId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveResourceGroupModelTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The removal results.
   */
  data?: RemoveResourceGroupModelTemplateResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': RemoveResourceGroupModelTemplateResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
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

