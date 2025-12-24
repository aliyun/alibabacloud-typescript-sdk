// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlaybookReleasesResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookReleasesResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to publish the version.
   * 
   * @example
   * 145xxxx985
   */
  creator?: string;
  /**
   * @remarks
   * The description of the layer version.
   * 
   * @example
   * This is a new version
   */
  description?: string;
  /**
   * @remarks
   * The time when the version was created. The value is a 13-digit timestamp.
   * 
   * @example
   * 1655277397000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the version was modified. The value is a 13-digit timestamp.
   * 
   * @example
   * 1691460804000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 80xxx
   */
  id?: number;
  /**
   * @remarks
   * The MD5 value configured for the published version of the playbook.
   * 
   * @example
   * be0a4ef084dd174abe47xxxxx
   */
  taskflowMd5?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      taskflowMd5: 'TaskflowMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      taskflowMd5: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookReleasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  page?: DescribePlaybookReleasesResponseBodyPage;
  /**
   * @remarks
   * The information about the playbook version.
   */
  records?: DescribePlaybookReleasesResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3DFBE11C-6EB6-5166-92D6-3397796AFE1E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: DescribePlaybookReleasesResponseBodyPage,
      records: { 'type': 'array', 'itemType': DescribePlaybookReleasesResponseBodyRecords },
      requestId: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

