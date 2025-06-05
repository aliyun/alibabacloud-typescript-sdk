// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVarsValueFromFieldRef } from "./DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVarsValueFromFieldRef";


export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVarsValueFrom extends $dara.Model {
  /**
   * @remarks
   * The specified fields.
   */
  fieldRef?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVarsValueFromFieldRef;
  static names(): { [key: string]: string } {
    return {
      fieldRef: 'FieldRef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRef: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVarsValueFromFieldRef,
    };
  }

  validate() {
    if(this.fieldRef && typeof (this.fieldRef as any).validate === 'function') {
      (this.fieldRef as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

