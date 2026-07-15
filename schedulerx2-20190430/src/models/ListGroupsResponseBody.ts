// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsResponseBodyDataAppGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 1
   */
  appGroupId?: number;
  /**
   * @remarks
   * The application key.
   * 
   * @example
   * a3G77O6NZxq/lyo1NC****==
   */
  appKey?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * DocTest
   */
  appName?: string;
  /**
   * @remarks
   * The application version. Valid values: 1 (Basic Edition) and 2 (Professional Edition).
   * 
   * @example
   * 2
   */
  appVersion?: number;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether logging is enabled.
   * 
   * - true: Logging is enabled.
   * 
   * - false: Logging is disabled.
   * 
   * @example
   * false
   */
  enableLog?: boolean;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * DocTest.Group
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * 1a72ecb1-b4cc-400a-a71b-20cdec9b****
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appKey: 'AppKey',
      appName: 'AppName',
      appVersion: 'AppVersion',
      description: 'Description',
      enableLog: 'EnableLog',
      groupId: 'GroupId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      appKey: 'string',
      appName: 'string',
      appVersion: 'number',
      description: 'string',
      enableLog: 'boolean',
      groupId: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of applications and their details.
   */
  appGroups?: ListGroupsResponseBodyDataAppGroups[];
  static names(): { [key: string]: string } {
    return {
      appGroups: 'AppGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroups: { 'type': 'array', 'itemType': ListGroupsResponseBodyDataAppGroups },
    };
  }

  validate() {
    if(Array.isArray(this.appGroups)) {
      $dara.Model.validateArray(this.appGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The list of applications.
   */
  data?: ListGroupsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 71BCC0E3-64B2-4B63-A870-AFB64EBCB58A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListGroupsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

