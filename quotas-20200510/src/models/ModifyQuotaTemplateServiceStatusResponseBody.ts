// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyQuotaTemplateServiceStatusResponseBodyTemplateServiceStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-pG****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The status of the quota template. Valid values:
   * 
   * *   \\-1: The quota template is disabled.
   * *   1: The quota template is enabled.
   * 
   * @example
   * 1
   */
  serviceStatus?: number;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryId: 'ResourceDirectoryId',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryId: 'string',
      serviceStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQuotaTemplateServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the quota template.
   */
  templateServiceStatus?: ModifyQuotaTemplateServiceStatusResponseBodyTemplateServiceStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateServiceStatus: 'TemplateServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateServiceStatus: ModifyQuotaTemplateServiceStatusResponseBodyTemplateServiceStatus,
    };
  }

  validate() {
    if(this.templateServiceStatus && typeof (this.templateServiceStatus as any).validate === 'function') {
      (this.templateServiceStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

