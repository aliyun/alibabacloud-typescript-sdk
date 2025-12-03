// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessGroupsRequest extends $dara.Model {
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
   * 100
   */
  limit?: number;
  nextToken?: string;
  /**
   * @example
   * CreateTime
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

