// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncErrorRequestListByCodeResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The instance ID
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * SQL ID.
   * 
   * @example
   * ad78a4e7d3ce81590c9dc2d5f4bc****
   */
  sqlId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      sqlId: 'sqlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sqlId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

