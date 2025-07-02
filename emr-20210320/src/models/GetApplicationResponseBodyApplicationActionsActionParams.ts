// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApplicationResponseBodyApplicationActionsActionParamsValueAttribute } from "./GetApplicationResponseBodyApplicationActionsActionParamsValueAttribute";


export class GetApplicationResponseBodyApplicationActionsActionParams extends $dara.Model {
  /**
   * @remarks
   * 动作参数描述。
   * 
   * @example
   * start
   */
  description?: string;
  /**
   * @remarks
   * 动作参数KEY。
   */
  key?: string;
  /**
   * @remarks
   * 动作参数属性。
   */
  valueAttribute?: GetApplicationResponseBodyApplicationActionsActionParamsValueAttribute;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
      valueAttribute: 'ValueAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      valueAttribute: GetApplicationResponseBodyApplicationActionsActionParamsValueAttribute,
    };
  }

  validate() {
    if(this.valueAttribute && typeof (this.valueAttribute as any).validate === 'function') {
      (this.valueAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

