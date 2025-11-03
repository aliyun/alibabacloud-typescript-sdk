// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEcdReportTaskRequestFilterList extends $dara.Model {
  /**
   * @remarks
   * The key of the filter condition for filtering query results. When SubType is set to:
   * 
   * 1.  DESKTOP (indicating a cloud computer report), the following filter conditions are available:
   * 
   * *   KeyWord: cloud computer keyword (supports automatic recognition)
   * *   RegionId: region ID
   * *   DesktopId: cloud computer ID
   * *   DesktopName: cloud computer name (supports fuzzy matching)
   * *   OfficeSiteId: office network ID
   * *   OfficeSiteName: office network name (supports fuzzy matching)
   * *   Status: cloud computer status
   * *   DesktopType: desktop type
   * *   DesktopIP: cloud computer IP address
   * *   SubPayType: billing method
   * *   EndUserId: user name (supports fuzzy matching)
   * *   ExpireTime: expiration date and time, in the yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\" format
   * *   IncludeAssignedUser: indicates whether the cloud computer is assigned to users or not
   * *   ResourceGroupId: resource group ID
   * *   PolicyId: policy ID
   * *   Tag:{Tag Key value}: cloud computer tag (To filter data using multiple tags, specify multiple filter condition objects.)
   * 
   * @example
   * Tag:TestKey
   */
  filterKey?: string;
  /**
   * @remarks
   * The value of the filter condition. Only the first value of the FilterValues parameter is used, if FilterKey is set to one of the following values:
   * 
   * *   KeyWord
   * *   DesktopName
   * *   OfficeSiteName
   * *   DesktopIP
   * *   EndUserId
   * *   ExpireTime
   * *   IncludeAssignedUser
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
  /**
   * @remarks
   * The filter conditions for filtering query results. The logical relationship between each filter condition is "and" (&). Each filter condition contains FilterKey and FilterValues, which indicate the key and value for the filter condition.
   */
  filterList?: CreateEcdReportTaskRequestFilterList[];
  /**
   * @remarks
   * The language of the report. An enumerated type.
   * 
   * Valid values:
   * 
   * *   zh-CN (default): Chinese
   * *   en-GB: English
   * 
   * @example
   * zh-CN
   */
  langType?: string;
  /**
   * @remarks
   * The name of the report file.
   */
  reportFileName?: string;
  /**
   * @remarks
   * The sub-type of the report export task.
   * 
   * Valid value:
   * 
   * *   DESKTOP: cloud computer
   * 
   * This parameter is required.
   * 
   * @example
   * DESKTOP
   */
  subType?: string;
  /**
   * @remarks
   * The type of the report task.
   * 
   * Valid value:
   * 
   * *   RESOURCE_REPORT
   * 
   * This parameter is required.
   * 
   * @example
   * RESOURCE_REPORT
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      filterList: 'FilterList',
      langType: 'LangType',
      reportFileName: 'ReportFileName',
      subType: 'SubType',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

