// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunStyleWritingRequest extends $dara.Model {
  learningSamples?: string[];
  processStage?: string;
  referenceMaterials?: string[];
  styleFeature?: string;
  useSearch?: boolean;
  writingTheme?: string;
  static names(): { [key: string]: string } {
    return {
      learningSamples: 'learningSamples',
      processStage: 'processStage',
      referenceMaterials: 'referenceMaterials',
      styleFeature: 'styleFeature',
      useSearch: 'useSearch',
      writingTheme: 'writingTheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      learningSamples: { 'type': 'array', 'itemType': 'string' },
      processStage: 'string',
      referenceMaterials: { 'type': 'array', 'itemType': 'string' },
      styleFeature: 'string',
      useSearch: 'boolean',
      writingTheme: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.learningSamples)) {
      $dara.Model.validateArray(this.learningSamples);
    }
    if(Array.isArray(this.referenceMaterials)) {
      $dara.Model.validateArray(this.referenceMaterials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

