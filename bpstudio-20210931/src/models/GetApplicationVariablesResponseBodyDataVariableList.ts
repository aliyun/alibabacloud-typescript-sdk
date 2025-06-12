// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationVariablesResponseBodyDataVariableList extends $dara.Model {
  /**
   * @example
   * ecs.c6.4xlarge
   */
  value?: string;
  /**
   * @example
   * ${instance_type}
   */
  variable?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      variable: 'Variable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      variable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

