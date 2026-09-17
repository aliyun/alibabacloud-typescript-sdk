// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StatusFilter extends $dara.Model {
  /**
   * @remarks
   * The exact match condition for the alert status. Only alert rules whose status equals the specified value are returned. Valid values:
   * - Alarm: The alert rule is in the alerting state.
   * - Ok: The alert rule is in the normal state.
   * - InsufficientData: Insufficient data is available.
   * 
   * @example
   * Alarm
   */
  eq?: string;
  static names(): { [key: string]: string } {
    return {
      eq: 'eq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eq: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

