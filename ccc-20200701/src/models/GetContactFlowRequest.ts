// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContactFlowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 274601be-a6d5-4429-bcef-32b51d031c6e
   */
  contactFlowId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 566399d7-5558-447c-a72f-9be2768b6a82
   */
  draftId?: string;
  /**
   * @remarks
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

