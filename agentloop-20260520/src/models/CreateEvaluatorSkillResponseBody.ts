// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEvaluatorSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3FE4CD1E-FF41-56BE-B590-7A021D9C1524
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the created skill.
   * 
   * @example
   * trace_context_loader
   */
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      skillName: 'skillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      skillName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

