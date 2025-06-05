// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVarsValueFromFieldRef extends $dara.Model {
  /**
   * @remarks
   * The path of the field.
   * 
   * @example
   * status.podIP
   */
  fieldPath?: string;
  static names(): { [key: string]: string } {
    return {
      fieldPath: 'FieldPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

