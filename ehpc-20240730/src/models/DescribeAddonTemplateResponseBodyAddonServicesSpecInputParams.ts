// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddonTemplateResponseBodyAddonServicesSpecInputParams extends $dara.Model {
  /**
   * @remarks
   * The help information of the parameter.
   */
  helpText?: string;
  /**
   * @remarks
   * The parameter label.
   */
  label?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * This parameter is required.
   * 
   * @example
   * MYSQL_HOME
   */
  name?: string;
  /**
   * @remarks
   * The parameter type.
   * 
   * This parameter is required.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * This parameter is required.
   * 
   * @example
   * usr/local/mysql
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      helpText: 'HelpText',
      label: 'Label',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      helpText: 'string',
      label: 'string',
      name: 'string',
      type: 'string',
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

