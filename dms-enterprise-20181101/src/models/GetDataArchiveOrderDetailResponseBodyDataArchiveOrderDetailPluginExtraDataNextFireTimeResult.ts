// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataNextFireTimeResult extends $dara.Model {
  /**
   * @remarks
   * The type of scheduled triggering.
   * 
   * @example
   * NOT_SET
   */
  cronFireType?: string;
  static names(): { [key: string]: string } {
    return {
      cronFireType: 'CronFireType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronFireType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

