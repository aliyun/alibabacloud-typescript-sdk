// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlrRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which the RAM instance belongs.
   * 
   * @example
   * rg-aeky5f3qx6ceapq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

