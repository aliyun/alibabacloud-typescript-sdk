// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CutQuestionsRequestParameters extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  extractImages?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  struct?: boolean;
  static names(): { [key: string]: string } {
    return {
      extractImages: 'extract_images',
      struct: 'struct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractImages: 'boolean',
      struct: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CutQuestionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  image?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parameters?: CutQuestionsRequestParameters;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-1ijrzuv3v0ivvls7
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'image',
      parameters: 'parameters',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      parameters: CutQuestionsRequestParameters,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

