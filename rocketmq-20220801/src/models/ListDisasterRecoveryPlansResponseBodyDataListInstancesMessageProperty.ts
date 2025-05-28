// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDisasterRecoveryPlansResponseBodyDataListInstancesMessageProperty extends $dara.Model {
  /**
   * @remarks
   * Property key
   * 
   * @example
   * aaa
   */
  propertyKey?: string;
  /**
   * @remarks
   * Property value
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

