// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDisasterRecoveryPlanRequestInstancesMessageProperty extends $dara.Model {
  /**
   * @remarks
   * The attribute key.
   * 
   * @example
   * aaa
   */
  propertyKey?: string;
  /**
   * @remarks
   * The attribute value.
   * 
   * @example
   * bbb
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      propertyKey: 'propertyKey',
      propertyValue: 'propertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyKey: 'string',
      propertyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

