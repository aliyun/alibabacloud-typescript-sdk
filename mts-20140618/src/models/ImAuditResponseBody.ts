// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImAuditResponseBodyImageResults } from "./ImAuditResponseBodyImageResults";
import { ImAuditResponseBodyTextResults } from "./ImAuditResponseBodyTextResults";


export class ImAuditResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the image moderation QPS exceeds the limit. Valid values: true and false. A value of true indicates that the QPS does not exceed the limit. A value of false indicates that the QPS exceeds the limit.
   * 
   * @example
   * false
   */
  imageQuotaExceed?: boolean;
  /**
   * @remarks
   * The image moderation results. If the HTTP status code 200 is returned, the array in the returned results contains one or more elements. For more information about the parameters, see [Data returned by the ImAudit operation](https://help.aliyun.com/document_detail/268644.html).
   */
  imageResults?: ImAuditResponseBodyImageResults;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5210DBB0-E327-4D45-ADBC-0B83C8793421
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the text moderation QPS exceeds the limit. Valid values: true and false.
   * 
   * @example
   * false
   */
  textQuotaExceed?: boolean;
  /**
   * @remarks
   * The text moderation results. If the HTTP status code 200 is returned, the array in the returned results contains one or more elements. For more information about the parameters, see [Data returned by the ImAudit operation](https://help.aliyun.com/document_detail/268644.html).
   */
  textResults?: ImAuditResponseBodyTextResults;
  static names(): { [key: string]: string } {
    return {
      imageQuotaExceed: 'ImageQuotaExceed',
      imageResults: 'ImageResults',
      requestId: 'RequestId',
      textQuotaExceed: 'TextQuotaExceed',
      textResults: 'TextResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageQuotaExceed: 'boolean',
      imageResults: ImAuditResponseBodyImageResults,
      requestId: 'string',
      textQuotaExceed: 'boolean',
      textResults: ImAuditResponseBodyTextResults,
    };
  }

  validate() {
    if(this.imageResults && typeof (this.imageResults as any).validate === 'function') {
      (this.imageResults as any).validate();
    }
    if(this.textResults && typeof (this.textResults as any).validate === 'function') {
      (this.textResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

