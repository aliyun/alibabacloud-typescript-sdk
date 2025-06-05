// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateContainerGroupRequestHostSecurityContextSysctl } from "./CreateContainerGroupRequestHostSecurityContextSysctl";


export class CreateContainerGroupRequestHostSecurityContext extends $dara.Model {
  /**
   * @remarks
   * Configure a security context to modify unsafe sysctls. For more information, see [Configure a security context](https://help.aliyun.com/document_detail/462313.html).
   */
  sysctl?: CreateContainerGroupRequestHostSecurityContextSysctl[];
  static names(): { [key: string]: string } {
    return {
      sysctl: 'Sysctl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysctl: { 'type': 'array', 'itemType': CreateContainerGroupRequestHostSecurityContextSysctl },
    };
  }

  validate() {
    if(Array.isArray(this.sysctl)) {
      $dara.Model.validateArray(this.sysctl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

