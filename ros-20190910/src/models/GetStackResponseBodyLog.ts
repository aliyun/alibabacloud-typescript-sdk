// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStackResponseBodyLogResourceLogs } from "./GetStackResponseBodyLogResourceLogs";
import { GetStackResponseBodyLogTerraformLogs } from "./GetStackResponseBodyLogTerraformLogs";


export class GetStackResponseBodyLog extends $dara.Model {
  /**
   * @remarks
   * The logs of resources in the stack. This parameter is returned if LogOption is set to Resource or All.
   * 
   * >  The logs are returned only for resources of specific types, such as the `ALIYUN::ROS::ResourceCleaner` type.
   */
  resourceLogs?: GetStackResponseBodyLogResourceLogs[];
  /**
   * @remarks
   * The logs generated when the Terraform stack is run. This parameter is returned only for a Terraform stack. This parameter is returned if LogOption is left empty or set to Stack or All.
   * 
   * >  This parameter is not returned for a running stack. The logs are generated from the most recent operation on the stack, such as the creation, resumed creation, update, or deletion operation.
   */
  terraformLogs?: GetStackResponseBodyLogTerraformLogs[];
  static names(): { [key: string]: string } {
    return {
      resourceLogs: 'ResourceLogs',
      terraformLogs: 'TerraformLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceLogs: { 'type': 'array', 'itemType': GetStackResponseBodyLogResourceLogs },
      terraformLogs: { 'type': 'array', 'itemType': GetStackResponseBodyLogTerraformLogs },
    };
  }

  validate() {
    if(Array.isArray(this.resourceLogs)) {
      $dara.Model.validateArray(this.resourceLogs);
    }
    if(Array.isArray(this.terraformLogs)) {
      $dara.Model.validateArray(this.terraformLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

