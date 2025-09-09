// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventTypesResponseBodyEventTypeListSubTypeList extends $dara.Model {
  /**
   * @remarks
   * The service to which the anomalous event detection rule applies. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * RDS
   */
  adaptedProduct?: string;
  /**
   * @remarks
   * The code of the anomalous event subtype.
   * 
   * @example
   * 020008
   */
  code?: string;
  /**
   * @remarks
   * The code of the configuration.
   * 
   * @example
   * 0100**
   */
  configCode?: string;
  /**
   * @remarks
   * The content format of anomalous event detection rule. Valid values:
   * 
   * *   **0**: numeric values such as thresholds
   * *   **1**: text such as IP addresses
   * 
   * @example
   * 1
   */
  configContentType?: number;
  /**
   * @remarks
   * The description of the configuration.
   * 
   * @example
   * The period of time for which the permission is not used exceeds the threshold. The specified threshold is ${value} calendar days.
   */
  configDescription?: string;
  /**
   * @remarks
   * The value of the configuration.
   * 
   * @example
   * 90
   */
  configValue?: string;
  /**
   * @remarks
   * The description of the anomalous event subtype.
   * 
   * @example
   * Inappropriate configuration-No protection for the MaxCompute sensitive project, \\*\\*\\*\\*
   */
  description?: string;
  /**
   * @remarks
   * The number of times that the anomalous event hits the anomalous event detection rule.
   * 
   * @example
   * 2
   */
  eventHitCount?: number;
  /**
   * @remarks
   * The ID of the anomalous event subtype.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the anomalous event subtype.
   * 
   * @example
   * Inappropriate configuration-No protection for the MaxCompute sensitive project
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether detection is enabled for the anomalous event subtype. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
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
   * The code of the anomalous event type.
   * 
   * @example
   * 01
   */
  code?: string;
  /**
   * @remarks
   * The description of the anomalous event type.
   * 
   * @example
   * Anomalous permission usage,\\*\\*\\*\\*
   */
  description?: string;
  /**
   * @remarks
   * The ID of the anomalous event type.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the anomalous event type.
   * 
   * @example
   * Anomalous permission usage
   */
  name?: string;
  /**
   * @remarks
   * An array that consists of anomalous event subtypes.
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
   * An array that consists of the types of anomalous events.
   * 
   * > If you leave the ParentTypeId parameter empty, anomalous event types are returned. If you set the ParentTypeId parameter, anomalous event subtypes under the specified anomalous event type are returned.
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

