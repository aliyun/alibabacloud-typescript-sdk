// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The contact flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0f87c997-b0c1-41d4-9e9e-1b791de6ad1f
   */
  contactFlowId?: string;
  /**
   * @remarks
   * Specifies whether the contact flow is force deleted.
   */
  force?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      force: 'Force',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      force: 'boolean',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

