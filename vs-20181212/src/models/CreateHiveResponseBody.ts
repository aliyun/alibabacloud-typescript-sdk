// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHiveResponseBody extends $dara.Model {
  /**
   * @example
   * hive-6c1418bf513e400bb697307c077a0ec3
   */
  hiveId?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hiveId: 'HiveId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hiveId: 'string',
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

