// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageLabelsResponseBodyLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the label.
   * 
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @remarks
   * The value of the label.
   * 
   * @example
   * GPU
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLabelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of image labels.
   */
  labels?: ListImageLabelsResponseBodyLabels[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of image labels that meet the filter conditions.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': ListImageLabelsResponseBodyLabels },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

