// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadOutboundTaskCallListShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 张先生
   */
  customerNameOrPhone?: string;
  /**
   * @example
   * ["1", "2"]
   */
  displayStatusListShrink?: string;
  /**
   * @example
   * ["有意向", "高净值"]
   */
  labelTagsShrink?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * nextToken
   * 
   * @example
   * 51CC272E-D879-1B23-B98E-FCFB072D362B
   */
  nextToken?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * 1
   */
  taskId?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      customerNameOrPhone: 'CustomerNameOrPhone',
      displayStatusListShrink: 'DisplayStatusList',
      labelTagsShrink: 'LabelTags',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      size: 'Size',
      taskId: 'TaskId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      customerNameOrPhone: 'string',
      displayStatusListShrink: 'string',
      labelTagsShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      size: 'number',
      taskId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

