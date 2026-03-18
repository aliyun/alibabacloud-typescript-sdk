// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEnableMultiAzPriceRequestObservers extends $dara.Model {
  /**
   * @example
   * vsw-9sdur12t27s
   */
  vswId?: string;
  /**
   * @example
   * cn-shanghai-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vswId: 'vswId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnableMultiAzPriceRequest extends $dara.Model {
  /**
   * @example
   * c-8dsy12g*****
   */
  instanceId?: string;
  observers?: QueryEnableMultiAzPriceRequestObservers[];
  /**
   * @example
   * youhuiquan_12378dfj6
   */
  promotionOptionNo?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      observers: 'observers',
      promotionOptionNo: 'promotionOptionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      observers: { 'type': 'array', 'itemType': QueryEnableMultiAzPriceRequestObservers },
      promotionOptionNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.observers)) {
      $dara.Model.validateArray(this.observers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

