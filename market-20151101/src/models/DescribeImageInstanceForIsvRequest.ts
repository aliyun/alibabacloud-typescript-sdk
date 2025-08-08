// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageInstanceForIsvRequest extends $dara.Model {
  customerPk?: number;
  ecsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      customerPk: 'CustomerPk',
      ecsInstanceId: 'EcsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerPk: 'number',
      ecsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

