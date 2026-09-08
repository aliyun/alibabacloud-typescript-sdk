// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiscardEditingContactFlowRequest extends $dara.Model {
  /**
   * @remarks
   * Contact flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3ff4e021-fd63-4572-ad8c-10ed69972965
   */
  contactFlowId?: string;
  /**
   * @remarks
   * Draft ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0aa493d6-58eb-4290-9ba2-e1c2c615b46b
   */
  draftId?: string;
  /**
   * @remarks
   * Instance ID.
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
      draftId: 'DraftId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      draftId: 'string',
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

