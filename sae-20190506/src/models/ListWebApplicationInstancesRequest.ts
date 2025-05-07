// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWebApplicationInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the operation ended.
   * 
   * @example
   * 1715567192
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-667d143a-17b4e0fa-46d3a2******
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The number of application instances returned.
   * 
   * @example
   * 10
   */
  limit?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  namespaceId?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 1562831689704
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the application instance.
   */
  statuses?: string[];
  /**
   * @remarks
   * The ID of the application version.
   * 
   * @example
   * 001
   */
  versionIds?: string[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      limit: 'Limit',
      namespaceId: 'NamespaceId',
      startTime: 'StartTime',
      statuses: 'Statuses',
      versionIds: 'VersionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      limit: 'string',
      namespaceId: 'string',
      startTime: 'number',
      statuses: { 'type': 'array', 'itemType': 'string' },
      versionIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    if(Array.isArray(this.versionIds)) {
      $dara.Model.validateArray(this.versionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

