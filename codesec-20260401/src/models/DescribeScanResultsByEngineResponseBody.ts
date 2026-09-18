// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScanResultsByEngineResponseBodyItemsScaComponentCveDetails extends $dara.Model {
  /**
   * @remarks
   * The associated CWE ID.
   * 
   * @example
   * CVE-2021-44228
   */
  cveId?: string;
  /**
   * @remarks
   * The CVSS score.
   * 
   * @example
   * 1
   */
  cvss?: number;
  /**
   * @remarks
   * The CVSS version.
   * 
   * @example
   * v2.0
   */
  cvssVersion?: string;
  /**
   * @remarks
   * The associated CWE ID. This value can be absent or an empty string.
   * 
   * @example
   * CWE-79
   */
  cweId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Apache Log4j2 JNDI features do not protect against attacker-controlled LDAP and other JNDI-related endpoints.
   */
  description?: string;
  /**
   * @remarks
   * The target version for the fix. This value can be absent or an empty string.
   * 
   * @example
   * 1
   */
  fixedVersion?: string;
  /**
   * @remarks
   * The reference information.
   */
  references?: string[];
  /**
   * @remarks
   * The severity level. Valid values:
   * * critical
   * * high
   * * medium
   * * low
   * 
   * @example
   * critical
   */
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      cveId: 'cveId',
      cvss: 'cvss',
      cvssVersion: 'cvssVersion',
      cweId: 'cweId',
      description: 'description',
      fixedVersion: 'fixedVersion',
      references: 'references',
      severity: 'severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveId: 'string',
      cvss: 'number',
      cvssVersion: 'string',
      cweId: 'string',
      description: 'string',
      fixedVersion: 'string',
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

