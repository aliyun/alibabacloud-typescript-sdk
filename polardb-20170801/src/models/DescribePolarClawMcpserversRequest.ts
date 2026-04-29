// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawMCPServersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  serverList?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      serverList: 'ServerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      serverList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serverList)) {
      $dara.Model.validateArray(this.serverList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

