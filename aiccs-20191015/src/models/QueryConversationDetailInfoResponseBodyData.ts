// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryConversationDetailInfoResponseBodyDataOutputTags } from "./QueryConversationDetailInfoResponseBodyDataOutputTags";
import { QueryConversationDetailInfoResponseBodyDataVariables } from "./QueryConversationDetailInfoResponseBodyDataVariables";


export class QueryConversationDetailInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  conversationRecord?: string;
  outputTags?: QueryConversationDetailInfoResponseBodyDataOutputTags[];
  /**
   * @example
   * 1212131231231
   */
  pickUpTime?: number;
  /**
   * @example
   * https://********
   */
  recordingFileDownloadUrl?: string;
  variables?: QueryConversationDetailInfoResponseBodyDataVariables[];
  static names(): { [key: string]: string } {
    return {
      conversationRecord: 'ConversationRecord',
      outputTags: 'OutputTags',
      pickUpTime: 'PickUpTime',
      recordingFileDownloadUrl: 'RecordingFileDownloadUrl',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationRecord: 'string',
      outputTags: { 'type': 'array', 'itemType': QueryConversationDetailInfoResponseBodyDataOutputTags },
      pickUpTime: 'number',
      recordingFileDownloadUrl: 'string',
      variables: { 'type': 'array', 'itemType': QueryConversationDetailInfoResponseBodyDataVariables },
    };
  }

  validate() {
    if(Array.isArray(this.outputTags)) {
      $dara.Model.validateArray(this.outputTags);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

