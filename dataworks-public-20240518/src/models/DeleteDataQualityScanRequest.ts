// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataQualityScanRequest extends $dara.Model {
  /**
   * @remarks
   * The deprecated parameter. No configuration is required.
   * 
   * @example
   * null
   */
  description?: string;
  /**
   * @remarks
   * The ID of the data quality monitor.
   * 
   * @example
   * 123123
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

