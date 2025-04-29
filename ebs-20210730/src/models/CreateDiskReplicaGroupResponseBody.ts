// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiskReplicaGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the replication pair-consistent group.
   * 
   * @example
   * pg-xxxxxxx
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      replicaGroupId: 'ReplicaGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicaGroupId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

