// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DryRunViolation extends $dara.Model {
  /**
   * @remarks
   * The path of the violated field, such as schedule.intervalSecs.
   * 
   * @example
   * schedule.intervalSecs
   */
  field?: string;
  /**
   * @remarks
   * The violation description.
   * 
   * @example
   * schedule interval must be a multiple of 15 seconds
   */
  message?: string;
  /**
   * @remarks
   * The remediation suggestion.
   * 
   * @example
   * must satisfy: 15-86400 seconds and a multiple of 15
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      message: 'message',
      suggestion: 'suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      message: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

