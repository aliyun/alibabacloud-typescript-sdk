// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSpecNodeGroupParam extends $dara.Model {
  newInstanceType?: string;
  nodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      newInstanceType: 'NewInstanceType',
      nodeGroupId: 'NodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newInstanceType: 'string',
      nodeGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

