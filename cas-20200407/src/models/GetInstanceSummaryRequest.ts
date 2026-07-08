// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The instance type. Valid values: BUY: a paid certificate. TEST: a test certificate.
   * 
   * @example
   * TEST
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

