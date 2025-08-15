// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceLinkedRoleStatusRequest extends $dara.Model {
  /**
   * @example
   * AliyunServiceRoleForOssMfd
   */
  serviceLinkedRole?: string;
  static names(): { [key: string]: string } {
    return {
      serviceLinkedRole: 'ServiceLinkedRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceLinkedRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

