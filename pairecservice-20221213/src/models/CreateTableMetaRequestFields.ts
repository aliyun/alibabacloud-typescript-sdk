// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTableMetaRequestFields extends $dara.Model {
  dataType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  isDimensionField?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  isPartitionField?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * this is gender of people
   */
  meaning?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gender
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BIGINT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      isDimensionField: 'IsDimensionField',
      isPartitionField: 'IsPartitionField',
      meaning: 'Meaning',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      isDimensionField: 'boolean',
      isPartitionField: 'string',
      meaning: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

