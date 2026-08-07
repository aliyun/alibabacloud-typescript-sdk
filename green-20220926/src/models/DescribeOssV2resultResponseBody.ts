// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssV2ResultResponseBodyItemsLabelDetails extends $dara.Model {
  /**
   * @remarks
   * The confidence score.
   * 
   * @example
   * 50.00
   */
  confidence?: number;
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * 涉政
   */
  description?: string;
  /**
   * @remarks
   * The label.
   * 
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
   * @remarks
   * The confidence score.
   * 
   * @example
   * 90.00
   */
  confidence?: number;
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * 涉政
   */
  description?: string;
  /**
   * @remarks
   * The label.
   * 
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
   * @remarks
   * The storage bucket.
   * 
   * @example
   * buckect_test
   */
  bucket?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The moderation modality type.
   * 
   * @example
   * image
   */
  contentType?: string;
  /**
   * @remarks
   * Indicates whether automatic freezing is configured.
   * 
   * @example
   * true
   */
  freeze?: boolean;
  /**
   * @remarks
   * The freeze status.
   * 
   * @example
   * FREEZED
   */
  freezeStatus?: string;
  /**
   * @remarks
   * The freeze type.
   * 
   * @example
   * ACL
   */
  freezeType?: string;
  /**
   * @remarks
   * The label details, corresponding to labels.
   */
  labelDetails?: DescribeOssV2ResultResponseBodyItemsLabelDetails[];
  /**
   * @remarks
   * The details of labels2, corresponding to labels2.
   */
  labelDetails2?: DescribeOssV2ResultResponseBodyItemsLabelDetails2[];
  /**
   * @remarks
   * The image labels.
   */
  labels?: string[];
  /**
   * @remarks
   * The text labels.
   */
  labels2?: string[];
  /**
   * @remarks
   * The manual disposition status.
   * 
   * @example
   * FREEZE
   */
  manualFreezeAction?: string;
  /**
   * @remarks
   * The disposition time.
   * 
   * @example
   * 2025-08-09 12:00:00
   */
  manualOperateTime?: string;
  /**
   * @remarks
   * The operator who performed the disposition.
   * 
   * @example
   * xx
   */
  manualOperator?: string;
  /**
   * @remarks
   * The MD5 hash of the file.
   * 
   * @example
   * 54416c9b159df4a60ae03c04ccb94cb5
   */
  md5?: string;
  /**
   * @remarks
   * The object name.
   * 
   * @example
   * 1713014531569_958.png
   */
  object?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE
   */
  requestId?: string;
  /**
   * @remarks
   * The image risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The overall risk level.
   * 
   * @example
   * low
   */
  riskLevel0?: string;
  /**
   * @remarks
   * The audio or text risk level.
   * 
   * @example
   * none
   */
  riskLevel2?: string;
  /**
   * @remarks
   * The result details.
   * 
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
   * @remarks
   * The automatic system freeze operation.
   * 
   * @example
   * COPY
   */
  sysDisposalStatus?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * P_BT3FHS
   */
  taskId?: string;
  /**
   * @remarks
   * The task URL.
   * 
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
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data on the current page.
   */
  items?: DescribeOssV2ResultResponseBodyItems[];
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

