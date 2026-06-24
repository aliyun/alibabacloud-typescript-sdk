// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventTypesResponseBodyEventTypeListSubTypeList extends $dara.Model {
  /**
   * @remarks
   * The products to which the rule applies, including MaxCompute, OSS, AnalyticDB for MySQL, Tablestore, and ApsaraDB RDS.
   * 
   * @example
   * RDS
   */
  adaptedProduct?: string;
  /**
   * @remarks
   * The code of the child anomalous activity type.
   * 
   * @example
   * 020008
   */
  code?: string;
  /**
   * @remarks
   * The configuration code.
   * 
   * @example
   * 0100**
   */
  configCode?: string;
  /**
   * @remarks
   * The format of the rule item. Valid values:
   * 
   * - **0**: numeric (such as a threshold).
   * 
   * - **1**: text (such as an IP address).
   * 
   * @example
   * 1
   */
  configContentType?: number;
  /**
   * @remarks
   * The configuration description.
   * 
   * @example
   * Permission idle period exceeds threshold: current threshold is defined as 7 natural days
   */
  configDescription?: string;
  /**
   * @remarks
   * The configuration value.
   * 
   * @example
   * 90
   */
  configValue?: string;
  /**
   * @remarks
   * The description of the child anomalous activity type.
   * 
   * @example
   * Configuration error - MaxCompute sensitive project not protected，****
   */
  description?: string;
  /**
   * @remarks
   * The number of times the rule is hit.
   * 
   * @example
   * 2
   */
  eventHitCount?: number;
  /**
   * @remarks
   * The unique ID of the child anomalous activity type.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the child anomalous activity type.
   * 
   * @example
   * Configuration error - MaxCompute sensitive project not protected
   */
  name?: string;
  /**
   * @remarks
   * The detection feature of Data Security Center (DSC) for the child anomalous activity type. Valid values:
   * 
   * - **1**: enabled.
   * 
   * - **0**: disabled.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      adaptedProduct: 'AdaptedProduct',
      code: 'Code',
      configCode: 'ConfigCode',
      configContentType: 'ConfigContentType',
      configDescription: 'ConfigDescription',
      configValue: 'ConfigValue',
      description: 'Description',
      eventHitCount: 'EventHitCount',
      id: 'Id',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptedProduct: 'string',
      code: 'string',
      configCode: 'string',
      configContentType: 'number',
      configDescription: 'string',
      configValue: 'string',
      description: 'string',
      eventHitCount: 'number',
      id: 'number',
      name: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTypesResponseBodyEventTypeList extends $dara.Model {
  /**
   * @remarks
   * The code of the parent anomalous activity type.
   * 
   * @example
   * 01
   */
  code?: string;
  /**
   * @remarks
   * The description of the parent anomalous activity type.
   * 
   * @example
   * Permission usage anomaly, ****
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the parent anomalous activity type.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the parent anomalous activity type.
   * 
   * @example
   * Permission usage anomaly
   */
  name?: string;
  /**
   * @remarks
   * The list of child anomalous activity types.
   */
  subTypeList?: DescribeEventTypesResponseBodyEventTypeListSubTypeList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      subTypeList: 'SubTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
      subTypeList: { 'type': 'array', 'itemType': DescribeEventTypesResponseBodyEventTypeListSubTypeList },
    };
  }

  validate() {
    if(Array.isArray(this.subTypeList)) {
      $dara.Model.validateArray(this.subTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of anomalous activity types.
   * 
   * > If ParentTypeId is empty, the parent anomalous activity types are returned. If ParentTypeId is not empty, the child anomalous activity types are returned.
   */
  eventTypeList?: DescribeEventTypesResponseBodyEventTypeList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventTypeList: 'EventTypeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypeList: { 'type': 'array', 'itemType': DescribeEventTypesResponseBodyEventTypeList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventTypeList)) {
      $dara.Model.validateArray(this.eventTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

