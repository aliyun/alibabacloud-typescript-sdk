// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawSkillsMarketResponseBodySkillList extends $dara.Model {
  /**
   * @remarks
   * The assessment status.
   * 
   * @example
   * 2
   */
  assessmentStatus?: string;
  /**
   * @remarks
   * The number of downloads.
   * 
   * @example
   * 3
   */
  downloadCount?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * alibabacloud-polardbx-sql
   */
  skillName?: string;
  /**
   * @remarks
   * The skill version.
   * 
   * @example
   * 0.0.1-beta.1
   */
  skillVersion?: string;
  /**
   * @remarks
   * The OpenAPI summary.
   * 
   * @example
   * Automatically created repository via Image-manage
   */
  summary?: string;
  /**
   * @remarks
   * The tag group.
   */
  tagList?: string[];
  /**
   * @remarks
   * The title.
   * 
   * @example
   * Alcohol
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      assessmentStatus: 'AssessmentStatus',
      downloadCount: 'DownloadCount',
      skillName: 'SkillName',
      skillVersion: 'SkillVersion',
      summary: 'Summary',
      tagList: 'TagList',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assessmentStatus: 'string',
      downloadCount: 'string',
      skillName: 'string',
      skillVersion: 'string',
      summary: 'string',
      tagList: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarClawSkillsMarketResponseBody extends $dara.Model {
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
   * The number of entries on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CDB3258F-B5DE-43C4-8935-CBA0CA******
   */
  requestId?: string;
  /**
   * @remarks
   * The list of skills.
   */
  skillList?: DescribePolarClawSkillsMarketResponseBodySkillList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 9
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      skillList: 'SkillList',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      skillList: { 'type': 'array', 'itemType': DescribePolarClawSkillsMarketResponseBodySkillList },
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.skillList)) {
      $dara.Model.validateArray(this.skillList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

