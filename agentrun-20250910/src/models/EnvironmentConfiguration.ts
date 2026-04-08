// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnvironmentVariable } from "./EnvironmentVariable";


export class EnvironmentConfiguration extends $dara.Model {
  /**
   * @remarks
   * 环境变量条目列表，每个条目包含 name、value 和可选 description
   * 
   * This parameter is required.
   */
  variables?: EnvironmentVariable[];
  static names(): { [key: string]: string } {
    return {
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': EnvironmentVariable },
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

