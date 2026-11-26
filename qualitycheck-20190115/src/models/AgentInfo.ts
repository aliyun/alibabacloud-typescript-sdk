// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AgentInfoInstructionTypeParamCustomPromptParamNameDescPairList extends $dara.Model {
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Scenario
   */
  name?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * After-sales inquiry
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentInfoInstructionTypeParamCustomPromptParam extends $dara.Model {
  /**
   * @remarks
   * The content of the user-defined prompt template. This parameter is required.
   * 
   * @example
   * Analyze the service attitude of the customer service representative in the following conversation
   */
  customPrompt?: string;
  /**
   * @remarks
   * The list of name-value pairs attached to the custom instruction.
   */
  nameDescPairList?: AgentInfoInstructionTypeParamCustomPromptParamNameDescPairList[];
  static names(): { [key: string]: string } {
    return {
      customPrompt: 'CustomPrompt',
      nameDescPairList: 'NameDescPairList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrompt: 'string',
      nameDescPairList: { 'type': 'array', 'itemType': AgentInfoInstructionTypeParamCustomPromptParamNameDescPairList },
    };
  }

  validate() {
    if(Array.isArray(this.nameDescPairList)) {
      $dara.Model.validateArray(this.nameDescPairList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentInfoInstructionTypeParamFieldsParamNameDescPairList extends $dara.Model {
  /**
   * @remarks
   * The attribute description. This parameter is optional.
   * 
   * @example
   * The specific request raised by the customer during the session
   */
  desc?: string;
  /**
   * @remarks
   * The attribute name. This parameter is required.
   * 
   * @example
   * Customer request
   */
  name?: string;
  /**
   * @remarks
   * The attribute value. In the key attribute extraction scenario, this is the extracted result value corresponding to the dimension.
   * 
   * @example
   * Refund
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentInfoInstructionTypeParamFieldsParam extends $dara.Model {
  /**
   * @remarks
   * The list of attribute dimensions to be extracted.
   */
  nameDescPairList?: AgentInfoInstructionTypeParamFieldsParamNameDescPairList[];
  static names(): { [key: string]: string } {
    return {
      nameDescPairList: 'NameDescPairList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameDescPairList: { 'type': 'array', 'itemType': AgentInfoInstructionTypeParamFieldsParamNameDescPairList },
    };
  }

  validate() {
    if(Array.isArray(this.nameDescPairList)) {
      $dara.Model.validateArray(this.nameDescPairList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentInfoInstructionTypeParamServiceInspectionParamDimensions extends $dara.Model {
  /**
   * @remarks
   * The dimension description. This parameter is optional.
   * 
   * @example
   * Whether the customer service representative is polite and patient
   */
  desc?: string;
  /**
   * @remarks
   * The dimension name. This parameter is required.
   * 
   * @example
   * Service attitude
   */
  dimension?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      dimension: 'Dimension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      dimension: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentInfoInstructionTypeParamServiceInspectionParam extends $dara.Model {
  /**
   * @remarks
   * The list of quality inspection dimensions. This parameter is required.
   */
  dimensions?: AgentInfoInstructionTypeParamServiceInspectionParamDimensions[];
  /**
   * @remarks
   * The description of the quality inspection scenario. This parameter is optional.
   * 
   * @example
   * Service quality inspection for after-sales customer service sessions
   */
  sceneDescription?: string;
  /**
   * @remarks
   * The name of the quality inspection scenario. This parameter is required.
   * 
   * @example
   * After-sales service quality inspection
   */
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      sceneDescription: 'SceneDescription',
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'array', 'itemType': AgentInfoInstructionTypeParamServiceInspectionParamDimensions },
      sceneDescription: 'string',
      sceneName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentInfoInstructionTypeParamTagCategoryParamNameDescPairList extends $dara.Model {
  /**
   * @remarks
   * The dimension description.
   * 
   * @example
   * The classification of the types of issues consulted by the customer
   */
  desc?: string;
  /**
   * @remarks
   * The dimension name.
   * 
   * @example
   * Issue type
   */
  name?: string;
  /**
   * @remarks
   * The list of candidate tag values.
   */
  valueList?: string[];
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      name: 'Name',
      valueList: 'ValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      name: 'string',
      valueList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.valueList)) {
      $dara.Model.validateArray(this.valueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentInfoInstructionTypeParamTagCategoryParam extends $dara.Model {
  /**
   * @remarks
   * The list of label classification dimensions. This parameter is required.
   */
  nameDescPairList?: AgentInfoInstructionTypeParamTagCategoryParamNameDescPairList[];
  static names(): { [key: string]: string } {
    return {
      nameDescPairList: 'NameDescPairList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameDescPairList: { 'type': 'array', 'itemType': AgentInfoInstructionTypeParamTagCategoryParamNameDescPairList },
    };
  }

  validate() {
    if(Array.isArray(this.nameDescPairList)) {
      $dara.Model.validateArray(this.nameDescPairList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentInfoInstructionTypeParamTagTreeLevelParamTagTreeLevels extends $dara.Model {
  /**
   * @remarks
   * The analysis prompt for this level. It is concatenated with the tag data and sent to the large language model. This parameter is required.
   * 
   * @example
   * Determine which tag category this conversation belongs to
   */
  prompt?: string;
  /**
   * @remarks
   * The list of candidate tag IDs for this level. A value of -1 indicates that all tags at this level are selected. This parameter is required.
   */
  tagTreeIds?: number[];
  static names(): { [key: string]: string } {
    return {
      prompt: 'Prompt',
      tagTreeIds: 'TagTreeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
      tagTreeIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.tagTreeIds)) {
      $dara.Model.validateArray(this.tagTreeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentInfoInstructionTypeParamTagTreeLevelParam extends $dara.Model {
  /**
   * @remarks
   * The list of starting parent tag IDs at runtime. The first ID is treated as the matched parent tag, and recognition proceeds level by level from its child nodes, skipping the preceding levels. This field also takes effect when AgentId is specified.
   */
  tagIds?: number[];
  /**
   * @remarks
   * The recognition configuration for each level, arranged in hierarchical order. This parameter is required.
   */
  tagTreeLevels?: AgentInfoInstructionTypeParamTagTreeLevelParamTagTreeLevels[];
  static names(): { [key: string]: string } {
    return {
      tagIds: 'TagIds',
      tagTreeLevels: 'TagTreeLevels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagIds: { 'type': 'array', 'itemType': 'number' },
      tagTreeLevels: { 'type': 'array', 'itemType': AgentInfoInstructionTypeParamTagTreeLevelParamTagTreeLevels },
    };
  }

  validate() {
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    if(Array.isArray(this.tagTreeLevels)) {
      $dara.Model.validateArray(this.tagTreeLevels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentInfoInstructionTypeParam extends $dara.Model {
  /**
   * @remarks
   * The custom instruction parameters. Used when InstructionType is set to customPrompt.
   */
  customPromptParam?: AgentInfoInstructionTypeParamCustomPromptParam;
  /**
   * @remarks
   * The key attribute extraction parameters. Used when InstructionType is set to field.
   */
  fieldsParam?: AgentInfoInstructionTypeParamFieldsParam;
  /**
   * @remarks
   * The service quality inspection parameters. Used when InstructionType is set to serviceInspection.
   */
  serviceInspectionParam?: AgentInfoInstructionTypeParamServiceInspectionParam;
  /**
   * @remarks
   * The label classification parameters. Used when InstructionType is set to tagCategory.
   */
  tagCategoryParam?: AgentInfoInstructionTypeParamTagCategoryParam;
  /**
   * @remarks
   * The multi-level tag recognition parameters. Used when InstructionType is set to multiLevelTag.
   */
  tagTreeLevelParam?: AgentInfoInstructionTypeParamTagTreeLevelParam;
  static names(): { [key: string]: string } {
    return {
      customPromptParam: 'CustomPromptParam',
      fieldsParam: 'FieldsParam',
      serviceInspectionParam: 'ServiceInspectionParam',
      tagCategoryParam: 'TagCategoryParam',
      tagTreeLevelParam: 'TagTreeLevelParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPromptParam: AgentInfoInstructionTypeParamCustomPromptParam,
      fieldsParam: AgentInfoInstructionTypeParamFieldsParam,
      serviceInspectionParam: AgentInfoInstructionTypeParamServiceInspectionParam,
      tagCategoryParam: AgentInfoInstructionTypeParamTagCategoryParam,
      tagTreeLevelParam: AgentInfoInstructionTypeParamTagTreeLevelParam,
    };
  }

  validate() {
    if(this.customPromptParam && typeof (this.customPromptParam as any).validate === 'function') {
      (this.customPromptParam as any).validate();
    }
    if(this.fieldsParam && typeof (this.fieldsParam as any).validate === 'function') {
      (this.fieldsParam as any).validate();
    }
    if(this.serviceInspectionParam && typeof (this.serviceInspectionParam as any).validate === 'function') {
      (this.serviceInspectionParam as any).validate();
    }
    if(this.tagCategoryParam && typeof (this.tagCategoryParam as any).validate === 'function') {
      (this.tagCategoryParam as any).validate();
    }
    if(this.tagTreeLevelParam && typeof (this.tagTreeLevelParam as any).validate === 'function') {
      (this.tagTreeLevelParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentInfo extends $dara.Model {
  /**
   * @remarks
   * The description of the agent.
   * 
   * @example
   * Agent for customer service session quality inspection
   */
  agentDescription?: string;
  /**
   * @remarks
   * The name of the agent.
   * 
   * @example
   * Customer service quality inspection assistant
   */
  agentName?: string;
  /**
   * @remarks
   * The unique identifier of the agent configuration.
   * 
   * @example
   * 1001
   */
  id?: number;
  /**
   * @remarks
   * The object type for analysis. Valid values: audio and text.
   * 
   * @example
   * text
   */
  inputType?: string;
  /**
   * @remarks
   * The instruction type. Valid values: serviceInspection (service quality inspection), field (key property extraction), tagCategory (label classification), multiLevelTag (multi-level label recognition), and customPrompt (custom instruction).
   * 
   * @example
   * field
   */
  instructionType?: string;
  /**
   * @remarks
   * The parameters corresponding to the instruction type. Different InstructionType values require different sub-parameters. Specify only the sub-parameters that correspond to the current InstructionType and leave the others empty.
   */
  instructionTypeParam?: AgentInfoInstructionTypeParam;
  /**
   * @remarks
   * The type of the large language model.
   * 
   * @example
   * qwen-max
   */
  modelType?: string;
  static names(): { [key: string]: string } {
    return {
      agentDescription: 'AgentDescription',
      agentName: 'AgentName',
      id: 'Id',
      inputType: 'InputType',
      instructionType: 'InstructionType',
      instructionTypeParam: 'InstructionTypeParam',
      modelType: 'ModelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDescription: 'string',
      agentName: 'string',
      id: 'number',
      inputType: 'string',
      instructionType: 'string',
      instructionTypeParam: AgentInfoInstructionTypeParam,
      modelType: 'string',
    };
  }

  validate() {
    if(this.instructionTypeParam && typeof (this.instructionTypeParam as any).validate === 'function') {
      (this.instructionTypeParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

