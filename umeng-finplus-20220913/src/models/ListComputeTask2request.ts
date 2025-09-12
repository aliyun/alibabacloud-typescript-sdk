// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeTask2Request extends $dara.Model {
  clientId?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

