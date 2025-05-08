// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEdgeContainerAppVersionResponseBodyVersionContainers } from "./GetEdgeContainerAppVersionResponseBodyVersionContainers";


export class GetEdgeContainerAppVersionResponseBodyVersion extends $dara.Model {
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
   * The container images deployed for this version.
   */
  containers?: GetEdgeContainerAppVersionResponseBodyVersionContainers[];
  /**
   * @remarks
   * The time when the version was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-07-01T09:32:33Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the version was last released. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2023-07-25T04:58:05Z
   */
  lastPublishTime?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The time when the version was released. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-14T02:04:03Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * aaa
   */
  remarks?: string;
  /**
   * @remarks
   * The status of the current version. Valid values:
   * 
   * *   created: The version is created.
   * *   failed: The version failed to be created.
   * *   creating: The version is being created.
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
   * 2021-12-03T10:52:52Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the created version.
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
      containers: { 'type': 'array', 'itemType': GetEdgeContainerAppVersionResponseBodyVersionContainers },
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

