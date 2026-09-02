// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentDataSemanticsExampleParameter extends $dara.Model {
  /**
   * @remarks
   * The data type of the parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * date
   */
  dataType?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * The lower bound of the transaction date
   */
  description?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * This parameter is required.
   * 
   * @example
   * start_date
   */
  name?: string;
  /**
   * @remarks
   * The example value of the parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-01-01
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      description: 'Description',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      description: 'string',
      name: 'string',
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

