// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyContentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The policy content.
   */
  contentShrink?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 83967609-7ea5-4f6d-a6ea-380b09e****
   */
  id?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * demo**
   */
  name?: string;
  portVersion?: string;
  static names(): { [key: string]: string } {
    return {
      contentShrink: 'Content',
      id: 'Id',
      name: 'Name',
      portVersion: 'PortVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentShrink: 'string',
      id: 'string',
      name: 'string',
      portVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

