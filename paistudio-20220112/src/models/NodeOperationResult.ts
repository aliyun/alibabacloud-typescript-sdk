// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeOperationResult extends $dara.Model {
  message?: string;
  nodeName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      nodeName: 'NodeName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      nodeName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

