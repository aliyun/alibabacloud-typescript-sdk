// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityEvaluationTaskInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data quality monitoring instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 7227550902
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

