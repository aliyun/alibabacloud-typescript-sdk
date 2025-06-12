// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContactFlowResponseBodyData extends $dara.Model {
  /**
   * @example
   * 274601be-a6d5-4429-bcef-32b51d031c6e
   */
  contactFlowId?: string;
  /**
   * @example
   * 2021-07-14 10:48:43.0
   */
  createdTime?: string;
  definition?: string;
  /**
   * @example
   * 1.0
   */
  description?: string;
  /**
   * @example
   * 566399d7-5558-447c-a72f-9be2768b6a82
   */
  draftId?: string;
  /**
   * @example
   * editor-xxx
   */
  editor?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  name?: string;
  /**
   * @example
   * False
   */
  published?: boolean;
  /**
   * @example
   * MAIN_FLOW
   */
  type?: string;
  /**
   * @example
   * 2021-07-14 10:48:43.0
   */
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      createdTime: 'CreatedTime',
      definition: 'Definition',
      description: 'Description',
      draftId: 'DraftId',
      editor: 'Editor',
      instanceId: 'InstanceId',
      name: 'Name',
      published: 'Published',
      type: 'Type',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      createdTime: 'string',
      definition: 'string',
      description: 'string',
      draftId: 'string',
      editor: 'string',
      instanceId: 'string',
      name: 'string',
      published: 'boolean',
      type: 'string',
      updatedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

