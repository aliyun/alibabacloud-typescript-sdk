// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubscriptionMetaShrinkRequest extends $dara.Model {
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
   * The region in which the change tracking instance resides.
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
   * The IDs of all change tracking subtasks in the distributed change tracking task. Separate multiple IDs with commas (,).
   * > You must specify at least one of this parameter and **Topics**. We recommend that you specify this parameter.
   * 
   * @example
   * ["zsls58agp6f****"]
   */
  subMigrationJobIdsShrink?: string;
  /**
   * @remarks
   * All topics of the distributed change tracking task. Separate multiple topics with commas (,).
   * > You must specify at least one of this parameter and **SubMigrationJobIds**. We recommend that you specify **SubMigrationJobIds**.
   * 
   * @example
   * ["rm_bp15jj3qi1p8f****"]
   */
  topicsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sid: 'Sid',
      subMigrationJobIdsShrink: 'SubMigrationJobIds',
      topicsShrink: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sid: 'string',
      subMigrationJobIdsShrink: 'string',
      topicsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

