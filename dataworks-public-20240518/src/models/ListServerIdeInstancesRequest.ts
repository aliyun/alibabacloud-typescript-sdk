// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerIdeInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword used to match the instance ID or instance name.
   * 
   * @example
   * notebook_dev
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to continue the query. You do not need to specify this parameter for the first call.
   * 
   * @example
   * CAESG****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The account ID of the user that owns the instance.
   * 
   * @example
   * 20933221576142****
   */
  relatedUserId?: string;
  /**
   * @remarks
   * The DataWorks resource group identifier. You can use the numeric ID of the resource group or the full identifier in the Serverless_res_group_{tenantId}_{resgId} format.
   * 
   * @example
   * Serverless_res_group_123456789012345_9876543210****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance subtype. Valid values:
   * - PERSONAL_DEV: personal development environment
   * - DATA_AGENT: Data Agent
   * 
   * @example
   * PERSONAL_DEV
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      relatedUserId: 'RelatedUserId',
      resourceGroupId: 'ResourceGroupId',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      relatedUserId: 'string',
      resourceGroupId: 'string',
      subType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

