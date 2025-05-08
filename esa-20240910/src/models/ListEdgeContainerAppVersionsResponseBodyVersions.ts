// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEdgeContainerAppVersionsResponseBodyVersionsContainers } from "./ListEdgeContainerAppVersionsResponseBodyVersionsContainers";


export class ListEdgeContainerAppVersionsResponseBodyVersions extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The containers in the version.
   */
  containers?: ListEdgeContainerAppVersionsResponseBodyVersionsContainers[];
  /**
   * @remarks
   * The time when the version was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-10T02:53:16Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the version was last released. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-10T02:48:36Z
   */
  lastPublishTime?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * version01
   */
  name?: string;
  /**
   * @remarks
   * The time when the version was released. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-10T02:48:36Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test version
   */
  remarks?: string;
  /**
   * @remarks
   * The status of the current version. Valid values:
   * 
   * *   **created**
   * *   **failed**
   * *   **creating**
   * 
   * @example
   * created
   */
  status?: string;
  /**
   * @remarks
   * The time when the version was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2023-04-16 10:51:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * ver-87962637161651****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      containers: 'Containers',
      createTime: 'CreateTime',
      lastPublishTime: 'LastPublishTime',
      name: 'Name',
      publishTime: 'PublishTime',
      remarks: 'Remarks',
      status: 'Status',
      updateTime: 'UpdateTime',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      containers: { 'type': 'array', 'itemType': ListEdgeContainerAppVersionsResponseBodyVersionsContainers },
      createTime: 'string',
      lastPublishTime: 'string',
      name: 'string',
      publishTime: 'string',
      remarks: 'string',
      status: 'string',
      updateTime: 'string',
      versionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.containers)) {
      $dara.Model.validateArray(this.containers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

