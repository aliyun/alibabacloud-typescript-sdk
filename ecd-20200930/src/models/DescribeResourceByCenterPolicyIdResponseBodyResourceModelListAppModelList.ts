// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceByCenterPolicyIdResponseBodyResourceModelListAppModelList extends $dara.Model {
  /**
   * @remarks
   * The application ID. This parameter is only applicable to cloud applications.
   * 
   * @example
   * 18
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * alipic-powergem
   */
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

