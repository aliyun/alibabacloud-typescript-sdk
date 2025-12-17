// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalTimerBatchesRequest extends $dara.Model {
  /**
   * @example
   * ccg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  searchRegionId?: string;
  /**
   * @example
   * 1
   */
  timerType?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      searchRegionId: 'SearchRegionId',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      maxResults: 'string',
      nextToken: 'string',
      regionId: 'string',
      searchRegionId: 'string',
      timerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

