// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HyperNodeSpec extends $dara.Model {
  hyperNodeName?: string;
  nodeNames?: string;
  static names(): { [key: string]: string } {
    return {
      hyperNodeName: 'HyperNodeName',
      nodeNames: 'NodeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hyperNodeName: 'string',
      nodeNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

