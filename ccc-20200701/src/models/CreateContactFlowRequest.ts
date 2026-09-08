// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContactFlowRequest extends $dara.Model {
  /**
   * @remarks
   * IVR content.
   * 
   * This parameter is required.
   * 
   * @example
   * {"activities":[{"type":"INCOMING_CALL","id":"e98f0d47","name":"开始","properties":{"position":{"x":263,"y":164}},"events":[{"event":"complete","next":"2d3ad2c2","edgeId":"41f7dbd0"}],"nodeIndex":0},{"type":"HANGUP","id":"bd4f37e2","name":"挂机","properties":{"position":{"x":765,"y":185}},"events":[{"event":"complete","next":null}],"nodeIndex":999},{"type":"PLAY_SAY","id":"2d3ad2c2","name":"放音","properties":{"say":"您好，欢迎来到云联络中心。","audioResourceId":"","position":{"x":485.5,"y":153.5},"audioType":"tts","audioInterrupt":false},"events":[{"event":"complete","next":"bd4f37e2","edgeId":"e1af4f1f"}],"nodeIndex":1}],"description":""}
   */
  definition?: string;
  /**
   * @remarks
   * Version description.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  description?: string;
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
  /**
   * @remarks
   * Contact flow name.
   * 
   * This parameter is required.
   * 
   * @example
   * 默认流程
   */
  name?: string;
  /**
   * @remarks
   * Flow type.<br>
   * Main flow: MAIN_FLOW<br>
   * Child flow: SUB_FLOW<br>
   * Survey flow: SURVEY_FLOW<br><br><br>
   * 
   * This parameter is required.
   * 
   * @example
   * MAIN_FLOW
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

