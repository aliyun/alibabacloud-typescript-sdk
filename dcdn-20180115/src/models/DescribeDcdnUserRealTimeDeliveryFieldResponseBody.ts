// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnUserRealTimeDeliveryFieldResponseBodyContentFields extends $dara.Model {
  /**
   * @remarks
   * The description of the field.
   * 
   * @example
   * The timestamp of the request
   */
  description?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * unixtime
   */
  fieldName?: string;
  /**
   * @remarks
   * Indicates whether the field was selected.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fieldName: 'FieldName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fieldName: 'string',
      selected: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserRealTimeDeliveryFieldResponseBodyContent extends $dara.Model {
  fields?: DescribeDcdnUserRealTimeDeliveryFieldResponseBodyContentFields[];
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': DescribeDcdnUserRealTimeDeliveryFieldResponseBodyContentFields },
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

export class DescribeDcdnUserRealTimeDeliveryFieldResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  content?: DescribeDcdnUserRealTimeDeliveryFieldResponseBodyContent;
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
      content: DescribeDcdnUserRealTimeDeliveryFieldResponseBodyContent,
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

