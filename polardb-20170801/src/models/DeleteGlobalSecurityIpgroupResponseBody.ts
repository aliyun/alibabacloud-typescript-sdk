// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup } from "./DeleteGlobalSecurityIpgroupResponseBodyGlobalSecurityIpgroup";


export class DeleteGlobalSecurityIPGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the global IP whitelist template.
   */
  globalSecurityIPGroup?: DeleteGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B7BFB11-C077-4FE3-B051-F69CEB******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalSecurityIPGroup: 'GlobalSecurityIPGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityIPGroup: { 'type': 'array', 'itemType': DeleteGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.globalSecurityIPGroup)) {
      $dara.Model.validateArray(this.globalSecurityIPGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

