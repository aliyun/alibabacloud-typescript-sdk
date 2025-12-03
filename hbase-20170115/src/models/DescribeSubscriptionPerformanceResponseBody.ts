// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubscriptionPerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValuesPerformanceValue extends $dara.Model {
  date?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionPerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValues extends $dara.Model {
  performanceValue?: DescribeSubscriptionPerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValuesPerformanceValue[];
  static names(): { [key: string]: string } {
    return {
      performanceValue: 'PerformanceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceValue: { 'type': 'array', 'itemType': DescribeSubscriptionPerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValuesPerformanceValue },
    };
  }

  validate() {
    if(Array.isArray(this.performanceValue)) {
      $dara.Model.validateArray(this.performanceValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionPerformanceResponseBodyPerformanceKeysPerformanceKey extends $dara.Model {
  key?: string;
  performanceValues?: DescribeSubscriptionPerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValues;
  unit?: string;
  valueFormat?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      performanceValues: 'PerformanceValues',
      unit: 'Unit',
      valueFormat: 'ValueFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      performanceValues: DescribeSubscriptionPerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValues,
      unit: 'string',
      valueFormat: 'string',
    };
  }

  validate() {
    if(this.performanceValues && typeof (this.performanceValues as any).validate === 'function') {
      (this.performanceValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionPerformanceResponseBodyPerformanceKeys extends $dara.Model {
  performanceKey?: DescribeSubscriptionPerformanceResponseBodyPerformanceKeysPerformanceKey[];
  static names(): { [key: string]: string } {
    return {
      performanceKey: 'PerformanceKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceKey: { 'type': 'array', 'itemType': DescribeSubscriptionPerformanceResponseBodyPerformanceKeysPerformanceKey },
    };
  }

  validate() {
    if(Array.isArray(this.performanceKey)) {
      $dara.Model.validateArray(this.performanceKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionPerformanceResponseBody extends $dara.Model {
  endTime?: string;
  performanceKeys?: DescribeSubscriptionPerformanceResponseBodyPerformanceKeys;
  replicaId?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
      replicaId: 'ReplicaId',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      performanceKeys: DescribeSubscriptionPerformanceResponseBodyPerformanceKeys,
      replicaId: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.performanceKeys && typeof (this.performanceKeys as any).validate === 'function') {
      (this.performanceKeys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

