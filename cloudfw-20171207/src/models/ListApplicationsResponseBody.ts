// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * The application ID in the built-in application signature library.
   * 
   * @example
   * 10012150000
   */
  applicationId?: number;
  /**
   * @remarks
   * The application name. The name is returned in Chinese or English based on the Lang parameter.
   * 
   * @example
   * DingTalk
   */
  applicationName?: string;
  /**
   * @remarks
   * The application category ID.
   * 
   * @example
   * 8
   */
  categoryId?: number;
  /**
   * @remarks
   * The application category name. The name is returned in Chinese or English based on the Lang parameter.
   * 
   * @example
   * Office collaboration
   */
  categoryName?: string;
  /**
   * @remarks
   * The default action for the application in the built-in application library. The value is fixed as Alert (Monitor).
   * 
   * @example
   * Alert
   */
  defaultAction?: string;
  /**
   * @remarks
   * The application description. The description is returned in Chinese or English based on the Lang parameter.
   * 
   * @example
   * An enterprise-grade intelligent mobile office and collaboration platform that provides features such as instant messaging, audio and video conferencing, organizational management, online documents, approval and attendance, and AI office assistants
   */
  description?: string;
  /**
   * @remarks
   * The application group name.
   * 
   * @example
   * Dingtalk
   */
  groupName?: string;
  /**
   * @remarks
   * The level value of the application. The value is obtained from the built-in application signature library and used for list sorting.
   * 
   * @example
   * 700
   */
  level?: number;
  /**
   * @remarks
   * The list of protocols used by the application.
   */
  protocol?: string[];
  /**
   * @remarks
   * The list of detection prerequisites for the application.
   */
  requirements?: string[];
  /**
   * @remarks
   * The risk level. Valid values:
   * - **Information**: Informational.
   * - **Low**: Low.
   * - **Medium**: Medium.
   * - **High**: High.
   * - **Critical**: Critical.
   * 
   * @example
   * Low
   */
  risk?: string;
  /**
   * @remarks
   * The technology type name. The name is returned in Chinese or English based on the Lang parameter.
   * 
   * @example
   * Browser-based
   */
  technology?: string;
  /**
   * @remarks
   * The last update time of the application information. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1731465600
   */
  updatedTime?: number;
  /**
   * @remarks
   * The application vendor name. The name is returned in Chinese or English based on the Lang parameter.
   * 
   * @example
   * DingTalk Technology Co., Ltd
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      defaultAction: 'DefaultAction',
      description: 'Description',
      groupName: 'GroupName',
      level: 'Level',
      protocol: 'Protocol',
      requirements: 'Requirements',
      risk: 'Risk',
      technology: 'Technology',
      updatedTime: 'UpdatedTime',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      applicationName: 'string',
      categoryId: 'number',
      categoryName: 'string',
      defaultAction: 'string',
      description: 'string',
      groupName: 'string',
      level: 'number',
      protocol: { 'type': 'array', 'itemType': 'string' },
      requirements: { 'type': 'array', 'itemType': 'string' },
      risk: 'string',
      technology: 'string',
      updatedTime: 'number',
      vendor: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.protocol)) {
      $dara.Model.validateArray(this.protocol);
    }
    if(Array.isArray(this.requirements)) {
      $dara.Model.validateArray(this.requirements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of applications. In the Chinese environment, the applications are sorted in descending order of group name and ascending order of application level.
   */
  applications?: ListApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * The current page number.
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
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of applications that meet the filter conditions.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplications },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

