// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessRulesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @example
   * 10
   */
  limit?: number;
  nextToken?: string;
  /**
   * @example
   * Priority
   */
  orderBy?: string;
  /**
   * @example
   * ASC
   */
  orderType?: string;
  /**
   * @example
   * 10
   */
  startOffset?: number;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      inputRegionId: 'InputRegionId',
      limit: 'Limit',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      startOffset: 'StartOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      inputRegionId: 'string',
      limit: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      startOffset: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

