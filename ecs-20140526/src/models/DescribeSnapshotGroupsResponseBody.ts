// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSnapshotGroupsResponseBodySnapshotGroups } from "./DescribeSnapshotGroupsResponseBodySnapshotGroups";


export class DescribeSnapshotGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * > If the return value is empty, no more data exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3F9A4CC4-362F-469A-B9EF-B3204EF8AA3A
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the snapshot-consistent groups.
   */
  snapshotGroups?: DescribeSnapshotGroupsResponseBodySnapshotGroups;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      snapshotGroups: 'SnapshotGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      snapshotGroups: DescribeSnapshotGroupsResponseBodySnapshotGroups,
    };
  }

  validate() {
    if(this.snapshotGroups && typeof (this.snapshotGroups as any).validate === 'function') {
      (this.snapshotGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

