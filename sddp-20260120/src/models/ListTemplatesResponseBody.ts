// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The current sensitivity level of the template.
   * 
   * @example
   * 3
   */
  currentRiskLevel?: number;
  /**
   * @remarks
   * The description of the classification and grading template.
   * 
   * @example
   * Used to detect common sensitive data
   */
  description?: string;
  /**
   * @remarks
   * The time when the template was created. This value is a UNIX timestamp in milliseconds since 1970-01-01 00:00:00 UTC.
   * 
   * @example
   * 1788566400000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the template was last modified. This value is a UNIX timestamp in milliseconds since 1970-01-01 00:00:00 UTC.
   * 
   * @example
   * 1788566400000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the classification and grading template.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The maximum category level supported by the template.
   * 
   * @example
   * 3
   */
  maxCategoryLevel?: number;
  /**
   * @remarks
   * The maximum sensitivity level supported by the template.
   * 
   * @example
   * 5
   */
  maxRiskLevel?: number;
  /**
   * @remarks
   * The name of the classification and grading template.
   * 
   * @example
   * General classification and grading template
   */
  name?: string;
  /**
   * @remarks
   * The status of the template. Valid values:
   * - 0: disabled.
   * - 1: enabled as the primary template.
   * - 2: active template.
   * - 3: general-purpose detection model.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether the template can be edited. Valid values:
   * - 0: not supported.
   * - 1: supported.
   * 
   * @example
   * 1
   */
  supportEdit?: number;
  /**
   * @remarks
   * The category of the template. Valid values:
   * - 1: Alibaba template.
   * - 2: finance template.
   * - 3: energy template.
   * - 4: personal information security template.
   * - 5: travel template.
   * - 65: general-purpose template.
   * - 66: custom template.
   * - 67: template from another cloud service.
   * 
   * @example
   * 65
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      currentRiskLevel: 'CurrentRiskLevel',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      maxCategoryLevel: 'MaxCategoryLevel',
      maxRiskLevel: 'MaxRiskLevel',
      name: 'Name',
      status: 'Status',
      supportEdit: 'SupportEdit',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentRiskLevel: 'number',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      maxCategoryLevel: 'number',
      maxRiskLevel: 'number',
      name: 'string',
      status: 'number',
      supportEdit: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned data.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of records returned by the current query.
   */
  items?: ListTemplatesResponseBodyItems[];
  /**
   * @remarks
   * The number of records per page for the current query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which can be used to locate this API call.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that match the current query scope.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': ListTemplatesResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

