// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarRecordInOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the component action.
   * 
   * > Call the [DescribeSoarTaskAndActions](~~DescribeSoarTaskAndActions~~) API to get this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 0531ff66-dd05-4f24-84bf-xxxxxxxx
   */
  actionUuid?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      actionUuid: 'ActionUuid',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionUuid: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

