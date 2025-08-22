// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnSLSRealTimeLogTypeResponseBodyContentBusiness extends $dara.Model {
  /**
   * @remarks
   * The type of real-time logs. Valid values:
   * 
   * *   **dcdn_log_access_l1**: access logs.
   * *   **dcdn_log_er**: EdgeRoutine logs
   * *   **dcdn_log_waf**: WAF interception logs
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * The description of the real-time log type.
   * 
   * @example
   * product_U8JE
   */
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      desc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSLSRealTimeLogTypeResponseBodyContent extends $dara.Model {
  business?: DescribeDcdnSLSRealTimeLogTypeResponseBodyContentBusiness[];
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: { 'type': 'array', 'itemType': DescribeDcdnSLSRealTimeLogTypeResponseBodyContentBusiness },
    };
  }

  validate() {
    if(Array.isArray(this.business)) {
      $dara.Model.validateArray(this.business);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnSLSRealTimeLogTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned results.
   */
  content?: DescribeDcdnSLSRealTimeLogTypeResponseBodyContent;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: DescribeDcdnSLSRealTimeLogTypeResponseBodyContent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

