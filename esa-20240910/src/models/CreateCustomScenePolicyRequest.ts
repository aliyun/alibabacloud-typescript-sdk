// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomScenePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the policy expires.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-07T18:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the websites that you want to associate with the policy. Separate multiple IDs with commas (,).
   * 
   * @example
   * 7096621098****
   */
  objects?: string;
  /**
   * @remarks
   * The time when the policy takes effect.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-07T17:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the policy template. Valid value:
   * 
   * *   **promotion**: major events.
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
      objects: 'Objects',
      startTime: 'StartTime',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      objects: 'string',
      startTime: 'string',
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

