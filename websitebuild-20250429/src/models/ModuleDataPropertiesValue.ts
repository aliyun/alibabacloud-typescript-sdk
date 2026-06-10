// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleDataPropertiesValueValues extends $dara.Model {
  /**
   * @remarks
   * placeholder
   * 
   * @example
   * placeholder
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModuleDataPropertiesValue extends $dara.Model {
  /**
   * @remarks
   * Property code, such as "aliyun_commodity_agreement".
   * 
   * @example
   * placeholder
   */
  code?: string;
  /**
   * @remarks
   * List of attribute values
   */
  values?: ModuleDataPropertiesValueValues[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      values: { 'type': 'array', 'itemType': ModuleDataPropertiesValueValues },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

