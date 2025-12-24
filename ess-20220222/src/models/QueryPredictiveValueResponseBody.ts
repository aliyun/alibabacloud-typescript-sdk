// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPredictiveValueResponseBodyPredictiveValuesPredictiveValue extends $dara.Model {
  /**
   * @example
   * 2025-12-17T10:00Z
   */
  time?: string;
  /**
   * @example
   * 3
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPredictiveValueResponseBodyPredictiveValues extends $dara.Model {
  predictiveValue?: QueryPredictiveValueResponseBodyPredictiveValuesPredictiveValue[];
  static names(): { [key: string]: string } {
    return {
      predictiveValue: 'PredictiveValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predictiveValue: { 'type': 'array', 'itemType': QueryPredictiveValueResponseBodyPredictiveValuesPredictiveValue },
    };
  }

  validate() {
    if(Array.isArray(this.predictiveValue)) {
      $dara.Model.validateArray(this.predictiveValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPredictiveValueResponseBody extends $dara.Model {
  predictiveValues?: QueryPredictiveValueResponseBodyPredictiveValues;
  /**
   * @example
   * FA5F448E-DC84-5EBC-B6D5-F659ADxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      predictiveValues: 'PredictiveValues',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predictiveValues: QueryPredictiveValueResponseBodyPredictiveValues,
      requestId: 'string',
    };
  }

  validate() {
    if(this.predictiveValues && typeof (this.predictiveValues as any).validate === 'function') {
      (this.predictiveValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

