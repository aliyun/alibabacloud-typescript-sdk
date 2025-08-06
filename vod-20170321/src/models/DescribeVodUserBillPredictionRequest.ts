// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodUserBillPredictionRequest extends $dara.Model {
  area?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dimension?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      dimension: 'Dimension',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      dimension: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

