// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UuidFilter extends $dara.Model {
  /**
   * @remarks
   * The exact match condition for the alert rule UUID. Only the alert rule whose UUID equals the specified value is returned.
   * 
   * @example
   * a1b2c3d4-e5f6-7890-abcd-ef1234567890
   */
  eq?: string;
  /**
   * @remarks
   * The set match condition for alert rule UUIDs. All alert rules whose UUIDs are in the specified list are returned.
   * 
   * @example
   * ["a1b2c3d4-e5f6-7890-abcd-ef1234567890","b2c3d4e5-f6a7-8901-bcde-f12345678901"]
   */
  in?: string[];
  static names(): { [key: string]: string } {
    return {
      eq: 'eq',
      in: 'in',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eq: 'string',
      in: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.in)) {
      $dara.Model.validateArray(this.in);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

