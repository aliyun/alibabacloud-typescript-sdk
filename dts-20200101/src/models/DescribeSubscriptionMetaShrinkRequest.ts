// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubscriptionMetaShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the distributed change tracking instance.
   * 
   * @example
   * dtsbr4m9luv2******
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the change tracking instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * This parameter is required.
   * 
   * @example
   * z38m91gg2******
   */
  sid?: string;
  /**
   * @remarks
   * The IDs of all subtasks in the distributed change tracking task. Separate multiple subtask IDs with commas (,).
   * 
   * >  You must specify at least one of the SubMigrationJobIds and **Topics** parameters. We recommend that you specify the SubMigrationJobIds parameter.
   * 
   * @example
   * z38m91gg2******
   */
  subMigrationJobIdsShrink?: string;
  /**
   * @remarks
   * The topics of all subtasks in the distributed change tracking task. Separate multiple topics with commas (,).
   * 
   * >  You must specify at least one of the **SubMigrationJobIds** and Topics parameters. We recommend that you specify the **SubMigrationJobIds** parameter.
   * 
   * @example
   * cn_hangzhou_rm_bp1n0x0x5tz******_dtstestdata_version2
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

