// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoListChangedPrice extends $dara.Model {
  /**
   * @example
   * 12000
   */
  taxPrice?: number;
  /**
   * @example
   * 90000
   */
  ticketPrice?: number;
  static names(): { [key: string]: string } {
    return {
      taxPrice: 'tax_price',
      ticketPrice: 'ticket_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taxPrice: 'number',
      ticketPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoListOriginalPrice extends $dara.Model {
  /**
   * @example
   * 12000
   */
  taxPrice?: number;
  /**
   * @example
   * 80000
   */
  ticketPrice?: number;
  static names(): { [key: string]: string } {
    return {
      taxPrice: 'tax_price',
      ticketPrice: 'ticket_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taxPrice: 'number',
      ticketPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoList extends $dara.Model {
  /**
   * @example
   * false
   */
  changed?: boolean;
  changedPrice?: IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoListChangedPrice;
  originalPrice?: IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoListOriginalPrice;
  /**
   * @example
   * 0
   */
  passengerType?: number;
  static names(): { [key: string]: string } {
    return {
      changed: 'changed',
      changedPrice: 'changed_price',
      originalPrice: 'original_price',
      passengerType: 'passenger_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changed: 'boolean',
      changedPrice: IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoListChangedPrice,
      originalPrice: IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoListOriginalPrice,
      passengerType: 'number',
    };
  }

  validate() {
    if(this.changedPrice && typeof (this.changedPrice as any).validate === 'function') {
      (this.changedPrice as any).validate();
    }
    if(this.originalPrice && typeof (this.originalPrice as any).validate === 'function') {
      (this.originalPrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightInventoryPriceCheckResponseBodyModule extends $dara.Model {
  /**
   * @example
   * true
   */
  checkSuccess?: boolean;
  /**
   * @example
   * 0
   */
  failType?: number;
  passengerChangedPriceInfoList?: IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoList[];
  /**
   * @example
   * fcoid_deb6372db8194f1c94c23bc4fadc508d
   */
  renderKey?: string;
  static names(): { [key: string]: string } {
    return {
      checkSuccess: 'check_success',
      failType: 'fail_type',
      passengerChangedPriceInfoList: 'passenger_changed_price_info_list',
      renderKey: 'render_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkSuccess: 'boolean',
      failType: 'number',
      passengerChangedPriceInfoList: { 'type': 'array', 'itemType': IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoList },
      renderKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.passengerChangedPriceInfoList)) {
      $dara.Model.validateArray(this.passengerChangedPriceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightInventoryPriceCheckResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * 成功
   */
  message?: string;
  module?: IntlFlightInventoryPriceCheckResponseBodyModule;
  /**
   * @example
   * 92359A00-85D8-16C4-AED0-249618DEEC17
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2103ad1516839612078738332dea5c
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: IntlFlightInventoryPriceCheckResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

