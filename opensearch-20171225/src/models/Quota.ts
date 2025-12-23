// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Quota extends $dara.Model {
  computeResource?: number;
  docSize?: number;
  orderType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      docSize: 'docSize',
      orderType: 'orderType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'number',
      docSize: 'number',
      orderType: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

