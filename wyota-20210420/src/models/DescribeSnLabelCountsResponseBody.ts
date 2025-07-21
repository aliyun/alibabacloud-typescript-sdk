// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnLabelCountsResponseBodyDataLabelCountDTOList extends $dara.Model {
  count?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
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

export class DescribeSnLabelCountsResponseBodyData extends $dara.Model {
  labelCountDTOList?: DescribeSnLabelCountsResponseBodyDataLabelCountDTOList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      labelCountDTOList: 'LabelCountDTOList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelCountDTOList: { 'type': 'array', 'itemType': DescribeSnLabelCountsResponseBodyDataLabelCountDTOList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labelCountDTOList)) {
      $dara.Model.validateArray(this.labelCountDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnLabelCountsResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeSnLabelCountsResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeSnLabelCountsResponseBodyData,
      message: 'string',
      requestId: 'string',
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

