// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVarsValueFrom } from "./DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVarsValueFrom";


export class DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVars extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * @example
   * PATH
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable.
   * 
   * @example
   * /usr/bin/
   */
  value?: string;
  /**
   * @remarks
   * The source of the environment variable value. This parameter has a value only when the Value parameter is left empty.
   */
  valueFrom?: DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVarsValueFrom;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valueFrom: 'ValueFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valueFrom: DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVarsValueFrom,
    };
  }

  validate() {
    if(this.valueFrom && typeof (this.valueFrom as any).validate === 'function') {
      (this.valueFrom as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

