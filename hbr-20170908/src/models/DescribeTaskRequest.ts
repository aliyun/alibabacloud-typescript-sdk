// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmvywqfey5njq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * t-*********************
   */
  taskId?: string;
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * 01W3ZZOQ
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      taskId: 'TaskId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      taskId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

