// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDatabasesProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the database instances that you want to move. The value is a JSON string. You can specify up to 100 database instance IDs. Separate multiple IDs with commas (,).
   * 
   * > You can call the [ListDatabases](https://help.aliyun.com/document_detail/2758822.html) operation to query the database instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 2,3
   */
  databaseIds?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-zmb2y9ydw08
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the project to which the database instances currently belong.
   * 
   * @example
   * 2
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the destination project to which you want to move the database instances.
   * > You can call the ListProjectsForProjectAuthorizationPrincipal operation to query the project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  targetProjectId?: number;
  static names(): { [key: string]: string } {
    return {
      databaseIds: 'DatabaseIds',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      targetProjectId: 'TargetProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseIds: 'string',
      instanceId: 'string',
      projectId: 'number',
      regionId: 'string',
      targetProjectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

