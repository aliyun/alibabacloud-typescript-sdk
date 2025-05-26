// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Notification } from "./Notification";


export class CreateFigureClustersMergingTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset. For more information, see [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * This parameter is required.
   * 
   * @example
   * dataset001
   */
  datasetName?: string;
  /**
   * @remarks
   * The ID of the source group. You must specify either From or Froms, but not both.
   * 
   * @example
   * Cluster-2ab85905-23ba-4632-b2d8-1c21cfe****
   */
  from?: string;
  /**
   * @remarks
   * The IDs of source clustering groups. You must specify either From or Froms, but not both. You can specify up to 100 task IDs.
   */
  froms?: string[];
  /**
   * @remarks
   * The notification settings. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html).
   */
  notification?: Notification;
  /**
   * @remarks
   * The name of the project. For more information, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The custom tags, which can be used to search for and filter asynchronous tasks.
   * 
   * @example
   * {"key":"val"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the destination clustering group.
   * 
   * This parameter is required.
   * 
   * @example
   * Cluster-4a3a71c1-c092-4788-8826-2f65d17****
   */
  to?: string;
  /**
   * @remarks
   * The custom data, which is returned in an asynchronous notification and facilitates notification management. The maximum length is 2,048 bytes.
   * 
   * @example
   * {"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      from: 'From',
      froms: 'Froms',
      notification: 'Notification',
      projectName: 'ProjectName',
      tags: 'Tags',
      to: 'To',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      from: 'string',
      froms: { 'type': 'array', 'itemType': 'string' },
      notification: Notification,
      projectName: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      to: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.froms)) {
      $dara.Model.validateArray(this.froms);
    }
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

