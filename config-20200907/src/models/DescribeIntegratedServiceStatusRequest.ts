// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntegratedServiceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cadt
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

