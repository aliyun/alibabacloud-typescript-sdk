// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssV2ResultResponseBodyItemsLabelDetails extends $dara.Model {
  confidence?: number;
  description?: string;
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
  confidence?: number;
  description?: string;
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
  bucket?: string;
  code?: string;
  contentType?: string;
  freeze?: boolean;
  freezeStatus?: string;
  freezeType?: string;
  labelDetails?: DescribeOssV2ResultResponseBodyItemsLabelDetails[];
  labelDetails2?: DescribeOssV2ResultResponseBodyItemsLabelDetails2[];
  labels?: string[];
  labels2?: string[];
  manualFreezeAction?: string;
  manualOperateTime?: string;
  manualOperator?: string;
  md5?: string;
  object?: string;
  requestId?: string;
  riskLevel?: string;
  riskLevel0?: string;
  riskLevel2?: string;
  scanResult?: string;
  serviceCode?: string;
  sysDisposalStatus?: string;
  taskId?: string;
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
  currentPage?: number;
  items?: DescribeOssV2ResultResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
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

