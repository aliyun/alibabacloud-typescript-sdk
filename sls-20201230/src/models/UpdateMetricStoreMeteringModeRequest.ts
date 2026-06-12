// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetricStoreMeteringModeRequest extends $dara.Model {
  /**
   * @remarks
   * The billing mode to which you want to switch. Valid values: ChargeByFunction and ChargeByDataIngest. ChargeByFunction specifies the [pay-by-feature](https://help.aliyun.com/document_detail/48220.html) mode. ChargeByDataIngest specifies the [pay-by-ingested-data](https://help.aliyun.com/document_detail/2365756.html) mode.
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

