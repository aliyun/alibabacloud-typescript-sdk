// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAgentProfileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The agent profile ID.
   * 
   * > You can obtain the agent profile ID of a created scenario from the ChatbotId response parameter of DescribeScript.
   * 
   * This parameter is required.
   * 
   * @example
   * 37ca3ca1ac4b4e57adf3da5b5d939d04
   */
  agentProfileId?: string;
  /**
   * @remarks
   * The API plugin configuration.
   * 
   * > To bind multiple APIs, obtain the UUIDs of multiple APIs through ListApiPlugins, and fill them in the format of [{"uuid":"xxx"},{"uuid":"xxxx"},....].
   * 
   * @example
   * [{"uuid":"a55d171da96c41a************"},{"uuid":"d41a3e5195d1402********"}]
   */
  apiPluginJson?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * First version submitted for review
   */
  description?: string;
  /**
   * @remarks
   * The FAQ category IDs.
   */
  faqCategoryIdsShrink?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 174952ab-9825-4cc9-a5e2-de82d7fa4cdd
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
   * model_001
   */
  model?: string;
  /**
   * @remarks
   * The model configuration.
   * 
   * @example
   * {}
   */
  modelConfig?: string;
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
   * Test scenario
   */
  scenario?: string;
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
      apiPluginJson: 'ApiPluginJson',
      description: 'Description',
      faqCategoryIdsShrink: 'FaqCategoryIds',
      instanceId: 'InstanceId',
      instructionJson: 'InstructionJson',
      labelsJson: 'LabelsJson',
      model: 'Model',
      modelConfig: 'ModelConfig',
      prompt: 'Prompt',
      promptJson: 'PromptJson',
      scenario: 'Scenario',
      variablesJson: 'VariablesJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileId: 'string',
      apiPluginJson: 'string',
      description: 'string',
      faqCategoryIdsShrink: 'string',
      instanceId: 'string',
      instructionJson: 'string',
      labelsJson: 'string',
      model: 'string',
      modelConfig: 'string',
      prompt: 'string',
      promptJson: 'string',
      scenario: 'string',
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

