// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * Keywords in the app name
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The pagination size of the resulting value cannot be less than the minimum value of 1 and cannot be greater than the maximum value of 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination page number of the resulting value cannot be less than the minimum value of 1 and cannot be greater than the maximum value of 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  nextToken?: number;
  /**
   * @remarks
   * 1 update time,<br>2 creation time
   * 
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource Id
   * 
   * @example
   * vsw-xxxxxxxxxxxx
   */
  resourceId?: string;
  showHide?: boolean;
  /**
   * @remarks
   * The status of the applications to be returned.
   * 
   * @example
   * The following values are "success" and "release".
   * If the input value is "success", the returned application list includes all applications in the Deployed_Success state of successful deployment.
   * If the input value is release, the returned application list includes all applications in the release success (Destroyed_Success) and release failure (Destroyed_Failure) status.
   * If this parameter is left blank, the returned app list includes apps in all states.
   */
  status?: string;
  /**
   * @remarks
   * Template Id
   * 
   * @example
   * 0KSXXX6SJU03TXXX
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderType: 'OrderType',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      showHide: 'ShowHide',
      status: 'Status',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'number',
      orderType: 'number',
      resourceGroupId: 'string',
      resourceId: 'string',
      showHide: 'boolean',
      status: 'string',
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

