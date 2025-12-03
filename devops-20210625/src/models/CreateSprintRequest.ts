// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSprintRequest extends $dara.Model {
  /**
   * @example
   * 2021-12-02
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asd345xxxxx9q9845xxxxx34
   */
  spaceIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  staffIds?: string[];
  /**
   * @example
   * 2021-12-01
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      name: 'name',
      spaceIdentifier: 'spaceIdentifier',
      staffIds: 'staffIds',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      name: 'string',
      spaceIdentifier: 'string',
      staffIds: { 'type': 'array', 'itemType': 'string' },
      startDate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.staffIds)) {
      $dara.Model.validateArray(this.staffIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

