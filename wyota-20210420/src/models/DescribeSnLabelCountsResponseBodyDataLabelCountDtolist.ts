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

