// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetricStoreMeteringModeRequest extends $dara.Model {
  /**
   * @remarks
   * The billing mode. Default value: ChargeByFunction. Valid values: ChargeByFunction and ChargeByDataIngest.
   * 
   * This parameter is required.
   * 
   * @example
   * ChargeByFunction
   */
  meteringMode?: string;
  static names(): { [key: string]: string } {
    return {
      meteringMode: 'meteringMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meteringMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

