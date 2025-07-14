// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PriceEstimateFeature } from "./PriceEstimateFeature";


export class PriceEstimateOutputAppsUsages extends $dara.Model {
  /**
   * @example
   * 3600.00
   */
  amount?: number;
  /**
   * @example
   * Microservice_cpuUsage
   */
  id?: string;
  /**
   * @example
   * 核*秒
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      id: 'Id',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      id: 'string',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PriceEstimateOutputApps extends $dara.Model {
  feature?: PriceEstimateFeature;
  /**
   * @example
   * 1
   */
  id?: number;
  usages?: PriceEstimateOutputAppsUsages[];
  static names(): { [key: string]: string } {
    return {
      feature: 'Feature',
      id: 'Id',
      usages: 'Usages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feature: PriceEstimateFeature,
      id: 'number',
      usages: { 'type': 'array', 'itemType': PriceEstimateOutputAppsUsages },
    };
  }

  validate() {
    if(this.feature && typeof (this.feature as any).validate === 'function') {
      (this.feature as any).validate();
    }
    if(Array.isArray(this.usages)) {
      $dara.Model.validateArray(this.usages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PriceEstimateOutputItemsSteps extends $dara.Model {
  /**
   * @example
   * 0
   */
  begin?: number;
  /**
   * @example
   * 10000
   */
  end?: number;
  /**
   * @example
   * 0.0001
   */
  price?: number;
  regionIds?: string[];
  /**
   * @example
   * 核*秒
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
      price: 'Price',
      regionIds: 'RegionIds',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
      price: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PriceEstimateOutputItems extends $dara.Model {
  /**
   * @example
   * 3600.00
   */
  amount?: number;
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * p_micro_service_cpu
   */
  id?: string;
  /**
   * @example
   * 1.00
   */
  price?: number;
  steps?: PriceEstimateOutputItemsSteps[];
  /**
   * @example
   * pack/post
   */
  type?: string;
  /**
   * @example
   * 核*秒
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      count: 'Count',
      id: 'Id',
      price: 'Price',
      steps: 'Steps',
      type: 'Type',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      count: 'number',
      id: 'string',
      price: 'number',
      steps: { 'type': 'array', 'itemType': PriceEstimateOutputItemsSteps },
      type: 'string',
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PriceEstimateOutputPostPayItemsSteps extends $dara.Model {
  /**
   * @example
   * 0
   */
  begin?: number;
  /**
   * @example
   * 10000
   */
  end?: number;
  /**
   * @example
   * 0.0001
   */
  price?: number;
  regionIds?: string[];
  /**
   * @example
   * 核*秒
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
      price: 'Price',
      regionIds: 'RegionIds',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
      price: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PriceEstimateOutputPostPayItems extends $dara.Model {
  /**
   * @example
   * 3600.00
   */
  amount?: number;
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * p_micro_service_cpu
   */
  id?: string;
  /**
   * @example
   * 1.00
   */
  price?: number;
  steps?: PriceEstimateOutputPostPayItemsSteps[];
  /**
   * @example
   * pack/post
   */
  type?: string;
  /**
   * @example
   * 核*秒
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      count: 'Count',
      id: 'Id',
      price: 'Price',
      steps: 'Steps',
      type: 'Type',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      count: 'number',
      id: 'string',
      price: 'number',
      steps: { 'type': 'array', 'itemType': PriceEstimateOutputPostPayItemsSteps },
      type: 'string',
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PriceEstimateOutput extends $dara.Model {
  apps?: PriceEstimateOutputApps[];
  items?: PriceEstimateOutputItems[];
  postPayItems?: PriceEstimateOutputPostPayItems[];
  /**
   * @example
   * 235.66
   */
  postPayTotalPrice?: number;
  /**
   * @example
   * 235.66
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      items: 'Items',
      postPayItems: 'PostPayItems',
      postPayTotalPrice: 'PostPayTotalPrice',
      totalPrice: 'TotalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: { 'type': 'array', 'itemType': PriceEstimateOutputApps },
      items: { 'type': 'array', 'itemType': PriceEstimateOutputItems },
      postPayItems: { 'type': 'array', 'itemType': PriceEstimateOutputPostPayItems },
      postPayTotalPrice: 'number',
      totalPrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apps)) {
      $dara.Model.validateArray(this.apps);
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(Array.isArray(this.postPayItems)) {
      $dara.Model.validateArray(this.postPayItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

