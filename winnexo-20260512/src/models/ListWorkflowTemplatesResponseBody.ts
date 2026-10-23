// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowTemplatesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * The current effective version number. An empty value indicates that only a draft exists and the template cannot be used for work items.
   * 
   * @example
   * v1
   */
  effectiveVersion?: string;
  /**
   * @remarks
   * The time when the template was last modified. The time is in the ISO 8601 standard.
   * 
   * @example
   * example
   */
  gmtModified?: string;
  /**
   * @remarks
   * The latest version number.
   * 
   * @example
   * v2
   */
  latestVersion?: string;
  /**
   * @remarks
   * The status of the latest version. Valid values:
   * - DRAFT: Draft. The version contains uncommitted edits.
   * - SUBMITTED: Submitted.
   * 
   * @example
   * DRAFT
   */
  latestVersionStatus?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The number of unique owners.
   * 
   * @example
   * 1
   */
  ownerCount?: number;
  /**
   * @remarks
   * The number of steps configured with reviewers.
   * 
   * @example
   * 1
   */
  reviewStepCount?: number;
  /**
   * @remarks
   * The number of steps.
   * 
   * @example
   * 1
   */
  stepCount?: number;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * example
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      effectiveVersion: 'effectiveVersion',
      gmtModified: 'gmtModified',
      latestVersion: 'latestVersion',
      latestVersionStatus: 'latestVersionStatus',
      name: 'name',
      ownerCount: 'ownerCount',
      reviewStepCount: 'reviewStepCount',
      stepCount: 'stepCount',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      effectiveVersion: 'string',
      gmtModified: 'string',
      latestVersion: 'string',
      latestVersionStatus: 'string',
      name: 'string',
      ownerCount: 'number',
      reviewStepCount: 'number',
      stepCount: 'number',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether more data is available.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The list of template summaries on the current page.
   * 
   * @example
   * example
   */
  items?: ListWorkflowTemplatesResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries returned per page in the current request.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page. An empty string indicates that no more data is available.
   * 
   * @example
   * example
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page in the current request.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of visible entries that match the filter conditions.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      hasMore: 'hasMore',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': ListWorkflowTemplatesResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