export class DescribeScanResultsByEngineResponseBodyItemsScaComponentLicenseDetected extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the license is listed as a free license by the FSF. If this key is absent, it means the license is not annotated, which differs from an explicit false value.
   * 
   * @example
   * true
   */
  isFsfLibre?: boolean;
  /**
   * @remarks
   * Indicates whether the license is OSI-approved.
   * 
   * @example
   * true
   */
  isOsiApproved?: boolean;
  /**
   * @remarks
   * The full name of the license.
   * 
   * @example
   * ISC License
   */
  name?: string;
  /**
   * @remarks
   * The SPDX license identifier. If the license cannot be determined, the value is NOASSERTION. The value may be in a non-standard format, such as Apache 2.0.
   * 
   * @example
   * AFL-2.1
   */
  spdxId?: string;
  static names(): { [key: string]: string } {
    return {
      isFsfLibre: 'isFsfLibre',
      isOsiApproved: 'isOsiApproved',
      name: 'name',
      spdxId: 'spdxId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isFsfLibre: 'boolean',
      isOsiApproved: 'boolean',
      name: 'string',
      spdxId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanResultsByEngineResponseBodyItemsScaComponentLicense extends $dara.Model {
  /**
   * @remarks
   * The concluded license expression (SPDX expression, which may contain OR or AND). This is an identifier string only, without full names or OSI/FSF annotations.
   * 
   * @example
   * AFL-2.1 OR BSD-3-Clause
   */
  concluded?: string;
  /**
   * @remarks
   * The list of detected licenses.
   */
  detected?: DescribeScanResultsByEngineResponseBodyItemsScaComponentLicenseDetected[];
  static names(): { [key: string]: string } {
    return {
      concluded: 'concluded',
      detected: 'detected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concluded: 'string',
      detected: { 'type': 'array', 'itemType': DescribeScanResultsByEngineResponseBodyItemsScaComponentLicenseDetected },
    };
  }

  validate() {
    if(Array.isArray(this.detected)) {
      $dara.Model.validateArray(this.detected);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanResultsByEngineResponseBodyItemsScaComponent extends $dara.Model {
  /**
   * @remarks
   * The component type, such as library, application, or framework.
   * 
   * @example
   * library
   */
  componentType?: string;
  /**
   * @remarks
   * The number of CVEs.
   * 
   * @example
   * 1
   */
  cveCount?: number;
  /**
   * @remarks
   * The list of CVE details associated with a component in the SCA finding.
   */
  cveDetails?: DescribeScanResultsByEngineResponseBodyItemsScaComponentCveDetails[];
  /**
   * @remarks
   * The manifest file in which the dependency is declared.
   * 
   * @example
   * node_modules/semver
   */
  declaredIn?: string;
  /**
   * @remarks
   * The component ecosystem, such as npm, maven, pypi, or go.
   * 
   * @example
   * maven
   */
  ecosystem?: string;
  /**
   * @remarks
   * The list of dependency introduction paths in the SCA component information. This is returned only when engine is set to sca.
   */
  introPaths?: string[];
  /**
   * @remarks
   * Indicates whether the dependency is a direct dependency.
   * 
   * @example
   * false
   */
  isDirect?: boolean;
  /**
   * @remarks
   * The license determination result.
   */
  license?: DescribeScanResultsByEngineResponseBodyItemsScaComponentLicense;
  /**
   * @remarks
   * The component coordinate.
   * 
   * @example
   * org.apache.logging.log4j:log4j-core
   */
  packageName?: string;
  /**
   * @remarks
   * The Package URL, which serves as the unique coordinate of the component within the scan.
   * 
   * @example
   * pkg:npm/glob-parent@3.1.0
   */
  purl?: string;
  /**
   * @remarks
   * The component-level remediation suggestion.
   * 
   * @example
   * Upgrade log4j-core to version 2.17.1 or later
   */
  remediation?: string;
  /**
   * @remarks
   * The dependency scope, such as runtime, required, optional, or dev.
   * 
   * @example
   * runtime
   */
  scope?: string;
  /**
   * @remarks
   * The component version.
   * 
   * @example
   * 2.14.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      componentType: 'componentType',
      cveCount: 'cveCount',
      cveDetails: 'cveDetails',
      declaredIn: 'declaredIn',
      ecosystem: 'ecosystem',
      introPaths: 'introPaths',
      isDirect: 'isDirect',
      license: 'license',
      packageName: 'packageName',
      purl: 'purl',
      remediation: 'remediation',
      scope: 'scope',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'string',
      cveCount: 'number',
      cveDetails: { 'type': 'array', 'itemType': DescribeScanResultsByEngineResponseBodyItemsScaComponentCveDetails },
      declaredIn: 'string',
      ecosystem: 'string',
      introPaths: { 'type': 'array', 'itemType': 'string' },
      isDirect: 'boolean',
      license: DescribeScanResultsByEngineResponseBodyItemsScaComponentLicense,
      packageName: 'string',
      purl: 'string',
      remediation: 'string',
      scope: 'string',
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
    if(this.license && typeof (this.license as any).validate === 'function') {
      (this.license as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanResultsByEngineResponseBodyItemsTaintFlow extends $dara.Model {
  /**
   * @remarks
   * The code.
   * 
   * @example
   * stmt.executeQuery(sql);
   */
  code?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * src/main/java/com/example/UserService.java
   */
  file?: string;
  /**
   * @remarks
   * The role type in the taint propagation chain. Valid values:
   * * source: taint source
   * * propagator: propagation node	
   * * validation: validation or scrubbing center	
   * * sink: dangerous sink
   * 
   * @example
   * source
   */
  kind?: string;
  /**
   * @remarks
   * The line number.
   * 
   * @example
   * 111
   */
  line?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Sink: SQL query executed
   */
  note?: string;
  /**
   * @remarks
   * The step sequence number, starting from 0 and incrementing.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * Filters results by the baseline state of incremental scans. Valid values: new, unchanged, absent, and updated.
   * 
   * @example
   * new
   */
  baselineState?: string;
  /**
   * @remarks
   * The category. PDS classifies files based on their file name extensions and MIME types. Main categories include doc, image, audio, and video.
   * 
   * @example
   * SQL Injection
   */
  category?: string;
  /**
   * @remarks
   * The code snippet near the primary location (SAST).
   * 
   * @example
   * 1
   */
  codeSnippet?: string;
  /**
   * @remarks
   * The rule confidence level, ranging from 0 to 1. This is common in SAST results and is omitted if not available.
   * 
   * @example
   * 1
   */
  confidence?: number;
  /**
   * @remarks
   * The time when the finding record was created, in RFC 3339 format.
   * 
   * @example
   * 2026-07-28T03:36:31.573Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The associated CWE ID.
   * 
   * @example
   * CWE-601
   */
  cweId?: string;
  /**
   * @remarks
   * The issue description.
   * 
   * @example
   * User input is directly concatenated into an SQL statement, which may lead to SQL injection.
   */
  description?: string;
  /**
   * @remarks
   * The end line number.
   * 
   * @example
   * 1
   */
  endLine?: number;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * aone2/2247063/1767838276141/Artifacts_EBookingApps_Pipeline_V2_Staging_131.tgz
   */
  filePath?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 934
   */
  id?: number;
  /**
   * @remarks
   * The brief summary of the finding. Unlike description, this is more of a conclusion statement.
   * 
   * @example
   * User input is used to construct SQL queries without sanitization
   */
  itemSummary?: string;
  /**
   * @remarks
   * The OWASP category.
   * 
   * @example
   * A01:2021-Broken Access Control
   */
  owaspCategory?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * cdp2cdl_cdp_sha_nprd
   */
  projectName?: string;
  /**
   * @remarks
   * The remediation code example.
   * 
   * @example
   * String sql = \\"SELECT * FROM users WHERE name = ?\\";\\nPreparedStatement ps = conn.prepareStatement(sql);\\nps.setString(1, username);\\nResultSet rs = ps.executeQuery();
   */
  remediationCodeExample?: string;
  /**
   * @remarks
   * The remediation suggestion.
   * 
   * @example
   * Use PreparedStatement with parameterized queries instead of string concatenation
   */
  remediationSuggestion?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * java-sqli-001
   */
  ruleId?: string;
  /**
   * @remarks
   * The SCA component information. This is returned only when engine is set to sca.
   */
  scaComponent?: DescribeScanResultsByEngineResponseBodyItemsScaComponent;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 3176
   */
  scanId?: number;
  /**
   * @remarks
   * The severity level. Valid values:
   * * critical 
   * * high 
   * * medium 
   * * low
   * 
   * @example
   * high
   */
  severity?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * todo_open_dingoj06pvqfeayy3lkr
   */
  source?: string;
  /**
   * @remarks
   * The start line number.
   * 
   * @example
   * 1
   */
  startLine?: number;
  /**
   * @remarks
   * The status. Valid values:
   * * running: Running.
   * * completed: Completed.
   * * failed: Failed.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The SAST taint analysis call chain, which describes the complete propagation path of sensitive data from the taint source to the dangerous sink. This is returned only when engine is set to sast.
   */
  taintFlow?: DescribeScanResultsByEngineResponseBodyItemsTaintFlow[];
  /**
   * @remarks
   * The text summary of the taint call chain. This is returned only when engine is set to sast.
   * 
   * @example
   * User input flows from HTTP parameter into SQL query executio
   */
  taintFlowSummary?: string;
  /**
   * @remarks
   * The issue title.
   * 
   * @example
   * SQL Injection Risk
   */
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
  /**
   * @remarks
   * The engine type. Valid values:
   * * sast
   * * sca
   * 
   * @example
   * sca
   */
  engine?: string;
  /**
   * @remarks
   * The result list.
   */
  items?: DescribeScanResultsByEngineResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Do not specify this parameter for the first page or set it to an empty string. For subsequent pages, pass the nextToken value from the previous response without any modification. If the nextToken value in the response is empty, the last page has been reached.
   * 
   * @example
   * eyJ0IjoiMjAyNi0wNy0xNlQwNzo1MzozOC4wMjFaIiwiaSI6MTAwMDQ0OH0
   */
  nextToken?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 76851f2b5bf0187fbc29e8bca4
   */
  projectId?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9A1F403F-0A85-5578-8B7C-55E3E9408659
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 3088795
   */
  scanId?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
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

