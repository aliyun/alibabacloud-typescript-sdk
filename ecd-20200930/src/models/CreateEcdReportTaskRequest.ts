// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEcdReportTaskRequestFilterList extends $dara.Model {
  /**
   * @remarks
   * The report query filter condition. The valid values vary based on the SubType value:
   * 1. Cloud computer report
   * - KeyWord: automatic keyword recognition for cloud computers.
   * - RegionId: the region ID.
   * - DesktopId: the cloud computer ID.
   * - DesktopName: the cloud computer name (fuzzy match).
   * - OfficeSiteId: the office network ID.
   * - OfficeSiteName: the office network name (fuzzy match).
   * - Status: the cloud computer status.
   * - DesktopType: the desktop specifications.
   * - DesktopIP: the cloud computer IP address.
   * - SubPayType: the billing method.
   * - EndUserId: the username (fuzzy match).
   * - ExpireTime: the expiration time in the yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\" format.
   * - IncludeAssignedUser: specifies whether users are assigned.
   * - ResourceGroupId: the resource group ID.
   * - PolicyId: the policy ID.
   * - Tag:{Tag Key}: the cloud computer tag. To query by multiple tags, pass in multiple Filter objects.
   * 
   * @example
   * Tag:TestKey
   */
  filterKey?: string;
  /**
   * @remarks
   * The values of the filter condition.
   * When FilterKey is set to one of the following values, only the first value in FilterValues is used:
   * - KeyWord
   * - DesktopName
   * - OfficeSiteName
   * - DesktopIP
   * - EndUserId
   * - ExpireTime
   * - IncludeAssignedUser
   * 
   * @example
   * Test cloud desktop name
   */
  filterValues?: string[];
  static names(): { [key: string]: string } {
    return {
      filterKey: 'FilterKey',
      filterValues: 'FilterValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterKey: 'string',
      filterValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.filterValues)) {
      $dara.Model.validateArray(this.filterValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEcdReportTaskRequest extends $dara.Model {
  businessChannel?: string;
  /**
   * @remarks
   * The list of filter conditions for query results. The filter condition objects have a logical AND (&) relationship.
   * Each filter condition contains FilterKey and FilterValues, which represent the filter condition name and specific values.
   */
  filterList?: CreateEcdReportTaskRequestFilterList[];
  /**
   * @remarks
   * The report language type. This is an enumerated value.
   * 
   * @example
   * zh-CN
   */
  langType?: string;
  /**
   * @remarks
   * The report file name.
   * 
   * @example
   * Test report name
   */
  reportFileName?: string;
  /**
   * @remarks
   * The report task subtype.
   * [_single.params.SubType.enum.  DESKTOP]Cloud computer
   * 
   * This parameter is required.
   * 
   * @example
   * DESKTOP
   */
  subType?: string;
  /**
   * @remarks
   * The report task type.
   * 
   * This parameter is required.
   * 
   * @example
   * RESOURCE_REPORT
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      filterList: 'FilterList',
      langType: 'LangType',
      reportFileName: 'ReportFileName',
      subType: 'SubType',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      filterList: { 'type': 'array', 'itemType': CreateEcdReportTaskRequestFilterList },
      langType: 'string',
      reportFileName: 'string',
      subType: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filterList)) {
      $dara.Model.validateArray(this.filterList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

