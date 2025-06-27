// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudGtmSystemLinesResponseBodySystemLinesSystemLine extends $dara.Model {
  /**
   * @remarks
   * The line code.
   * 
   * @example
   * aliyun_r_ap-south-1
   */
  code?: string;
  /**
   * @remarks
   * The display name of the line.
   * 
   * @example
   * Default
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the line can be selected as the source of a Domain Name System (DNS) request. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isAvailable?: boolean;
  /**
   * @remarks
   * The name of the line.
   * 
   * @example
   * Default
   */
  name?: string;
  /**
   * @remarks
   * The code of the parent line.
   * 
   * @example
   * String	aliyun
   */
  parentCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      displayName: 'DisplayName',
      isAvailable: 'IsAvailable',
      name: 'Name',
      parentCode: 'ParentCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      displayName: 'string',
      isAvailable: 'boolean',
      name: 'string',
      parentCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

