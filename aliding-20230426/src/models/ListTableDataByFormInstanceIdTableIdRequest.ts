// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTableDataByFormInstanceIdTableIdRequest extends $dara.Model {
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
   * FORM_PBKT0xxx
   */
  formInstanceId?: string;
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
   * 20
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxxx
   */
  systemToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1111
   */
  tableFieldId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      formInstanceId: 'FormInstanceId',
      formUuid: 'FormUuid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      systemToken: 'SystemToken',
      tableFieldId: 'TableFieldId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      formInstanceId: 'string',
      formUuid: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      systemToken: 'string',
      tableFieldId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

