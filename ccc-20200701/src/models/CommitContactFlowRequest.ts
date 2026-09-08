// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommitContactFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The contact flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7d706489-d06d-4a92-8666-8c9dba2c5cb1
   */
  contactFlowId?: string;
  /**
   * @remarks
   * The definition of the Interactive Voice Response (IVR).
   * 
   * This parameter is required.
   * 
   * @example
   * {"activities":[{"type":"INCOMING_CALL","id":"e98f0d47","name":"开始","properties":{"position":{"x":263,"y":164}},"events":[{"event":"complete","next":"2d3ad2c2","edgeId":"41f7dbd0"}],"nodeIndex":0},{"type":"HANGUP","id":"bd4f37e2","name":"挂机","properties":{"position":{"x":765,"y":185}},"events":[{"event":"complete","next":null}],"nodeIndex":999},{"type":"PLAY_SAY","id":"2d3ad2c2","name":"放音","properties":{"say":"您好，欢迎来到云联络中心。","audioResourceId":"","position":{"x":485.5,"y":153.5},"audioType":"tts","audioInterrupt":false},"events":[{"event":"complete","next":"bd4f37e2","edgeId":"e1af4f1f"}],"nodeIndex":1}],"description":""}
   */
  definition?: string;
  /**
   * @remarks
   * The version description.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  description?: string;
  /**
   * @remarks
   * The draft ID. This is the ID of the draft version that corresponds to the current contact flow.
   * 
   * This parameter is required.
   * 
   * @example
   * b28f74ca-5846-4496-8bbd-34fb1750798c
   */
  draftId?: string;
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

