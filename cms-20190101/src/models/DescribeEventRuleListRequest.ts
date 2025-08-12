// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventRuleListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 7378****
   */
  groupId?: string;
  /**
   * @remarks
   * Specifies whether to enable the event-triggered alert rule. Valid values:
   * 
   * - true (default)
   * - false
   * 
   * @example
   * true
   */
  isEnable?: boolean;
  /**
   * @remarks
   * The prefix in the name of the event-triggered alert rule.
   * 
   * @example
   * test
   */
  namePrefix?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Pages start from page 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      isEnable: 'IsEnable',
      namePrefix: 'NamePrefix',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      isEnable: 'boolean',
      namePrefix: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

