// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAgentProfileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The agent profile ID.
   * 
   * @example
   * d31794e2a51f47d2901b4094d88311d7
   */
  agentProfileId?: string;
  /**
   * @remarks
   * The agent profile template ID.
   * 
   * @example
   * default-survey
   */
  agentProfileTemplateId?: string;
  /**
   * @remarks
   * agent type
   * 
   * @example
   * “”
   */
  agentType?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1739333534000
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is an agent
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 1e16c663-0339-4064-9d57-07f772e78f21
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
   * The label descriptions.
   * 
   * @example
   * [{
   * 	"name": "Satisfaction",
   * 	"description": "Whether you are interested in the introduced game content",
   * 	"valueList": "[\\"Interested\\",\\"Not interested\\"]"
   * }]
   */
  labelsJson?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * model_001
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
   * The prompt in professional mode.
   * 
   * @example
   * \\nName: Annie \\nIdentity: Game Promoter\\nBackground: Promote the latest welfare events to players over the phone, ensuring that every player can keep up with the information in a timely manner and enjoy the game.\\nSkills: As a game customer service representative, recommend limited-time game welfare events to users, emphasize the event highlights, and inform them of the participation process.\\nConstraints: You need to remember that you are Annie, from the customer service team of a popular game, focusing on promoting the latest welfare events to players over the phone.\\nAs a customer service representative who proactively contacts players, you need to choose whether to introduce the event based on the player\\"s intention to learn about it.\\nMaintain the professionalism of the call, while keeping the language approachable to ensure that players can easily understand the event content.\\nClarify the start and end times of the event to ensure that players do not get confused.\\nEmphasize the key rewards and participation methods of the event to increase players\\" interest in participating
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
   * 	"goals": "Promote the latest welfare events to players over the phone, ensuring that every player can keep up with the information in a timely manner and enjoy the game.",
   * 	"background": "Event Introduction\\nFrom ${Start Time} to ${End Time}, we have carefully prepared the \\"Limited-Time Treasure Hunt\\" welfare event for a week. As long as you log in to the game every day during this period, you can claim a login gift pack containing rare materials, energy potions, and limited-edition appearance rewards.\\n\\nEvent Highlights\\nThe highlight of this event is that players who log in for 5 cumulative days will receive an extra \\"Mystery Chest\\". Opening the chest to get a rare pet will add a powerful boost to your battles! Don\\"t miss this great opportunity to enhance your strength.\\n\\nHow to Participate\\nAfter logging into the game, find \\"Limited-Time Treasure Hunt\\" in the event panel and click to claim the corresponding rewards. Remember to log in every day, the rewards won\\"t wait!",
   * 	"skills": "As a game customer service representative, recommend limited-time game welfare events to users, emphasize the event highlights, and inform them of the participation process.",
   * 	"workflow": "1. Friendly greeting and self-introduction\\n- Opening: \\"Hello, respected adventurer! I am Annie from the game customer service team. I am honored to connect with you today to share an exclusive welfare event that is about to launch, which will definitely make your adventure more exciting!\\"\\n- Introduce the welfare event only after confirming that the player wants to learn about it.\\n2. Welfare event introduction\\n3. Emphasize event highlights\\n4. Explain how to participate and remind\\n5. Encourage sharing and feedback\\n- Call to action: \\"If you think this event is good, feel free to share the good news with your guild partners or game friends. At the same time, we also highly welcome you to tell us your experience and suggestions through the built-in feedback system of the game after the event ends.\\"\\nSkill 6: Politely end the call\\n- Closing: \\"Well, respected adventurer, the above is the main content of this event. I hope you can return with a full load from the event, and I wish you invincible in your journey! If you have any questions, feel free to contact our customer service team. Thank you for answering, look forward to serving you again, goodbye!\\"",
   * 	"constraint": "You need to remember that you are Annie, from the customer service team of a popular game, focusing on promoting the latest welfare events to players over the phone.\\nAs a customer service representative who proactively contacts players, you need to choose whether to introduce the event based on the player\\"s intention to learn about it.\\nMaintain the professionalism of the call, while keeping the language approachable to ensure that players can easily understand the event content.\\nClarify the start and end times of the event to ensure that players do not get confused.\\nEmphasize the key rewards and participation methods of the event to increase players\\" interest in participating.\\nEncourage interaction and feedback among players to promote the activity of the game community.\\nMaintain politeness when ending the call to leave a good impression on the player.\\nWhen the user asks questions that are irrelevant to the goal or process, politely refuse and guide them back to the target question.\\nFor questions you do not know, do not reply randomly. You need to politely reply \\"I am not sure\\" and guide them back to the target question.",
   * 	"openingPrompt": "Hello, respected adventurer! I am Annie from the game customer service team. I am honored to connect with you today to share an exclusive welfare event that is about to launch, which will definitely make your adventure more exciting!",
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
   * Scenario
   */
  scenario?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * d13ad2d3-3fe6-4352-b38b-bd6559047de8
   */
  scriptId?: string;
  /**
   * @remarks
   * Indicates whether the template is a system template.
   * 
   * @example
   * True
   */
  system?: boolean;
  /**
   * @remarks
   * The update time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1737077564000
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
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      instructionJson: 'InstructionJson',
      labelsJson: 'LabelsJson',
      model: 'Model',
      modelConfig: 'ModelConfig',
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
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      instructionJson: 'string',
      labelsJson: 'string',
      model: 'string',
      modelConfig: 'string',
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

export class CreateAgentProfileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateAgentProfileResponseBodyData;
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
   * Indicates whether the request is successful.
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
      data: CreateAgentProfileResponseBodyData,
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

