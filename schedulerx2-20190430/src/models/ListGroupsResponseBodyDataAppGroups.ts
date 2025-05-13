// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsResponseBodyDataAppGroups extends $dara.Model {
  /**
   * @remarks
   * The application group ID.
   * 
   * @example
   * 1
   */
  appGroupId?: number;
  /**
   * @remarks
   * The AppKey for the application.
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
   * The application version. 1: Basic version, 2: Professional version.
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
   * The application ID.
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

