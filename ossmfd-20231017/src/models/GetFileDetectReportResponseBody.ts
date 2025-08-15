// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileDetectReportResponseBodyData extends $dara.Model {
  /**
   * @example
   * {
   *         "sha256": "",
   *         "sha512": "",
   *         "source": "aegis",
   *         "gmt_first_submit": "",
   *         "sha1": "",
   *         "virus_result": "",
   *         "webshell_result": "",
   *         "gmt_update": "",
   *         "sandbox_result": "2",
   *         "fileSize": "363752",
   *         "virus_name": "",
   *     }
   */
  basic?: string;
  /**
   * @example
   * 4206dbcf1c2bc80ea95ad64043******
   */
  fileHash?: string;
  /**
   * @example
   * testFile******
   */
  filename?: string;
  /**
   * @example
   * true
   */
  hasData?: boolean;
  intelligences?: string;
  /**
   * @example
   * {\\"BehaviorData\\": {}, \\"ProcessData\\": {}, \\"SandboxData\\": {}, \\"AttackData\\": [], \\"NetworkData\\": {}, \\"SolutionData\\": {}, \\"FileData\\": {}}
   */
  sandbox?: string;
  /**
   * @example
   * true
   */
  showTab?: boolean;
  /**
   * @example
   * 2
   */
  threatLevel?: number;
  threatTypes?: string;
  static names(): { [key: string]: string } {
    return {
      basic: 'Basic',
      fileHash: 'FileHash',
      filename: 'Filename',
      hasData: 'HasData',
      intelligences: 'Intelligences',
      sandbox: 'Sandbox',
      showTab: 'ShowTab',
      threatLevel: 'ThreatLevel',
      threatTypes: 'ThreatTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basic: 'string',
      fileHash: 'string',
      filename: 'string',
      hasData: 'boolean',
      intelligences: 'string',
      sandbox: 'string',
      showTab: 'boolean',
      threatLevel: 'number',
      threatTypes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileDetectReportResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetFileDetectReportResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * AAC546A5-5EDC-5939-86A3-56DFAF******
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetFileDetectReportResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

