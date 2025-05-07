// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWebApplicationInstancesShrinkRequest extends $dara.Model {
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
  instanceIdsShrink?: string;
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
  statusesShrink?: string;
  /**
   * @remarks
   * The ID of the application version.
   * 
   * @example
   * 001
   */
  versionIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIdsShrink: 'InstanceIds',
      limit: 'Limit',
      namespaceId: 'NamespaceId',
      startTime: 'StartTime',
      statusesShrink: 'Statuses',
      versionIdsShrink: 'VersionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIdsShrink: 'string',
      limit: 'string',
      namespaceId: 'string',
      startTime: 'number',
      statusesShrink: 'string',
      versionIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

