// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClickhouseConf extends $dara.Model {
  initialReplica?: number;
  initialShard?: number;
  newNodeCount?: number;
  resizeType?: string;
  static names(): { [key: string]: string } {
    return {
      initialReplica: 'InitialReplica',
      initialShard: 'InitialShard',
      newNodeCount: 'NewNodeCount',
      resizeType: 'ResizeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initialReplica: 'number',
      initialShard: 'number',
      newNodeCount: 'number',
      resizeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

