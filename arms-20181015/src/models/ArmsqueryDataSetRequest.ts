// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ARMSQueryDataSetRequestDimensions extends $dara.Model {
  key?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
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

export class ARMSQueryDataSetRequestOptionalDims extends $dara.Model {
  key?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
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

export class ARMSQueryDataSetRequestRequiredDims extends $dara.Model {
  key?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
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

export class ARMSQueryDataSetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  datasetId?: number;
  dateStr?: string;
  dimensions?: ARMSQueryDataSetRequestDimensions[];
  hackerUserId?: string;
  hungryMode?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  intervalInSec?: number;
  isDrillDown?: boolean;
  limit?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  maxTime?: number;
  measures?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  minTime?: number;
  optionalDims?: ARMSQueryDataSetRequestOptionalDims[];
  orderByKey?: string;
  reduceTail?: boolean;
  requiredDims?: ARMSQueryDataSetRequestRequiredDims[];
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      dateStr: 'DateStr',
      dimensions: 'Dimensions',
      hackerUserId: 'HackerUserId',
      hungryMode: 'HungryMode',
      intervalInSec: 'IntervalInSec',
      isDrillDown: 'IsDrillDown',
      limit: 'Limit',
      maxTime: 'MaxTime',
      measures: 'Measures',
      minTime: 'MinTime',
      optionalDims: 'OptionalDims',
      orderByKey: 'OrderByKey',
      reduceTail: 'ReduceTail',
      requiredDims: 'RequiredDims',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      dateStr: 'string',
      dimensions: { 'type': 'array', 'itemType': ARMSQueryDataSetRequestDimensions },
      hackerUserId: 'string',
      hungryMode: 'boolean',
      intervalInSec: 'number',
      isDrillDown: 'boolean',
      limit: 'number',
      maxTime: 'number',
      measures: { 'type': 'array', 'itemType': 'string' },
      minTime: 'number',
      optionalDims: { 'type': 'array', 'itemType': ARMSQueryDataSetRequestOptionalDims },
      orderByKey: 'string',
      reduceTail: 'boolean',
      requiredDims: { 'type': 'array', 'itemType': ARMSQueryDataSetRequestRequiredDims },
      securityToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    if(Array.isArray(this.measures)) {
      $dara.Model.validateArray(this.measures);
    }
    if(Array.isArray(this.optionalDims)) {
      $dara.Model.validateArray(this.optionalDims);
    }
    if(Array.isArray(this.requiredDims)) {
      $dara.Model.validateArray(this.requiredDims);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

