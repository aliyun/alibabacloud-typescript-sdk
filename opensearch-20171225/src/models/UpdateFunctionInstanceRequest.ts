// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFunctionInstanceRequestCreateParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * title_field
   */
  name?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * title
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateFunctionInstanceRequestUsageParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * allow_dict_id
   */
  name?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 123
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateFunctionInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to create the instance.
   * 
   * @example
   * {             "name": "title_field",             "value": "title"         }
   */
  createParameters?: UpdateFunctionInstanceRequestCreateParameters[];
  /**
   * @remarks
   * The cron expression used to schedule periodic training, in the format of (Minutes Hours DayofMonth Month DayofWeek). The default value is empty, which indicates that no periodic training is performed. DayofWeek 0 indicates Sunday.
   * 
   * @example
   * "0 3 ? * 0,1,3,5"
   */
  cron?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * test instance
   */
  description?: string;
  /**
   * @remarks
   * The parameters that are used.
   */
  usageParameters?: UpdateFunctionInstanceRequestUsageParameters[];
  static names(): { [key: string]: string } {
    return {
      createParameters: 'createParameters',
      cron: 'cron',
      description: 'description',
      usageParameters: 'usageParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createParameters: { 'type': 'array', 'itemType': UpdateFunctionInstanceRequestCreateParameters },
      cron: 'string',
      description: 'string',
      usageParameters: { 'type': 'array', 'itemType': UpdateFunctionInstanceRequestUsageParameters },
    };
  }

  validate() {
    if(Array.isArray(this.createParameters)) {
      $dara.Model.validateArray(this.createParameters);
    }
    if(Array.isArray(this.usageParameters)) {
      $dara.Model.validateArray(this.usageParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

