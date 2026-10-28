// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubscriptionMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the distributed change tracking task.
   * 
   * > This parameter is required.
   * 
   * @example
   * dtsbr4m9luv2******
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The region where the change tracking instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * z38m91gg2******
   */
  sid?: string;
  /**
   * @remarks
   * The IDs of all change tracking subtasks under the distributed change tracking task. Separate multiple subtask IDs with commas (,).
   * > You must specify at least one of this parameter and the **Topics** parameter. We recommend that you specify this parameter.
   * 
   * @example
   * ["zsls58agp6f****"]
   */
  subMigrationJobIds?: { [key: string]: any };
  /**
   * @remarks
   * All change tracking topics under the distributed change tracking task. Separate multiple topics with commas (,).
   * > You must specify at least one of this parameter and the **SubMigrationJobIds** parameter. We recommend that you specify the **SubMigrationJobIds** parameter.
   * 
   * @example
   * ["rm_bp15jj3qi1p8f****"]
   */
  topics?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sid: 'Sid',
      subMigrationJobIds: 'SubMigrationJobIds',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sid: 'string',
      subMigrationJobIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      topics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.subMigrationJobIds) {
      $dara.Model.validateMap(this.subMigrationJobIds);
    }
    if(this.topics) {
      $dara.Model.validateMap(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

