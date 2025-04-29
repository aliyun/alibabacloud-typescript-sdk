// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshotsSnapshotTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the snapshot. The default values of Key and Value contain snapshot source information.
   * 
   * @example
   * acs:ecs:createFrom
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the snapshot. The default values of Key and Value contain snapshot source information.
   * 
   * @example
   * i-bp11qm0o3dk4iuc****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

