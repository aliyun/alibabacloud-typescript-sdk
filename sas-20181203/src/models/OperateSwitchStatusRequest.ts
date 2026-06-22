// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateSwitchStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * > You can call the [ListSasContainerWebDefenseRule](https://help.aliyun.com/document_detail/2623606.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 900001
   */
  ruleId?: number;
  /**
   * @remarks
   * The status of the container tamper-proofing rule. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

