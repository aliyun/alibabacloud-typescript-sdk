// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNotifyTemplateListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh** (default): Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the user who switches from the current view to the destination view by using the management account.
   * 
   * @example
   * 137602425xxx8726
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Default value: 0. Valid values:
   * 
   * *   0: the view of the current Alibaba Cloud account.
   * *   1: the view of all accounts for the enterprise.
   * 
   * @example
   * 0
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      roleFor: 'number',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

