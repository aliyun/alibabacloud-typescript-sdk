// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTraceAbJobShrinkRequest extends $dara.Model {
  /**
   * @example
   * Qh6OdgIMcliQSI1fReOw****
   */
  cipherBase64ed?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputShrink?: string;
  /**
   * @example
   * 0
   */
  level?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  outputShrink?: string;
  /**
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @example
   * 360
   */
  totalTime?: number;
  /**
   * @example
   * 123
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      cipherBase64ed: 'CipherBase64ed',
      inputShrink: 'Input',
      level: 'Level',
      outputShrink: 'Output',
      startTime: 'StartTime',
      totalTime: 'TotalTime',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherBase64ed: 'string',
      inputShrink: 'string',
      level: 'number',
      outputShrink: 'string',
      startTime: 'number',
      totalTime: 'number',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

