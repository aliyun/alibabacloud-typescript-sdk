// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAgentProfileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The agent profile ID.
   * 
   * @example
   * 3d7d253cfb77476da0cf3681bcf7b4e8
   */
  agentProfileId?: string;
  /**
   * @remarks
   * Agent Template ID
   * 
   * @example
   * default-survey
   */
  agentProfileTemplateId?: string;
  /**
   * @remarks
   * Agent Type
   * 
   * @example
   * Human
   */
  agentType?: string;
  /**
   * @remarks
   * The API plugin configuration.
   * 
   * @example
   * []
   */
  apiPluginJson?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1721356124220
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a large model scenario
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 788066f2-f160-458e-a3bb-83e1c9d5606d
   */
  instanceId?: string;
  /**
   * @remarks
   * The instruction configuration.
   * 
   * @example
   * [{
   * 	"type": "TransferToAgent",
   * 	"instructions": [{
   * 		"code": "Transfer0",
   * 		"skillGroupId": "testcode",
   * 		"skillGroupName": "skillgroup"
   * 	}],
   * 	"timeoutEnable": false
   * }, {
   * 	"type": "CollectNumber",
   * 	"instructions": [{
   * 		"code": "DTMF0",
   * 		"name": "Number collection test",
   * 		"collectVoice": true,
   * 		"terminator": "#"
   * 	}]
   * }]
   */
  instructionJson?: string;
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * [{
   * 	"name": "Satisfied",
   * 	"description": "Whether interested in the introduced game content",
   * 	"valueList": "[\\"Interested\\",\\"Not interested\\"]"
   * }]
   */
  labelsJson?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * model_002
   */
  model?: string;
  /**
   * @remarks
   * The model configuration.
   * 
   * @example
   * ""
   */
  modelConfig?: string;
  /**
   * @remarks
   * The NLU configuration. Parameter settings:
   * 
   * - chatbotInstanceId: the Chatbot large model robot instance ID.
   * - faqCategoryIds: the attached FAQ category IDs.
   * - llmAgentId: the Chatbot large model workspace ID.
   * - llmAgentKey: the Chatbot large model workspace key.
   * - llmAgentInstanceId: the Chatbot large model workspace instance ID.
   * 
   * @example
   * {
   * 	"chatbotInstanceId": "chatbot-cn-j7eiVJZRmb",
   * 	"faqCategoryIds": [30000474726],
   * 	"llmAgentId": "1246206",
   * 	"llmAgentInstanceId": "outbound_05efb75a-95df-438e-9b9b-8f2c857d5498",
   * 	"llmAgentKey": "d682716514814815ae77757c0bcbda01_p_outbound_public"
   * }
   */
  nluConfigJson?: string;
  /**
   * @remarks
   * The prompt in professional mode.
   * 
   * @example
   * \\nName: Annie \\nIdentity: Game Promoter\\nBackground: Promote the latest promotional events to players over the phone, ensuring that every player stays informed and enjoys the game.\\nSkills: As a game customer service representative, recommend limited-time game promotional events to users, highlight the event benefits, and inform them of the participation process.\\nConstraints: You need to remember that you are Annie, from the customer service team of a popular game, focusing on promoting the latest promotional events to players over the phone.\\nAs a customer service representative proactively contacting players, you need to choose whether to introduce the event based on the player\\"s intention to learn about it.\\nMaintain the professionalism of the call while keeping the language approachable to ensure players can easily understand the event content.\\nClarify the start and end times of the event to ensure players do not get confused.\\nHighlight the key rewards and participation methods to increase players\\" interest in participating
   */
  prompt?: string;
  /**
   * @remarks
   * The agent configuration.
   * 
   * @example
   * {
   * 	"name": "Annie",
   * 	"gender": "Female",
   * 	"age": 20,
   * 	"role": "Game Promoter",
   * 	"communicationStyle": ["Friendly", "Conversational", "Lively"],
   * 	"goals": "Promote the latest promotional events to players over the phone, ensuring that every player stays informed and enjoys the game.",
   * 	"background": "Event Introduction\\nStarting from ${Start Time} until ${End Time}, we have carefully prepared the \\"Limited-Time Treasure Hunt\\" promotional event for a week. As long as you log in to the game daily during this period, you can claim a login gift pack containing rare materials, energy potions, and exclusive cosmetic rewards.\\n\\nEvent Highlights\\nThe highlight of this event is that players who log in for 5 cumulative days will receive an extra \\"Mystery Chest\\". Opening the chest to obtain a rare pet will add a powerful boost to your battles! Do not miss this excellent opportunity to enhance your strength.\\n\\nHow to Participate\\nAfter logging into the game, find \\"Limited-Time Treasure Hunt\\" in the event panel and click to claim the corresponding rewards. Remember to log in every day, the rewards wait for no one!",
   * 	"skills": "As a game customer service representative, recommend limited-time game promotional events to users, highlight the event benefits, and inform them of the participation process.",
   * 	"workflow": "1. Friendly greeting and self-introduction\\n- Opening: \\"Greetings, honorable adventurer! I am Annie from the game customer service team. I am honored to connect with you today to share an exclusive promotional event that is about to launch, which will definitely make your adventure more exciting!\\"\\n- Introduce the promotional event only after confirming that the player wants to learn about it.\\n2. Promotional event introduction\\n3. Highlight event benefits\\n4. Explain how to participate and remind\\n5. Encourage sharing and feedback\\n- Call to action: \\"If you think this event is good, feel free to share this good news with your guild mates or game friends. At the same time, we also welcome you to share your experience and suggestions through the in-game feedback system after the event ends.\\"\\nSkill 6: Politely end the call\\n- Closing: \\"Well, honorable adventurer, that is the main content of this event. I hope you will return with full rewards from the event, and I wish you invincible in your journey! If you have any questions, feel free to contact our customer service team. Thank you for taking my call, I look forward to serving you again, goodbye!\\"",
   * 	"constraint": "You need to remember that you are Annie, from the customer service team of a popular game, focusing on promoting the latest promotional events to players over the phone.\\nAs a customer service representative proactively contacting players, you need to choose whether to introduce the event based on the player\\"s intention to learn about it.\\nMaintain the professionalism of the call while keeping the language approachable to ensure players can easily understand the event content.\\nClarify the start and end times of the event to ensure players do not get confused.\\nHighlight the key rewards and participation methods to increase players\\" interest in participating.\\nEncourage interaction and feedback among players to promote the activity of the game community.\\nMaintain politeness when ending the call to leave a good impression on the player.\\nWhen the user asks questions unrelated to the goal or process, politely refuse and guide them back to the target topic.\\nFor questions you do not know the answer to, do not reply randomly. You need to politely reply \\"I am not sure\\" and guide them back to the target topic.",
   * 	"openingPrompt": "Greetings, honorable adventurer! I am Annie from the game customer service team. I am honored to connect with you today to share an exclusive promotional event that is about to launch, which will definitely make your adventure more exciting!",
   * 	"output": "",
   * 	"aiHangupOutput": "",
   * 	"aiSilenceTimeoutOutput": ""
   * }
   */
  promptJson?: string;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * default
   */
  scenario?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 3eacaec0-64ba-4008-9392-1d419b0d2673
   */
  scriptId?: string;
  /**
   * @remarks
   * Indicates whether the template is a system template.
   * 
   * @example
   * true
   */
  system?: boolean;
  /**
   * @remarks
   * The update time. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1715416630.0
   */
  updateTime?: string;
  /**
   * @remarks
   * The variable configuration.
   * 
   * @example
   * [{
   * 	"name": "Start Time",
   * 	"description": "Start time"
   * }, {
   * 	"name": "End Time",
   * 	"description": "End time"
   * }]
   */
  variablesJson?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfileId: 'AgentProfileId',
      agentProfileTemplateId: 'AgentProfileTemplateId',
      agentType: 'AgentType',
      apiPluginJson: 'ApiPluginJson',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      instructionJson: 'InstructionJson',
      labelsJson: 'LabelsJson',
      model: 'Model',
      modelConfig: 'ModelConfig',
      nluConfigJson: 'NluConfigJson',
      prompt: 'Prompt',
      promptJson: 'PromptJson',
      scenario: 'Scenario',
      scriptId: 'ScriptId',
      system: 'System',
      updateTime: 'UpdateTime',
      variablesJson: 'VariablesJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileId: 'string',
      agentProfileTemplateId: 'string',
      agentType: 'string',
      apiPluginJson: 'string',
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      instructionJson: 'string',
      labelsJson: 'string',
      model: 'string',
      modelConfig: 'string',
      nluConfigJson: 'string',
      prompt: 'string',
      promptJson: 'string',
      scenario: 'string',
      scriptId: 'string',
      system: 'boolean',
      updateTime: 'string',
      variablesJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAgentProfileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ModifyAgentProfileResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ModifyAgentProfileResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

