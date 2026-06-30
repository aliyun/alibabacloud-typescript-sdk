// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AgentInfoInstructionTypeParamCustomPromptParamNameDescPairList extends $dara.Model {
  name?: string;
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
  customPrompt?: string;
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
  desc?: string;
  name?: string;
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
  desc?: string;
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
  dimensions?: AgentInfoInstructionTypeParamServiceInspectionParamDimensions[];
  sceneDescription?: string;
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
  desc?: string;
  name?: string;
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

export class AgentInfoInstructionTypeParam extends $dara.Model {
  customPromptParam?: AgentInfoInstructionTypeParamCustomPromptParam;
  fieldsParam?: AgentInfoInstructionTypeParamFieldsParam;
  serviceInspectionParam?: AgentInfoInstructionTypeParamServiceInspectionParam;
  tagCategoryParam?: AgentInfoInstructionTypeParamTagCategoryParam;
  static names(): { [key: string]: string } {
    return {
      customPromptParam: 'CustomPromptParam',
      fieldsParam: 'FieldsParam',
      serviceInspectionParam: 'ServiceInspectionParam',
      tagCategoryParam: 'TagCategoryParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPromptParam: AgentInfoInstructionTypeParamCustomPromptParam,
      fieldsParam: AgentInfoInstructionTypeParamFieldsParam,
      serviceInspectionParam: AgentInfoInstructionTypeParamServiceInspectionParam,
      tagCategoryParam: AgentInfoInstructionTypeParamTagCategoryParam,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentInfo extends $dara.Model {
  agentDescription?: string;
  agentName?: string;
  id?: number;
  inputType?: string;
  instructionType?: string;
  instructionTypeParam?: AgentInfoInstructionTypeParam;
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

