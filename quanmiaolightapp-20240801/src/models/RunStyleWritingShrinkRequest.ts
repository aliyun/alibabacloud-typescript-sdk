// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunStyleWritingShrinkRequest extends $dara.Model {
  learningSamplesShrink?: string;
  processStage?: string;
  referenceMaterialsShrink?: string;
  styleFeature?: string;
  useSearch?: boolean;
  writingTheme?: string;
  static names(): { [key: string]: string } {
    return {
      learningSamplesShrink: 'learningSamples',
      processStage: 'processStage',
      referenceMaterialsShrink: 'referenceMaterials',
      styleFeature: 'styleFeature',
      useSearch: 'useSearch',
      writingTheme: 'writingTheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      learningSamplesShrink: 'string',
      processStage: 'string',
      referenceMaterialsShrink: 'string',
      styleFeature: 'string',
      useSearch: 'boolean',
      writingTheme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

