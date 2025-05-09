// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StsApplyVO extends $dara.Model {
  aliyunId?: string;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
      duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

