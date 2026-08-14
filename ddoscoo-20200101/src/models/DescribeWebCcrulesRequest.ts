// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebCCRulesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      pageNumber: 'number',
      pageSize: 'string',
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

