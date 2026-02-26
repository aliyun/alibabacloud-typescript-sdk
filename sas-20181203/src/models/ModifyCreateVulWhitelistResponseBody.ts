// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCreateVulWhitelistResponseBodyVulWhitelistList extends $dara.Model {
  /**
   * @example
   * 1002
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCreateVulWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6B23A612-D997-5176-8C3B-D640DFD65772
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the information about the whitelist.
   */
  vulWhitelistList?: ModifyCreateVulWhitelistResponseBodyVulWhitelistList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vulWhitelistList: 'VulWhitelistList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vulWhitelistList: ModifyCreateVulWhitelistResponseBodyVulWhitelistList,
    };
  }

  validate() {
    if(this.vulWhitelistList && typeof (this.vulWhitelistList as any).validate === 'function') {
      (this.vulWhitelistList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

