// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommitContactFlowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7d706489-d06d-4a92-8666-8c9dba2c5cb1
   */
  contactFlowId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  definition?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b28f74ca-5846-4496-8bbd-34fb1750798c
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
      definition: 'Definition',
      description: 'Description',
      draftId: 'DraftId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      definition: 'string',
      description: 'string',
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

