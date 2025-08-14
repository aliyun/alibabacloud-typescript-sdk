// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveSnapshotTemplatesResponseBodyTemplateList extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2022-07-20T02:48:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   */
  templateName?: string;
  /**
   * @remarks
   * The interval between two adjacent snapshots. Unit: seconds.
   * 
   * @example
   * 10
   */
  timeInterval?: number;
  /**
   * @remarks
   * The type of the template.
   * 
   * Valid values:
   * 
   * *   system
   * *   custom
   * 
   * @example
   * custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      timeInterval: 'TimeInterval',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      templateId: 'string',
      templateName: 'string',
      timeInterval: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveSnapshotTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The sorting order of the results by creation time.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The list of the templates.
   */
  templateList?: ListLiveSnapshotTemplatesResponseBodyTemplateList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      templateList: 'TemplateList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      templateList: { 'type': 'array', 'itemType': ListLiveSnapshotTemplatesResponseBodyTemplateList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templateList)) {
      $dara.Model.validateArray(this.templateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

