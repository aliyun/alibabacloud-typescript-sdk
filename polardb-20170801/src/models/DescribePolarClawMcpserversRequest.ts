// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawMCPServersRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * A list of MCP server names. If this parameter is empty, the configurations of all MCP servers are returned.
   */
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

