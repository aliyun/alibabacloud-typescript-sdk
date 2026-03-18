// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableMultiAzRequestObservers extends $dara.Model {
  /**
   * @example
   * vsw-x1232js012
   */
  vswId?: string;
  /**
   * @example
   * cn-hangzhou-h
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

export class EnableMultiAzRequest extends $dara.Model {
  /**
   * @example
   * c-238sjh237s12***
   */
  instanceId?: string;
  observers?: EnableMultiAzRequestObservers[];
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
      observers: { 'type': 'array', 'itemType': EnableMultiAzRequestObservers },
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

