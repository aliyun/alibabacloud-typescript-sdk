// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCustomerLabelResponseBodyDataCustomerLabel extends $dara.Model {
  label?: string;
  labelSeries?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      labelSeries: 'LabelSeries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      labelSeries: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerLabelResponseBodyData extends $dara.Model {
  customerLabel?: QueryCustomerLabelResponseBodyDataCustomerLabel[];
  static names(): { [key: string]: string } {
    return {
      customerLabel: 'CustomerLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerLabel: { 'type': 'array', 'itemType': QueryCustomerLabelResponseBodyDataCustomerLabel },
    };
  }

  validate() {
    if(Array.isArray(this.customerLabel)) {
      $dara.Model.validateArray(this.customerLabel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerLabelResponseBody extends $dara.Model {
  code?: string;
  data?: QueryCustomerLabelResponseBodyData;
  message?: string;
  requestId?: string;
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
      data: QueryCustomerLabelResponseBodyData,
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

