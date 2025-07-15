// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEcdReportTaskRequestFilterList extends $dara.Model {
  /**
   * @example
   * Tag:TestKey
   */
  filterKey?: string;
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
  filterList?: CreateEcdReportTaskRequestFilterList[];
  /**
   * @example
   * zh-CN
   */
  langType?: string;
  reportFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DESKTOP
   */
  subType?: string;
  /**
   * @remarks
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

