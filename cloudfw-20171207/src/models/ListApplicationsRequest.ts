// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Exact match is supported.
   * 
   * @example
   * 10012150000
   */
  applicationId?: number;
  /**
   * @remarks
   * The application name. Fuzzy match is supported.
   * 
   * @example
   * DingTalk
   */
  applicationName?: string;
  /**
   * @remarks
   * The application category ID. Exact match is supported.
   * 
   * @example
   * 8
   */
  categoryId?: number;
  /**
   * @remarks
   * The application category name. Fuzzy match is supported.
   * 
   * @example
   * Office collaboration
   */
  categoryName?: string;
  /**
   * @remarks
   * The application description. Fuzzy match is supported.
   * 
   * @example
   * Office
   */
  description?: string;
  /**
   * @remarks
   * The application group name. Fuzzy match is supported.
   * 
   * @example
   * Dingtalk
   */
  groupName?: string;
  /**
   * @remarks
   * The language of the returned information. Valid values:
   * - **zh**: Chinese. This is the default value.
   * - **en**: English.
   * This parameter determines whether the application name, category name, technology type, vendor, and description are returned in Chinese or English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. The value must be greater than or equal to 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The risk level. Exact match is supported. Valid values:
   * - **Information**: Informational.
   * - **Low**: Low.
   * - **Medium**: Medium.
   * - **High**: High.
   * - **Critical**: Critical.
   * If an invalid value is passed, this filter condition is ignored.
   * 
   * @example
   * Low
   */
  risk?: string;
  /**
   * @remarks
   * The technology type name. Fuzzy match is supported.
   * 
   * @example
   * Browser-based
   */
  technology?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      description: 'Description',
      groupName: 'GroupName',
      lang: 'Lang',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      risk: 'Risk',
      technology: 'Technology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      applicationName: 'string',
      categoryId: 'number',
      categoryName: 'string',
      description: 'string',
      groupName: 'string',
      lang: 'string',
      pageNo: 'number',
      pageSize: 'number',
      risk: 'string',
      technology: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

