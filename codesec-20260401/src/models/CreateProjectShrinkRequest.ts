// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectShrinkRequest extends $dara.Model {
  /**
   * @example
   * This is default function description by fc-deploy component
   */
  description?: string;
  enginesShrink?: string;
  /**
   * @example
   * such as ignoring low-severity vulnerabilities, etc.
   */
  instructionPrompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_paswd_103
   */
  name?: string;
  sourceShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      enginesShrink: 'engines',
      instructionPrompt: 'instructionPrompt',
      name: 'name',
      sourceShrink: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enginesShrink: 'string',
      instructionPrompt: 'string',
      name: 'string',
      sourceShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

