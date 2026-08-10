// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScanResultsByEngineResponseBodyItemsScaComponentCveDetails extends $dara.Model {
  cveId?: string;
  cvss?: number;
  cvssVersion?: string;
  description?: string;
  references?: string[];
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      cveId: 'cveId',
      cvss: 'cvss',
      cvssVersion: 'cvssVersion',
      description: 'description',
      references: 'references',
      severity: 'severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveId: 'string',
      cvss: 'number',
      cvssVersion: 'string',
      description: 'string',
      references: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.references)) {
      $dara.Model.validateArray(this.references);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanResultsByEngineResponseBodyItemsScaComponent extends $dara.Model {
  cveCount?: number;
  cveDetails?: DescribeScanResultsByEngineResponseBodyItemsScaComponentCveDetails[];
  introPaths?: string[];
  isDirect?: boolean;
  packageName?: string;
  remediation?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      cveCount: 'cveCount',
      cveDetails: 'cveDetails',
      introPaths: 'introPaths',
      isDirect: 'isDirect',
      packageName: 'packageName',
      remediation: 'remediation',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveCount: 'number',
      cveDetails: { 'type': 'array', 'itemType': DescribeScanResultsByEngineResponseBodyItemsScaComponentCveDetails },
      introPaths: { 'type': 'array', 'itemType': 'string' },
      isDirect: 'boolean',
      packageName: 'string',
      remediation: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cveDetails)) {
      $dara.Model.validateArray(this.cveDetails);
    }
    if(Array.isArray(this.introPaths)) {
      $dara.Model.validateArray(this.introPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanResultsByEngineResponseBodyItemsTaintFlow extends $dara.Model {
  code?: string;
  file?: string;
  kind?: string;
  line?: number;
  note?: string;
  step?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      file: 'file',
      kind: 'kind',
      line: 'line',
      note: 'note',
      step: 'step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      file: 'string',
      kind: 'string',
      line: 'number',
      note: 'string',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanResultsByEngineResponseBodyItems extends $dara.Model {
  baselineState?: string;
  category?: string;
  codeSnippet?: string;
  confidence?: number;
  /**
   * @remarks
   * 发现记录创建时间（RFC3339）
   */
  createdAt?: string;
  cweId?: string;
  description?: string;
  endLine?: number;
  filePath?: string;
  id?: number;
  itemSummary?: string;
  owaspCategory?: string;
  projectName?: string;
  remediationCodeExample?: string;
  remediationSuggestion?: string;
  ruleId?: string;
  scaComponent?: DescribeScanResultsByEngineResponseBodyItemsScaComponent;
  scanId?: number;
  severity?: string;
  source?: string;
  startLine?: number;
  status?: string;
  taintFlow?: DescribeScanResultsByEngineResponseBodyItemsTaintFlow[];
  taintFlowSummary?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      baselineState: 'baselineState',
      category: 'category',
      codeSnippet: 'codeSnippet',
      confidence: 'confidence',
      createdAt: 'createdAt',
      cweId: 'cweId',
      description: 'description',
      endLine: 'endLine',
      filePath: 'filePath',
      id: 'id',
      itemSummary: 'itemSummary',
      owaspCategory: 'owaspCategory',
      projectName: 'projectName',
      remediationCodeExample: 'remediationCodeExample',
      remediationSuggestion: 'remediationSuggestion',
      ruleId: 'ruleId',
      scaComponent: 'scaComponent',
      scanId: 'scanId',
      severity: 'severity',
      source: 'source',
      startLine: 'startLine',
      status: 'status',
      taintFlow: 'taintFlow',
      taintFlowSummary: 'taintFlowSummary',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineState: 'string',
      category: 'string',
      codeSnippet: 'string',
      confidence: 'number',
      createdAt: 'string',
      cweId: 'string',
      description: 'string',
      endLine: 'number',
      filePath: 'string',
      id: 'number',
      itemSummary: 'string',
      owaspCategory: 'string',
      projectName: 'string',
      remediationCodeExample: 'string',
      remediationSuggestion: 'string',
      ruleId: 'string',
      scaComponent: DescribeScanResultsByEngineResponseBodyItemsScaComponent,
      scanId: 'number',
      severity: 'string',
      source: 'string',
      startLine: 'number',
      status: 'string',
      taintFlow: { 'type': 'array', 'itemType': DescribeScanResultsByEngineResponseBodyItemsTaintFlow },
      taintFlowSummary: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.scaComponent && typeof (this.scaComponent as any).validate === 'function') {
      (this.scaComponent as any).validate();
    }
    if(Array.isArray(this.taintFlow)) {
      $dara.Model.validateArray(this.taintFlow);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanResultsByEngineResponseBody extends $dara.Model {
  engine?: string;
  items?: DescribeScanResultsByEngineResponseBodyItems[];
  maxResults?: number;
  nextToken?: string;
  projectId?: number;
  requestId?: string;
  scanId?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      engine: 'engine',
      items: 'items',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      projectId: 'projectId',
      requestId: 'requestId',
      scanId: 'scanId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      items: { 'type': 'array', 'itemType': DescribeScanResultsByEngineResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      projectId: 'number',
      requestId: 'string',
      scanId: 'number',
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

