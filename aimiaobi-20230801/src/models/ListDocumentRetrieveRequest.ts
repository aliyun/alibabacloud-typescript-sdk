// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocumentRetrieveRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  contentType?: string;
  /**
   * @example
   * 0
   */
  elementScope?: string;
  /**
   * @example
   * 2025-07-03
   */
  endDate?: string;
  /**
   * @example
   * 94
   */
  maxResults?: number;
  /**
   * @example
   * cEoBWREAXdxaOyjq/cqAbg==
   */
  nextToken?: string;
  /**
   * @example
   * 国务院办公室
   */
  office?: string;
  /**
   * @example
   * 检索Query
   */
  query?: string;
  /**
   * @example
   * 北京市
   */
  region?: string;
  /**
   * @example
   * 1
   */
  source?: string;
  /**
   * @example
   * 2025-10-10
   */
  startDate?: string;
  /**
   * @example
   * 1
   */
  subContentType?: string;
  /**
   * @example
   * 国防和交流合作事务
   */
  subjectClassify?: string;
  /**
   * @example
   * 宁民规〔2020〕5号
   */
  wordSize?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      elementScope: 'ElementScope',
      endDate: 'EndDate',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      office: 'Office',
      query: 'Query',
      region: 'Region',
      source: 'Source',
      startDate: 'StartDate',
      subContentType: 'SubContentType',
      subjectClassify: 'SubjectClassify',
      wordSize: 'WordSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      elementScope: 'string',
      endDate: 'string',
      maxResults: 'number',
      nextToken: 'string',
      office: 'string',
      query: 'string',
      region: 'string',
      source: 'string',
      startDate: 'string',
      subContentType: 'string',
      subjectClassify: 'string',
      wordSize: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

