// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchEmployeeFieldValuesRequest extends $dara.Model {
  /**
   * @example
   * APP_PBKxxx
   */
  appType?: string;
  /**
   * @example
   * 2021-05-01
   */
  createFromTimeGMT?: string;
  /**
   * @example
   * 2021-05-01
   */
  createToTimeGMT?: string;
  /**
   * @example
   * FORM-EF6Yxxx
   */
  formUuid?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * 2021-05-01
   */
  modifiedFromTimeGMT?: string;
  /**
   * @example
   * 2021-09-10
   */
  modifiedToTimeGMT?: string;
  /**
   * @example
   * 112212221
   */
  originatorId?: string;
  /**
   * @example
   * {\\"textField_annandfa\\":\\"1212\\"}
   */
  searchFieldJson?: string;
  /**
   * @example
   * hexxxx
   */
  systemToken?: string;
  /**
   * @example
   * [\\"textField_xahdfna\\"]
   */
  targetFieldJson?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      createFromTimeGMT: 'CreateFromTimeGMT',
      createToTimeGMT: 'CreateToTimeGMT',
      formUuid: 'FormUuid',
      language: 'Language',
      modifiedFromTimeGMT: 'ModifiedFromTimeGMT',
      modifiedToTimeGMT: 'ModifiedToTimeGMT',
      originatorId: 'OriginatorId',
      searchFieldJson: 'SearchFieldJson',
      systemToken: 'SystemToken',
      targetFieldJson: 'TargetFieldJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      createFromTimeGMT: 'string',
      createToTimeGMT: 'string',
      formUuid: 'string',
      language: 'string',
      modifiedFromTimeGMT: 'string',
      modifiedToTimeGMT: 'string',
      originatorId: 'string',
      searchFieldJson: 'string',
      systemToken: 'string',
      targetFieldJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

