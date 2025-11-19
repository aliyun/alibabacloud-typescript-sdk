// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelFeatures extends $dara.Model {
  agentThought?: boolean;
  multiToolCall?: boolean;
  streamToolCall?: boolean;
  toolCall?: boolean;
  vision?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentThought: 'agentThought',
      multiToolCall: 'multiToolCall',
      streamToolCall: 'streamToolCall',
      toolCall: 'toolCall',
      vision: 'vision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentThought: 'boolean',
      multiToolCall: 'boolean',
      streamToolCall: 'boolean',
      toolCall: 'boolean',
      vision: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

