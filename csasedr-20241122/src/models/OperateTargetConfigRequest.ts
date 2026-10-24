// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateTargetConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the rule switch configuration associated with the policy. It must be the same as the key used in the ListSystemConfigRules query.
   * 
   * This parameter is required.
   * 
   * @example
   * 8b37f46a-72d9-4c8c-bada-2f374a9c3410
   */
  selectionKey?: string;
  /**
   * @remarks
   * The status of the rule switch. Valid values:
   * - **add**: Enabled.
   * - **del**: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * add
   */
  status?: string;
  /**
   * @remarks
   * The list of system rule switch identifiers whose status is to be updated. The elements are obtained from the SwitchId returned by ListSystemConfigRules. A maximum of 100 items are supported. The backend updates the items one by one based on the list. The request is rejected if the list is not provided.
   */
  switchIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      selectionKey: 'SelectionKey',
      status: 'Status',
      switchIdList: 'SwitchIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectionKey: 'string',
      status: 'string',
      switchIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.switchIdList)) {
      $dara.Model.validateArray(this.switchIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

