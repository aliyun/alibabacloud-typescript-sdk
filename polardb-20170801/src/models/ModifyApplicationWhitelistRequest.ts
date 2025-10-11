// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * pac-*******************
   */
  componentId?: string;
  /**
   * @example
   * Append
   */
  modifyMode?: string;
  /**
   * @example
   * sg-**************
   */
  securityGroups?: string;
  /**
   * @example
   * default
   */
  securityIPArrayName?: string;
  /**
   * @example
   * 127.0.0.1,172.17.0.0/24
   */
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      componentId: 'ComponentId',
      modifyMode: 'ModifyMode',
      securityGroups: 'SecurityGroups',
      securityIPArrayName: 'SecurityIPArrayName',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      componentId: 'string',
      modifyMode: 'string',
      securityGroups: 'string',
      securityIPArrayName: 'string',
      securityIPList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

