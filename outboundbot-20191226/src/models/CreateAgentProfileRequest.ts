// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentProfileRequest extends $dara.Model {
  /**
   * @remarks
   * The agent profile template ID (unique value).
   * 
   * This parameter is required.
   * 
   * @example
   * default-survey
   */
  agentProfileTemplateId?: string;
  /**
   * @remarks
   * The app_ip (system field). This parameter is optional.
   * 
   * @example
   * 127.0.0.1
   */
  appIp?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Describe the features of the current agent
   */
  description?: string;
  /**
   * @remarks
   * The FAQ category IDs.
   * 
   * @example
   * [30000474726]
   */
  faqCategoryIds?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
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
   * The model ID (unique value).
   * 
   * This parameter is required.
   * 
   * @example
   * model_001
   */
  model?: string;
  /**
   * @remarks
   * **[Deprecated]** The model configuration.
   * 
   * @example
   * ""
   */
  modelConfig?: string;
  /**
   * @remarks
   * The agent configuration in professional mode.
   * 
   * @example
   * \\nName: Annie \\nIdentity: Game Promoter\\nBackground: Promote the latest welfare events to players over the phone, ensuring that every player can keep up with the information in a timely manner and enjoy the game.\\nSkills: As a game customer service representative, recommend limited-time game welfare events to users, emphasize the event highlights, and inform them of the participation process.\\nConstraints: You need to remember that you are Annie, from the customer service team of a popular game, focusing on promoting the latest welfare events to players over the phone.\\nAs a customer service representative who proactively contacts players, you need to choose whether to introduce the event based on the player\\"s intention to learn about it.\\nMaintain the professionalism of the call, while keeping the language approachable to ensure that players can easily understand the event content.\\nClarify the start and end times of the event to ensure that players do not get confused.\\nEmphasize the key rewards and participation methods of the event to increase players\\" interest in participating
   */
  prompt?: string;
  /**
   * @remarks
   * The agent configuration in normal mode.
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
   * Test scenario
   */
  scenario?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aa279896-64a6-4182-864c-4f2b04ec8d17
   */
  scriptId?: string;
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
      agentProfileTemplateId: 'AgentProfileTemplateId',
      appIp: 'AppIp',
      description: 'Description',
      faqCategoryIds: 'FaqCategoryIds',
      instanceId: 'InstanceId',
      instructionJson: 'InstructionJson',
      labelsJson: 'LabelsJson',
      model: 'Model',
      modelConfig: 'ModelConfig',
      prompt: 'Prompt',
      promptJson: 'PromptJson',
      scenario: 'Scenario',
      scriptId: 'ScriptId',
      variablesJson: 'VariablesJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileTemplateId: 'string',
      appIp: 'string',
      description: 'string',
      faqCategoryIds: 'string',
      instanceId: 'string',
      instructionJson: 'string',
      labelsJson: 'string',
      model: 'string',
      modelConfig: 'string',
      prompt: 'string',
      promptJson: 'string',
      scenario: 'string',
      scriptId: 'string',
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

