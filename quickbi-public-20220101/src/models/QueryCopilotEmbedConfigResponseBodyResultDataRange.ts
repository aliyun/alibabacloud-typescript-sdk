// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCopilotEmbedConfigResponseBodyResultDataRange extends $dara.Model {
  /**
   * @remarks
   * Whether all question resources are selected.
   * 
   * @example
   * true/false
   */
  allCube?: boolean;
  /**
   * @remarks
   * Whether all analysis themes are selected.
   * 
   * @example
   * true/false
   */
  allTheme?: boolean;
  /**
   * @remarks
   * Collection of question resource IDs.
   */
  llmCubes?: string[];
  /**
   * @remarks
   * Collection of analysis theme IDs.
   */
  themes?: string[];
  static names(): { [key: string]: string } {
    return {
      allCube: 'AllCube',
      allTheme: 'AllTheme',
      llmCubes: 'LlmCubes',
      themes: 'Themes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCube: 'boolean',
      allTheme: 'boolean',
      llmCubes: { 'type': 'array', 'itemType': 'string' },
      themes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.llmCubes)) {
      $dara.Model.validateArray(this.llmCubes);
    }
    if(Array.isArray(this.themes)) {
      $dara.Model.validateArray(this.themes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

