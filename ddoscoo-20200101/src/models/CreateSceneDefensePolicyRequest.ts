// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSceneDefensePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the policy. This value is a UNIX timestamp. Units: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1586016000000
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * testpolicy
   */
  name?: string;
  /**
   * @remarks
   * The start time of the policy. This value is a UNIX timestamp. Units: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1585670400000
   */
  startTime?: number;
  /**
   * @remarks
   * The template of the policy. Valid values:
   * 
   * *   **promotion**: important activity.
   * *   **bypass**: all traffic forwarded.
   * 
   * This parameter is required.
   * 
   * @example
   * promotion
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      startTime: 'StartTime',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      name: 'string',
      startTime: 'number',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

