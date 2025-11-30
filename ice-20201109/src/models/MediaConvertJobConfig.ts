// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertJobConfigInputsInputFile extends $dara.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
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

export class MediaConvertJobConfigInputs extends $dara.Model {
  inputFile?: MediaConvertJobConfigInputsInputFile;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: MediaConvertJobConfigInputsInputFile,
      name: 'string',
    };
  }

  validate() {
    if(this.inputFile && typeof (this.inputFile as any).validate === 'function') {
      (this.inputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobConfigOutputGroupsGroupConfigManifestExtendExcludes extends $dara.Model {
  name?: string;
  type?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      language: 'language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobConfigOutputGroupsGroupConfigManifestExtend extends $dara.Model {
  excludes?: MediaConvertJobConfigOutputGroupsGroupConfigManifestExtendExcludes[];
  inputRef?: string;
  static names(): { [key: string]: string } {
    return {
      excludes: 'Excludes',
      inputRef: 'InputRef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludes: { 'type': 'array', 'itemType': MediaConvertJobConfigOutputGroupsGroupConfigManifestExtendExcludes },
      inputRef: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludes)) {
      $dara.Model.validateArray(this.excludes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobConfigOutputGroupsGroupConfigOutputFileBase extends $dara.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
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

export class MediaConvertJobConfigOutputGroupsGroupConfig extends $dara.Model {
  manifestExtend?: MediaConvertJobConfigOutputGroupsGroupConfigManifestExtend;
  manifestName?: string;
  outputFileBase?: MediaConvertJobConfigOutputGroupsGroupConfigOutputFileBase;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      manifestExtend: 'ManifestExtend',
      manifestName: 'ManifestName',
      outputFileBase: 'OutputFileBase',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manifestExtend: MediaConvertJobConfigOutputGroupsGroupConfigManifestExtend,
      manifestName: 'string',
      outputFileBase: MediaConvertJobConfigOutputGroupsGroupConfigOutputFileBase,
      type: 'string',
    };
  }

  validate() {
    if(this.manifestExtend && typeof (this.manifestExtend as any).validate === 'function') {
      (this.manifestExtend as any).validate();
    }
    if(this.outputFileBase && typeof (this.outputFileBase as any).validate === 'function') {
      (this.outputFileBase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobConfigOutputGroupsOutputsHlsGroupConfig extends $dara.Model {
  audioGroup?: string;
  autoSelect?: string;
  forced?: string;
  group?: string;
  isDefault?: string;
  language?: string;
  name?: string;
  subtitleGroup?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      audioGroup: 'AudioGroup',
      autoSelect: 'AutoSelect',
      forced: 'Forced',
      group: 'Group',
      isDefault: 'IsDefault',
      language: 'Language',
      name: 'Name',
      subtitleGroup: 'SubtitleGroup',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioGroup: 'string',
      autoSelect: 'string',
      forced: 'string',
      group: 'string',
      isDefault: 'string',
      language: 'string',
      name: 'string',
      subtitleGroup: 'string',
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

export class MediaConvertJobConfigOutputGroupsOutputs extends $dara.Model {
  features?: string;
  hlsGroupConfig?: MediaConvertJobConfigOutputGroupsOutputsHlsGroupConfig;
  name?: string;
  outputFileName?: string;
  overrideParams?: string;
  priority?: number;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      hlsGroupConfig: 'HlsGroupConfig',
      name: 'Name',
      outputFileName: 'OutputFileName',
      overrideParams: 'OverrideParams',
      priority: 'Priority',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: 'string',
      hlsGroupConfig: MediaConvertJobConfigOutputGroupsOutputsHlsGroupConfig,
      name: 'string',
      outputFileName: 'string',
      overrideParams: 'string',
      priority: 'number',
      templateId: 'string',
    };
  }

  validate() {
    if(this.hlsGroupConfig && typeof (this.hlsGroupConfig as any).validate === 'function') {
      (this.hlsGroupConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobConfigOutputGroups extends $dara.Model {
  groupConfig?: MediaConvertJobConfigOutputGroupsGroupConfig;
  name?: string;
  outputs?: MediaConvertJobConfigOutputGroupsOutputs[];
  static names(): { [key: string]: string } {
    return {
      groupConfig: 'GroupConfig',
      name: 'Name',
      outputs: 'Outputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupConfig: MediaConvertJobConfigOutputGroupsGroupConfig,
      name: 'string',
      outputs: { 'type': 'array', 'itemType': MediaConvertJobConfigOutputGroupsOutputs },
    };
  }

  validate() {
    if(this.groupConfig && typeof (this.groupConfig as any).validate === 'function') {
      (this.groupConfig as any).validate();
    }
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MediaConvertJobConfig extends $dara.Model {
  inputs?: MediaConvertJobConfigInputs[];
  jobName?: string;
  outputGroups?: MediaConvertJobConfigOutputGroups[];
  static names(): { [key: string]: string } {
    return {
      inputs: 'Inputs',
      jobName: 'JobName',
      outputGroups: 'OutputGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputs: { 'type': 'array', 'itemType': MediaConvertJobConfigInputs },
      jobName: 'string',
      outputGroups: { 'type': 'array', 'itemType': MediaConvertJobConfigOutputGroups },
    };
  }

  validate() {
    if(Array.isArray(this.inputs)) {
      $dara.Model.validateArray(this.inputs);
    }
    if(Array.isArray(this.outputGroups)) {
      $dara.Model.validateArray(this.outputGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

