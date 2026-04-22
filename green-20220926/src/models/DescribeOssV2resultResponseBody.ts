// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssV2ResultResponseBodyItemsLabelDetails extends $dara.Model {
  /**
   * @example
   * 50.00
   */
  confidence?: number;
  description?: string;
  /**
   * @example
   * politics
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssV2ResultResponseBodyItemsLabelDetails2 extends $dara.Model {
  /**
   * @example
   * 90.00
   */
  confidence?: number;
  description?: string;
  /**
   * @example
   * politics
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssV2ResultResponseBodyItems extends $dara.Model {
  /**
   * @example
   * buckect_test
   */
  bucket?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * image
   */
  contentType?: string;
  /**
   * @example
   * true
   */
  freeze?: boolean;
  /**
   * @example
   * FREEZED
   */
  freezeStatus?: string;
  /**
   * @example
   * ACL
   */
  freezeType?: string;
  labelDetails?: DescribeOssV2ResultResponseBodyItemsLabelDetails[];
  labelDetails2?: DescribeOssV2ResultResponseBodyItemsLabelDetails2[];
  labels?: string[];
  labels2?: string[];
  /**
   * @example
   * FREEZE
   */
  manualFreezeAction?: string;
  /**
   * @example
   * 2025-08-09 12:00:00
   */
  manualOperateTime?: string;
  /**
   * @example
   * xx
   */
  manualOperator?: string;
  /**
   * @example
   * 54416c9b159df4a60ae03c04ccb94cb5
   */
  md5?: string;
  /**
   * @example
   * 1713014531569_958.png
   */
  object?: string;
  /**
   * @example
   * AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE
   */
  requestId?: string;
  /**
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @example
   * low
   */
  riskLevel0?: string;
  /**
   * @example
   * none
   */
  riskLevel2?: string;
  /**
   * @example
   * {}
   */
  scanResult?: string;
  /**
   * @remarks
   * Service code。
   * 
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @example
   * COPY
   */
  sysDisposalStatus?: string;
  /**
   * @example
   * P_BT3FHS
   */
  taskId?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      code: 'Code',
      contentType: 'ContentType',
      freeze: 'Freeze',
      freezeStatus: 'FreezeStatus',
      freezeType: 'FreezeType',
      labelDetails: 'LabelDetails',
      labelDetails2: 'LabelDetails2',
      labels: 'Labels',
      labels2: 'Labels2',
      manualFreezeAction: 'ManualFreezeAction',
      manualOperateTime: 'ManualOperateTime',
      manualOperator: 'ManualOperator',
      md5: 'Md5',
      object: 'Object',
      requestId: 'RequestId',
      riskLevel: 'RiskLevel',
      riskLevel0: 'RiskLevel0',
      riskLevel2: 'RiskLevel2',
      scanResult: 'ScanResult',
      serviceCode: 'ServiceCode',
      sysDisposalStatus: 'SysDisposalStatus',
      taskId: 'TaskId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      code: 'string',
      contentType: 'string',
      freeze: 'boolean',
      freezeStatus: 'string',
      freezeType: 'string',
      labelDetails: { 'type': 'array', 'itemType': DescribeOssV2ResultResponseBodyItemsLabelDetails },
      labelDetails2: { 'type': 'array', 'itemType': DescribeOssV2ResultResponseBodyItemsLabelDetails2 },
      labels: { 'type': 'array', 'itemType': 'string' },
      labels2: { 'type': 'array', 'itemType': 'string' },
      manualFreezeAction: 'string',
      manualOperateTime: 'string',
      manualOperator: 'string',
      md5: 'string',
      object: 'string',
      requestId: 'string',
      riskLevel: 'string',
      riskLevel0: 'string',
      riskLevel2: 'string',
      scanResult: 'string',
      serviceCode: 'string',
      sysDisposalStatus: 'string',
      taskId: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labelDetails)) {
      $dara.Model.validateArray(this.labelDetails);
    }
    if(Array.isArray(this.labelDetails2)) {
      $dara.Model.validateArray(this.labelDetails2);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.labels2)) {
      $dara.Model.validateArray(this.labels2);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssV2ResultResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: DescribeOssV2ResultResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeOssV2ResultResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

