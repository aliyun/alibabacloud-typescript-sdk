// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetFormDataByIdListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_PBKT0xxx
   */
  appType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FORM-xxxxx
   */
  formInstanceIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FORM-xxxxx
   */
  formUuid?: string;
  /**
   * @example
   * true
   */
  needFormInstanceValue?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxxx
   */
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      formInstanceIdList: 'FormInstanceIdList',
      formUuid: 'FormUuid',
      needFormInstanceValue: 'NeedFormInstanceValue',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      formInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      formUuid: 'string',
      needFormInstanceValue: 'boolean',
      systemToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.formInstanceIdList)) {
      $dara.Model.validateArray(this.formInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

