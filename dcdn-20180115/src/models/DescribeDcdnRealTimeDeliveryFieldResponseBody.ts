// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnRealTimeDeliveryFieldResponseBodyContentFields extends $dara.Model {
  /**
   * @remarks
   * The description of the field.
   * 
   * @example
   * Access time
   */
  description?: string;
  /**
   * @remarks
   * The name of the field. For more information about fields in real-time log entries, see [Fields in a real-time log](https://help.aliyun.com/document_detail/324199.html).
   * 
   * @example
   * unixtime
   */
  fieldName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fieldName: 'FieldName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fieldName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRealTimeDeliveryFieldResponseBodyContent extends $dara.Model {
  fields?: DescribeDcdnRealTimeDeliveryFieldResponseBodyContentFields[];
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': DescribeDcdnRealTimeDeliveryFieldResponseBodyContentFields },
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRealTimeDeliveryFieldResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned results.
   */
  content?: DescribeDcdnRealTimeDeliveryFieldResponseBodyContent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3EACD23C-F49F-4BF7-B9AD-C2CD3BA888C4
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
      content: DescribeDcdnRealTimeDeliveryFieldResponseBodyContent,
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

