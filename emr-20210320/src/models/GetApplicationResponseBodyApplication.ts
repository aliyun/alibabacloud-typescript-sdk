// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApplicationResponseBodyApplicationActions } from "./GetApplicationResponseBodyApplicationActions";


export class GetApplicationResponseBodyApplication extends $dara.Model {
  /**
   * @remarks
   * 操作列表。
   */
  actions?: GetApplicationResponseBodyApplicationActions[];
  /**
   * @remarks
   * 应用名称。
   * 
   * @example
   * HDFS
   */
  applicationName?: string;
  /**
   * @remarks
   * 应用操作状态。
   */
  applicationState?: string;
  /**
   * @remarks
   * 应用版本。
   * 
   * @example
   * 2.8.5
   */
  applicationVersion?: string;
  /**
   * @remarks
   * 社区版本。
   * 
   * @example
   * 2.8.5
   */
  communityVersion?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      applicationName: 'ApplicationName',
      applicationState: 'ApplicationState',
      applicationVersion: 'ApplicationVersion',
      communityVersion: 'CommunityVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': GetApplicationResponseBodyApplicationActions },
      applicationName: 'string',
      applicationState: 'string',
      applicationVersion: 'string',
      communityVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

