// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPlanningProposalResponseBodyDataOutlines extends $dara.Model {
  /**
   * @remarks
   * Outline.
   * 
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @remarks
   * Outline summary.
   * 
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlanningProposalResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Outline list.
   */
  outlines?: ListPlanningProposalResponseBodyDataOutlines[];
  /**
   * @remarks
   * Summary.
   * 
   * @example
   * 摘要
   */
  summary?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': ListPlanningProposalResponseBodyDataOutlines },
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlanningProposalResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * Business data.
   */
  data?: ListPlanningProposalResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Maximum number of returned results.
   * 
   * @example
   * 77
   */
  maxResults?: number;
  /**
   * @remarks
   * Fault description.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Token for the next page.
   * 
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @remarks
   * Unique request identity.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Is successful: true for success, false for failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 80
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListPlanningProposalResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

