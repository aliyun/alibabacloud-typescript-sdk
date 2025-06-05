// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContextSysctls } from "./DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContextSysctls";


export class DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContext extends $dara.Model {
  /**
   * @remarks
   * sysctl parameters.
   */
  sysctls?: DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContextSysctls[];
  static names(): { [key: string]: string } {
    return {
      sysctls: 'Sysctls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysctls: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContextSysctls },
    };
  }

  validate() {
    if(Array.isArray(this.sysctls)) {
      $dara.Model.validateArray(this.sysctls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

