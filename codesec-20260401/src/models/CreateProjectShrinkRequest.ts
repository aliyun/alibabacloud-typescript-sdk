// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is default function description by fc-deploy component
   */
  description?: string;
  /**
   * @remarks
   * The engine switches for the project or scan snapshot. Only SAST and SCA are supported.
   */
  enginesShrink?: string;
  /**
   * @remarks
   * The natural language prompt that describes scanning or result processing preferences, such as ignoring low-risk vulnerabilities.
   * 
   * @example
   * such as ignoring low-severity vulnerabilities, etc.
   */
  instructionPrompt?: string;
  /**
   * @remarks
   * The project name.
   * 
   * This parameter is required.
   * 
   * @example
   * user_paswd_103
   */
  name?: string;
  /**
   * @remarks
   * The project source.
   */
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

